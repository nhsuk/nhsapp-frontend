import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const projectRoot = process.cwd()
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const sass = resolve(
  projectRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'sass.cmd' : 'sass'
)
const temporaryRoot = mkdtempSync(join(tmpdir(), 'nhsapp-sass-entrypoints-'))

function run(command, args, cwd = projectRoot) {
  execFileSync(command, args, { cwd, stdio: 'inherit' })
}

function compile(input, output, loadPaths) {
  run(sass, [
    '--style=compressed',
    '--no-source-map',
    ...loadPaths.map((loadPath) => `--load-path=${loadPath}`),
    input,
    output
  ])
}

function assertContains(file, value) {
  assert.ok(
    readFileSync(file, 'utf8').includes(value),
    `${file} must contain ${value}`
  )
}

try {
  run(npm, ['run', 'prepack'])

  assert.ok(existsSync(join(projectRoot, 'dist', '_nhsapp.scss')))
  assert.ok(existsSync(join(projectRoot, 'dist', 'nhsapp', 'index.scss')))
  assert.ok(!existsSync(join(projectRoot, 'dist', 'nhsapp', '_nhsapp.scss')))

  const packDirectory = join(temporaryRoot, 'pack')
  mkdirSync(packDirectory)
  run(npm, ['pack', '--ignore-scripts', '--pack-destination', packDirectory])

  const packageArchives = readdirSync(packDirectory).filter((file) =>
    file.endsWith('.tgz')
  )
  assert.equal(packageArchives.length, 1)

  const consumerDirectory = join(temporaryRoot, 'consumer')
  mkdirSync(consumerDirectory)
  writeFileSync(
    join(consumerDirectory, 'package.json'),
    `${JSON.stringify({ private: true }, null, 2)}\n`
  )

  run(
    npm,
    [
      'install',
      '--ignore-scripts',
      '--legacy-peer-deps',
      '--no-audit',
      '--no-fund',
      '--no-package-lock',
      '--no-save',
      join(packDirectory, packageArchives[0])
    ],
    consumerDirectory
  )

  const consumerModules = join(consumerDirectory, 'node_modules')
  symlinkSync(
    join(projectRoot, 'node_modules', 'nhsuk-frontend'),
    join(consumerModules, 'nhsuk-frontend'),
    process.platform === 'win32' ? 'junction' : 'dir'
  )

  const installedPackage = join(consumerModules, 'nhsapp-frontend')
  assert.ok(existsSync(join(installedPackage, 'dist', '_nhsapp.scss')))
  assert.ok(existsSync(join(installedPackage, 'dist', 'nhsapp', 'index.scss')))
  assert.ok(
    !existsSync(join(installedPackage, 'dist', 'nhsapp', '_nhsapp.scss'))
  )

  const fixtures = {
    'root-use': '@use "nhsapp-frontend/dist/nhsapp";\n',
    'root-import': '@import "nhsapp-frontend/dist/nhsapp";\n',
    'issue-566-import': '@import "node_modules/nhsapp-frontend/dist/nhsapp";\n',
    'legacy-import': '@import "nhsapp-frontend/dist/nhsapp/all";\n',
    'button-use': '@use "nhsapp-frontend/dist/nhsapp/components/button";\n'
  }

  for (const [name, source] of Object.entries(fixtures)) {
    const input = join(consumerDirectory, `${name}.scss`)
    writeFileSync(input, source)
    compile(input, join(consumerDirectory, `${name}.css`), [consumerModules])
  }

  const rootCss = readFileSync(join(consumerDirectory, 'root-use.css'), 'utf8')
  for (const equivalent of [
    'root-import',
    'issue-566-import',
    'legacy-import'
  ]) {
    assert.equal(
      readFileSync(join(consumerDirectory, `${equivalent}.css`), 'utf8'),
      rootCss
    )
  }
  assertContains(join(consumerDirectory, 'root-use.css'), '.nhsapp-card')
  assertContains(join(consumerDirectory, 'root-use.css'), '.nhsapp-button')
  assertContains(join(consumerDirectory, 'button-use.css'), '.nhsapp-button')

  run(npm, ['run', 'release'])

  const packageJson = JSON.parse(
    readFileSync(join(projectRoot, 'package.json'), 'utf8')
  )
  const releaseArchive = join(
    projectRoot,
    'dist',
    `nhsapp-frontend-${packageJson.version}.zip`
  )
  assert.ok(existsSync(releaseArchive))

  const releaseDirectory = join(temporaryRoot, 'release')
  mkdirSync(releaseDirectory)
  run('unzip', ['-q', releaseArchive, '-d', releaseDirectory])

  const releaseFiles = readdirSync(releaseDirectory, { recursive: true })
  assert.ok(releaseFiles.includes('index.scss'))
  assert.ok(releaseFiles.includes('all.scss'))
  assert.ok(!releaseFiles.some((file) => file.endsWith('_nhsapp.scss')))

  const releaseFixture = join(temporaryRoot, 'release.scss')
  const releaseCss = join(temporaryRoot, 'release.css')
  writeFileSync(releaseFixture, '@use "index";\n')
  compile(releaseFixture, releaseCss, [
    releaseDirectory,
    join(projectRoot, 'node_modules')
  ])
  assertContains(releaseCss, '.nhsapp-card')
  assertContains(releaseCss, '.nhsapp-button')

  console.log('Sass package entrypoint contract verified.')
} finally {
  rmSync(temporaryRoot, { force: true, recursive: true })
}

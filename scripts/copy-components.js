import fs from 'fs-extra'
import chokidar from 'chokidar'

const sourceDirs = {
  components: 'src/components',
  styles: 'src/styles',
  assets: 'src/assets'
}

const targetBase = 'docs/_includes/nhsapp'

let copyTimer = null

async function copyAllSources() {
  if (copyTimer) {
    clearTimeout(copyTimer)
  }

  copyTimer = setTimeout(async () => {
    try {
      await fs.ensureDir(targetBase)

      // Copy each source directory
      for (const [name, sourceDir] of Object.entries(sourceDirs)) {
        const targetDir = `${targetBase}/${name}`
        if (await fs.pathExists(sourceDir)) {
          await fs.copy(sourceDir, targetDir)
          console.log(`✅ ${name} copied to ${targetDir}`)
        }
      }
    } catch (error) {
      console.error('❌ Error copying sources:', error.message)
    }
  }, 100) // Debounce by 100ms
}

// If --watch flag is passed, watch for changes
if (process.argv.includes('--watch')) {
  const watchPaths = Object.values(sourceDirs).filter(
    async (dir) => await fs.pathExists(dir)
  )

  chokidar
    .watch(watchPaths, {
      ignoreInitial: false,
      awaitWriteFinish: {
        stabilityThreshold: 50,
        pollInterval: 10
      }
    })
    .on('all', (event, path) => {
      console.log(`📁 ${event}: ${path}`)
      copyAllSources()
    })

  console.log(`👀 Watching for changes...`)
} else {
  copyAllSources()
}

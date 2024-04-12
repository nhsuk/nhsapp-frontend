import gulp from 'gulp'
import rename from 'gulp-rename'
import { nunjucksCompile } from 'gulp-nunjucks'
import nunjucks from 'nunjucks'
import connect from 'gulp-connect'

const config = {
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',
  dest: 'dist/docs',
  templates: [
    'docs/_templates',
    'src/components',
    'node_modules/nhsuk-frontend/packages/components'
  ]
}

/**
 * Turn nunjucks into html
 */
function buildHtml() {
  return gulp
    .src(['docs/views/**/*.njk'])
    .pipe(
      nunjucksCompile(
        {
          // site-wide data goes here
          baseUrl: config.baseUrl
        },
        {
          env: new nunjucks.Environment(
            new nunjucks.FileSystemLoader(config.templates)
          )
        }
      )
    )
    .on('error', (err) => {
      console.log(err)
    })
    .pipe(
      rename({
        extname: '.html'
      })
    )
    .pipe(gulp.dest(config.dest))
}

/**
 * Copy built assets from dist into the documentation directory
 */
function copyBuiltAssets() {
  return gulp.src('dist/*.{css,js}').pipe(gulp.dest(`${config.dest}/assets/`))
}

/**
 * Copy logos, icons and other binary assets
 */
function copyBinaryAssets() {
  return gulp.src('src/assets/**/*').pipe(gulp.dest(`${config.dest}/assets/`))
}

/**
 * Copy nhsuk-frontend's built css file into our docs assets directory.
 * This will be served alongside our own css.
 */
function copyNhsukAssets() {
  return gulp
    .src('node_modules/nhsuk-frontend/dist/nhsuk.css')
    .pipe(gulp.dest(`${config.dest}/assets/`))
}

/**
 * Serve the static docs directory over localhost
 */
function serve() {
  connect.server({
    host: '0.0.0.0',
    livereload: true,
    port: 3000,
    root: config.dest
  })
}

/**
 * Reload the connect server
 */
function reload() {
  return gulp.src(config.dest).pipe(connect.reload())
}

const build = gulp.series([
  copyNhsukAssets,
  copyBuiltAssets,
  buildHtml,
  copyBinaryAssets,
  reload
])

export { build, serve }

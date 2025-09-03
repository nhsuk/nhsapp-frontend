import gulp from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import gulpClean from 'gulp-clean'
import zip from 'gulp-zip'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import packageJson from './package.json' with { type: 'json' }
import PluginError from 'plugin-error'

/* Configure the sass compiler */
const sass = gulpSass(dartSass)

/* Remove all compiled files */
function clean() {
  return gulp.src('dist', { allowEmpty: true }).pipe(gulpClean())
}

/* Build the CSS from source (with sourcemaps + improved error handling) */
function compileCSS() {
  return gulp
    .src(['src/all.scss'], { sourcemaps: true })
    .pipe(
      sass({
        loadPaths: ['node_modules'],
        // Enable source maps so line numbers map back to source during development
        sourceMap: true,
        sourceMapIncludeSources: true
      }).on('error', (error) => {
        // Provide a nicely formatted Sass error
        throw new PluginError(
          'compileCSS',
          error.messageFormatted || error.message,
          {
            showProperties: false
          }
        )
      })
    )
    .pipe(rename('nhsapp.css'))
    .pipe(gulp.dest('dist', { sourcemaps: '.' }))
}

/* Minify CSS and add a min.css suffix */
function minifyCSS() {
  return gulp
    .src([
      'dist/*.css',
      '!dist/*.min.css', // don't re-minify minified css
      '!dist/*.css.map' // ignore source map files
    ])
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: `-${packageJson.version}.min`
      })
    )
    .pipe(gulp.dest('dist/'))
}

/**
 * Copy assets such as icons and images into the distribution
 */
function copyAssets() {
  return gulp.src('src/assets/**').pipe(gulp.dest('dist/assets/'))
}

/**
 * Copy nunjucks and source scss files into a namespaced directory
 */
function copySource() {
  return gulp.src('src/**/*').pipe(gulp.dest('dist/nhsapp'))
}

/* Recompile CSS when there are any changes */
function watch() {
  gulp.watch(['src/**/*'], compileCSS)
}

/**
 * Release tasks
 */
function createZip() {
  return gulp
    .src(['dist/nhsapp/**', `dist/nhsapp-${packageJson.version}.min.css`])
    .pipe(zip(`nhsapp-frontend-${packageJson.version}.zip`))
    .pipe(gulp.dest('dist'))
}

/**
 * The default task is to build everything, and watch for changes
 */
export default gulp.series([clean, compileCSS, watch])

const bundle = gulp.series([
  clean,
  compileCSS,
  minifyCSS,
  copyAssets,
  copySource
])

const release = gulp.series([
  clean,
  compileCSS,
  minifyCSS,
  copySource,
  createZip
])

export { clean, bundle, compileCSS, release }

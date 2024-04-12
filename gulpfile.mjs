import gulp from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import gulpClean from 'gulp-clean'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import packageJson from './package.json' with { type: 'json' }

/* Import gulp tasks used for creating our website pages. */
import * as docs from './tasks/docs.mjs'

/* Configure the sass compiler */
const sass = gulpSass(dartSass)

/* Remove all compiled files */
function clean() {
  return gulp.src('dist', { allowEmpty: true }).pipe(gulpClean())
}

/* Build the CSS from source */
function compileCSS() {
  return gulp
    .src(['src/nhsapp.scss'])
    .pipe(sass())
    .on('error', (err) => {
      console.log(err)
      throw new Error(err)
    })
    .pipe(gulp.dest('dist/'))
}

/* Minify CSS and add a min.css suffix */
export function minifyCSS() {
  return gulp
    .src([
      'dist/*.css',
      '!dist/*.min.css' // don't re-minify minified css
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

/* Recompile CSS and docs when there are any changes */
function watch() {
  gulp.watch(['src/**/*', 'docs/**/*'], gulp.series([compileCSS, docs.build]))
}

/**
 * The default task is to build everything, serve the docs and watch for changes
 */
export default gulp.series([
  clean,
  compileCSS,
  docs.build,
  gulp.parallel([docs.serve, watch])
])

const bundle = gulp.series([clean, compileCSS, minifyCSS, copyAssets])
const buildDocs = docs.build

export { clean, bundle, buildDocs }

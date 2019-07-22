const gulp         = require('gulp');

const stylus       = require('gulp-stylus');
const pug          = require('gulp-pug');

const minifyCss    = require('gulp-minify-css');
const uglifyJs     = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const rename       = require('gulp-rename');

const browserSync  = require('browser-sync');
const reload       = browserSync.reload;

const paths = {
  styl : ['src/styles/style.styl'],
  pug  : ['src/templates/index.pug'],
  js   : ['src/scripts/main.js'],
};

gulp.task('autoReload', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  })
});

gulp.task('compilStyl', function() {
  return gulp.src(paths.styl)
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/dist'))
    .pipe(reload({stream: true}))
});

gulp.task('compilPug', function() {
  return gulp.src(paths.pug)
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(reload({stream: true}))
});

gulp.task('js', function() {
  return gulp.src(paths.js)
    // .pipe(uglifyJs())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/dist'))
    .pipe(reload({stream: true}))
});

gulp.task('watch', function() {
    gulp.watch(paths.styl, gulp.series('compilStyl'));
    gulp.watch(paths.pug, gulp.series('compilPug'));
    gulp.watch(paths.js, gulp.series('js'));
});

gulp.task('default', gulp.parallel('watch', 'autoReload'))

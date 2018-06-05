const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const config = {
    rootSrc: './',
    styleSrc: './src/scss/',
    styleDist: './src/css/',
};

gulp.task('sass', () => {
    gulp.src(config.styleSrc + 'style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.styleDist))
});


gulp.task('watch', () => {
    gulp.watch(config.styleSrc + '**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['build', 'watch']);


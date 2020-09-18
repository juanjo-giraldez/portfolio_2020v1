const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function css() {
    return gulp
        .src('scss/app.scss', {allowEmpty: true}  )
        .pipe(autoprefixer({
            overrideBrowserslist : [
            "last 2 version"] ,
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe( gulp.dest('css'));
}



gulp.task( 'css', css );

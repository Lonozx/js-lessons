const {src, dest} = require('gulp');
const scss = require('gulp-sass')(require('sass'))
const image = require('*.jpg')(require('*.png'));
const image = require('gulp-images');

function style(){
    return src('./src/style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/'))
}

// function defaultTask(cd){
//     cd();
// }

function imageRead(){
    
    // return
    // src('./src/images/*.jpg')
    // .pipe(image()).on('error', )
}

function html(){
    return src('./src/**/**/*.html').pipe(dest('./dist/'))
}

function imgRec(){
    return src('src/images/*')
        .pipe(image())
        .pipe(dest('dist/images'));
    }
    

function watchIn(){
    watch('./src/style/**/*.scss', style)
    watch('./src/**/*.html', html)
}

exports.default = parallel(style, html, watchIn);
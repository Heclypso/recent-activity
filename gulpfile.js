import gulp from "gulp"
import htmlmin from "gulp-htmlmin";
import imagemin from "gulp-imagemin";
import rename from "gulp-rename";
import uglify from "gulp-uglify"
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps"
import dartSass from "sass"
import gulpSass from "gulp-sass"
const sass = gulpSass(dartSass)

function compilaSass() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
}

function comprimeHtml() {
    return gulp.src("./src/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("./dist"))
}

function minificaImagens() {
    return gulp.src("./src/images/*.{png,jpg,svg,gif}")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"))
}

function compilaJavaScript() {
    return gulp.src("./src/scripts/*.js")
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("./dist/scripts"))
}

function watchFiles() {
    gulp.watch("./src/styles/**/*.scss", {ignoreInitial: false}, compilaSass)
    gulp.watch("./src/*.html", {ignoreInitial: false}, comprimeHtml)
    gulp.watch("./src/images/*.{png,jpg,svg,gif}", {ignoreInitial: false}, minificaImagens)
    gulp.watch("./src/scripts/*.js", {ignoreInitial: false}, compilaJavaScript)
}

export default gulp.series(compilaSass, comprimeHtml, minificaImagens, compilaJavaScript)
export {watchFiles as watch}
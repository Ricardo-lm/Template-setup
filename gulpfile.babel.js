import gulp from "gulp"
import babel from "gulp-babel"
import concat from "gulp-concat"
import uglify from "gulp-uglify"
import plumber from "gulp-plumber"

gulp.task("babel", () => {
    return gulp
        .src("dev/js/*.js") //ruta de entrada
        .pipe(plumber())
        .pipe(
            babel({
                presets: ["@babel/preset-env"],
            }),
        )
        .pipe(concat("scripts-min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("public/js")) //ruta de salida
})

gulp.task("default", () => {
    gulp.watch("dev/js/*.js", gulp.series("babel"))
})
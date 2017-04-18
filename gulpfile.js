var gulp = require("gulp")
var postcss = require("gulp-postcss")
var stylelint = require("stylelint")

gulp.task("lint:css", function () {
  return gulp.src("test/**/*.css")
    .pipe(postcss([
      stylelint({
      })
    ]))
})

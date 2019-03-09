var gulp        = require('gulp')
var browserSync = require('browser-sync').create()
var reload      = browserSync.reload

gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    },
    port: 2000
  })

  gulp.watch("*.html").on('change', reload);
  gulp.watch("css/*.css").on('change', reload);
  gulp.watch("js/*.js").on('change', reload);
})

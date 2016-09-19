var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function() {
  browserSync({
    server: true,
    browser: 'google-chrome-stable'
  });

  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], reload);
});

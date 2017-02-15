gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("app/assets/javascripts/tsconfig.json");
var dest = "./public/assets/";

gulp.task('compile-typescript', function(){
  return tsProject.src().pipe(tsProject()).
          js.pipe(gulp.dest(dest));
});

gulp.task('compile-css', function(){
  return gulp.src('app/assets/stylesheets/*.css').
          pipe(gulp.dest(dest));
});

gulp.task('default', ['compile-typescript', 'compile-css']);

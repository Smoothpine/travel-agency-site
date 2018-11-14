var gulp = require("gulp"),
	postCss = require("gulp-postcss"),
	cssImport = require("postcss-import"),
	cssVars = require("postcss-simple-vars"),
	nested = require("postcss-nested"),
	autoPrefixer = require("autoprefixer"),
	mixins = require("postcss-mixins");

gulp.task("styles", function(){
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postCss([cssImport, mixins, cssVars, nested, autoPrefixer]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit("end");
		})
		.pipe(gulp.dest("./app/temp/styles"));
});
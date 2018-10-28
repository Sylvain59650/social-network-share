var babel = require("gulp-babel");
var gulp = require("gulp");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
const minifyCSS = require("gulp-csso");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

var chemins = {
  sources: "./sources/",
  scss: "./sources/scss/",
  distrib: "./distrib/",
  demo: "./docs/demo/"
};



gulp.task("distrib:social-network-share.min.js", () => {
  return gulp.src([
      "sources/social-network-share.js"
    ])
    .pipe(concat("social-network-share.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      comments: false
    }))

  .pipe(gulp.dest(chemins.distrib + "js/"))
});

gulp.task("demo:social-network-share.min.js", () => {
  return gulp.src([
      "sources/social-network-share.js"
    ])
    .pipe(concat("social-network-share.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      comments: false
    }))
    .pipe(gulp.dest(chemins.demo + "modules/social-network-share/distrib/js/"))
});

gulp.task("distrib:social-network-share.config.min.js", () => {
  return gulp.src([
      "sources/config/*.js"
    ])
    .pipe(concat("social-network-share.config.min.js"))
    .pipe(gulp.dest(chemins.distrib + "js/"))
});

gulp.task("demo:social-network-share.config.min.js", () => {
  return gulp.src([
      "sources/config/*.js"
    ])
    .pipe(concat("social-network-share.config.min.js"))
    .pipe(gulp.dest(chemins.demo + "modules/social-network-share/distrib/js"))
});

gulp.task("demo:vendor", () => {
  return gulp.src([
      "./node_modules/htmlelement-extension/distrib/htmlElement.min.js",
      "./node_modules/htmlelement-events-extension/distrib/htmlElement-events.min.js"
    ])
    .pipe(gulp.dest(chemins.demo + "modules/"))
});



gulp.task("distrib", ["distrib:social-network-share.config.min.js", "distrib:social-network-share.min.js", "distrib:css"]);
gulp.task("demo", ["demo:vendor", "demo:social-network-share.config.min.js", "demo:social-network-share.min.js", "demo:css"]);

gulp.task("watch:social-network-share.min.js", function() {
  watch("./sources/social-network-share.js", function() {
    gulp.run("distrib:social-network-share.min.js");
    gulp.run("demo:social-network-share.min.js");
  });
});


gulp.task("watch:social-network-share.config.min.js", function() {
  watch("./sources/config/*.js", function() {
    gulp.run("distrib:social-network-share.config.min.js");
    gulp.run("demo:social-network-share.config.min.js");
  });
});

gulp.task("distrib:css", function() {
  return gulp.src("./sources/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    //  .pipe(concat("style.min.css"))
    //  .pipe(minifyCSS())
    .pipe(gulp.dest(chemins.distrib + "css/"));
});

gulp.task("demo:css", function() {
  return gulp.src("./sources/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    //  .pipe(concat("style.min.css"))
    //  .pipe(minifyCSS())
    .pipe(gulp.dest(chemins.demo + "modules/social-network-share/distrib/css/"));
});

gulp.task("watch:css", function() {
  gulp.watch("./sources/scss/*.scss", ["distrib:css", "demo:css"]);
});

gulp.task("default", ["demo", "distrib"]);

gulp.task("watch", [
  "watch:social-network-share.min.js",
  "watch:social-network-share.config.min.js",
  "watch:css"
]);
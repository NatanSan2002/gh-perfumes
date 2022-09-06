let gulp = require("gulp");

//IMGS

let imagemin = require("gulp-imagemin");

let diretorioimg = "./src/imgs/**/*";
let buildimg = "./build_gulp/imgs/";

gulp.task("reduzir-imagem",function () {


gulp.src(diretorioimg)
 .pipe(imagemin())
 .pipe(gulp.dest(buildimg))
})

// CSS



let minifyCSS = require("gulp-minify-css");
let concat = require("gulp-concat")
let autoPrefixer = require("gulp-autoprefixer");

let filecss = "./src/componentes/**/*.css";
let buildcss = "./build_gulp/css/";

gulp.task("styles", async function (){


await gulp.src(filecss)
.pipe(minifyCSS())
.pipe(gulp.dest(buildcss))
})


// Geral


gulp.task("watch",function() {
gulp.watch([filecss],["styles"]);
gulp.watch([diretorioimg],["reduzir-imagem"]);
})








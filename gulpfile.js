
const { src, dest ,symlink } = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');


async function defaultTask(cd) {

  

  src('./src/**/*.ts').pipe(tsProject()).pipe(dest("./dist/"))

  cd()
  }
  
  exports.default = defaultTask
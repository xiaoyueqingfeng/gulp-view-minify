# gulp-view-minify
A gulp plugin using for minify ejs、html、xml and wxml files.

## Information

<table>
<tr>
<td>Package</td><td>gulp-view-minify</td>
</tr>
<tr>
<td>Description</td>
<td>Ejs plugin for gulp</td>
</tr>
</table>

## Installation

```
npm install gulp-view-minify
```

## Basic Usage

```js
var viewMinify = require('gulp-view-minify');

gulp.task('minify', function () {
  return gulp.src('./views/**/*.ejs')
    .pipe(viewMinify())
    .pipe(gulp.dest('./public/views'));
});
```
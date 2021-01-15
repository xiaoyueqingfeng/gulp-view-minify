var through = require('through2');

function minify(file) {
  var contents = String(file.contents)
  contents = contents
    .replace(/\t\n\r/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s*([;:{}])\s*/g, '$1')
    .replace(/>\s+</g, '><')
  file.contents = Buffer.from(contents);
  return file;
}

module.exports = function () {
  return through.obj(function (file, encoding, callback) {
    var newFile = null;
    var err = null;
    try {
      newFile = minify(file);
    } catch (e) {
      err = e;
    }
    callback(err, newFile);
  });
}
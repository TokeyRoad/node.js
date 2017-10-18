var fs = require('fs');
var zlib = require('zlib');

//压缩input文件为input.gz
fs.createReadStream('input')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.zip'));
console.log("文件压缩完成.");
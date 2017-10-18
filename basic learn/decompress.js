var fs = require('fs');
var zlib = require('zlib');

//压缩input文件为input.gz
fs.createReadStream('input.zip')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input'));
console.log("文件解压完成.");
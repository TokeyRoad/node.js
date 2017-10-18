var fs = require("fs");
var data = '111百度 www.baidu.com';

var writerStream = fs.createWriteStream('output');
writerStream.write(data,'UTF8');

//标记文件末尾
writerStream.end();

//处理流事件
writerStream.on('finish',function(){
	console.log('写入完成。');
});

writerStream.on('error',function(){
	console.log(err.stack);
});

console.log('程序执行完毕');

var str = '';
var reader = fs.createReadStream('output');
reader.setEncoding('UTF8');
reader.on('data',function(chunk){
	str += chunk;
});

reader.on('end',function(){
	console.log(str);
});

reader.on('error',function(err){
	console.log(err.stack);
});

console.log("over");

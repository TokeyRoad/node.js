var fs = require('fs');

var reader = fs.createReadStream('input');
var writer = fs.createWriteStream('output');

reader.pipe(writer);

console.log("over");

var str = '';
reader.on('data',function(chunk){
	str += chunk;
});
reader.on('end',function(){
	console.log(str);
});
reader.on('error',function(err){
	console.log(err.stack);
});
console.log("结束");
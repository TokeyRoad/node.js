buf = new Buffer(13);
len = buf.write("www.baidu.com");

console.log("写入的字节数:" + len);
// for(var i = 0; i < len; i++){
// 	console.log(buf[i]);
// }

console.log( buf.toString());

//json
var json = buf.toJSON();
// console.log(json);

var buf2 = new Buffer('zhaolinhui');
// buf = Buffer.concat([buf,buf2]);
console.log(buf2.toString());

var result = buf2.compare(buf);//返回值可能为-1,0,1
console.log(result);

//copy
buf.copy(buf2,2,2,5);
console.log(buf2.toString());

var buf3 = buf.slice(2,5);
console.log(buf3.toString() + buf3.length);
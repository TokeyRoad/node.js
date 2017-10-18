console.log(__filename);
console.log(__dirname);

var count = 0;
function printHello(){
	if(count == 4)
		clearTimeout(ss);
	else{
		count++;
		console.log("Hello world");
	}
}

var t = setTimeout(printHello,2);
clearTimeout(t);
console.log("over");

var ss = setInterval(printHello,2000);
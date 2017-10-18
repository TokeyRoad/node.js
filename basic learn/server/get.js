var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'Text/plain'});
	// res.end(util.inspect(url.parse(req.url,true)));

	var params = url.parse(req.url,true).query;
	res.write("网站名：" + params.psd);
	res.write('\n');
	res.write('网站url：' + params.url);
	res.end();
}).listen(3000);
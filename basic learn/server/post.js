var http = require('http');
var querystring = require('querystring');

//表单
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit" value="提交">' +
  '</form>' +
  '</body></html>';

http.createServer(function(req,res){
	var post = '';
	req.on('data',function(chunk){
		post += chunk;
	});

	req.on('end',function(){
		//解析参数
		post = querystring.parse(post);
		res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});

		if(post.name && post.url){
			res.write("网站名:" + post.name);
			res.write("<br>");
			res.write("url:" + post.url);
		}else{
			res.write(postHTML);
		}
		res.end();
	});
}).listen(3000);
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(express.static('public'));
app.use(multer({dest:'/pic/'}).array('image'));

app.get('/index.html',function(req,res){
	res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/index_post.html',function(req,res){
	res.sendFile(__dirname + '/' + 'index_post.html');
})

app.get('/index_file.html',function(req,res){
	res.sendFile(__dirname + '/' + 'index_file.html');
})

app.get('/process_get',function(req,res){
	//json
	response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/process_post',urlencodedParser,function(req,res){

	//JSON
	response = {
		first_name:req.body.first_name,
		last_name:req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/file_upload',function(req,res){

	console.log(req.files[0]);//上传的文件信息

	var des_file = __dirname + '/pic/' + req.files[0].originalname;
	fs.readFile(req.files[0].path,function(err,data){
		fs.writeFile(des_file,data,function(err){
			if(err){
				console.log(err);
			}else{
				response = {
					message:'File uploaded successfully',
					filename:req.files[0].originalname
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
})

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port);
})
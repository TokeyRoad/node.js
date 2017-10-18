// var fs = require('fs');

// console.log('start');
// fs.open('input','r+',function(err,stats){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log(stats);
// 	console.log('success!');
// });

// fs.stat('./file.js',function(err,stats){
// 	console.log(stats.isFile());
// })

// fs.stat('input',function(err,stats){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log(stats);
// 	console.log('success!');
// });


// console.log('ready');
// var data = '内容'
// fs.writeFile('input',data,function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('write success');
// 	console.log('----------------------------');
// 	console.log('read');
// 	fs.readFile('input',function(err,data){
// 		if(err){
// 			return console.error(err);
// 		}
// 		console.log(data.toString());
// 	});
// });

// var fs = require('fs');
// var buf = new Buffer(1024);

// console.log('ready');
// fs.open('output','r+',function(err,fd){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('success');

// 	//截取
// 	fs.ftruncate(fd,10,function(err){
// 		if(err){
// 			console.log(err);
// 		}
// 		console.log('截取成功');
// 	})
// 	console.log('ready read');
// 	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
// 		if(err){
// 			console.log(err);
// 		}
// 		console.log(bytes + '字节被读取');

// 		if(bytes > 0){
// 			console.log(buf.slice(0,bytes).toString());
// 		}

// 		fs.close(fd,function(err){
// 			if(err){
// 				console.log(err);
// 			}
// 			console.log('close success');
// 		});
// 	});
// });

// var fs = require('fs');
// console.log('ready');
// fs.unlink('delete',function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('success');
// })

// var fs = require('fs');

// console.log('create dir');
// fs.mkdir('./test/',function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log('mkdir success');
// });


var fs = require('fs');

console.log('read dir');
fs.readdir('./test',function(err,files){
	if(err){
		return console.error(err);
	}
	files.forEach(function(file){
		console.log(file);
	});
});

console.log('delete dir');
fs.rmdir('./test',function(err){
	if(err){
		return console.error(err);
	}
	console.log('read dir');
	fs.readdir('./test/',function(err){
		if(err){
			return console.error(err);
		}

		files.forEach(function(file){
			console.log(file);
		});
	});
});





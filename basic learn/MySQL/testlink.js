var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'test'
});

connection.connect();

connection.query('select * from user',function(error,result){
	if(error){
		console.log('[select error] - ',err.message);
		return;
	}
	console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});
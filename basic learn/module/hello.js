function Hello(){
	var name;
	this.setName = function(Tname){
		name = Tname;
	};
	this.sayHello = function(){
		console.log('Hello ' + name);
	};
};
module.exports = Hello;
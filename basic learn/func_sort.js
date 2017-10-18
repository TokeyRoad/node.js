var events = require('events');
var emitter = new events.EventEmitter();
console.log(1);
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
});
console.log(2);
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2);
});
console.log(3);

emitter.emit('someEvent','arg1 参数','arg2 参数');//触发事件
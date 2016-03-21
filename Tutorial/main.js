var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
  console.log('connection Successful');
  eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
  console.log('Data received successfully');
});

eventEmitter.emit('connection');
console.log('program ended');

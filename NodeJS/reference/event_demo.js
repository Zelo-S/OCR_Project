const EventEmitter = require('events');

// initialize class
class MyEmitter extends EventEmitter{

}

// initialize object
const myEmitter= new MyEmitter();

// event listner
myEmitter.on('event', () => console.log('Event fired'));

// Init event
myEmitter.emit('event');















const EventEmitter = require('events');

const Event = new EventEmitter();

Event.on('first',(name,id)=>{
    console.log(`${name}: ${id}`);
})
Event.on('first',()=>{
    console.log('second event fired');
})

Event.emit('first','john',34);
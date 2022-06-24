// const EventEmitter = require('events');

// const Event = new EventEmitter();

// Event.on('first',(name,id)=>{
//     console.log(`${name}: ${id}`);
// })
// Event.on('first',()=>{
//     console.log('second event fired');
// })

// Event.emit('first','john',34);
const http = require('http')
const server = http.createServer();
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(3200, 'localhost', () => {
    console.log('listening')
})
// const { readFile, writeFile, appendFile } = require('fs').promises;

// for (let i = 0; i < 100; i++) {
//     appendFile('./views/big.txt', `hello ${i}\n`,()=>{})
// }

// const bigFunction = async (val) => {
//     await appendFile('./views/big.txt', `${val}\n`)
// }

// for (let i = 0; i < 101; i++) {
//     bigFunction(i);
// }

// file stream
// default size of buffer is 64kb
const { createReadStream } = require('fs');

const stream = createReadStream('./views/big.txt',{highWaterMark:10000,encoding:'utf8'});

stream.on('data', (chunk) => {
    console.log(chunk);
})
stream.on('error',(err)=>{
    console.log(error)
})
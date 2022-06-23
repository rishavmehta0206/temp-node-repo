const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// second way.
// const promiseReadFile = util.promisify(readFile);
// const promiseWriteFile = util.promisify(readFile);
const { get } = require('lodash');
const path = require('path');

writeFile(path.join(__dirname, 'views', 'second.txt'), 'second text file', (err, data) => {
    console.log("data added");
})

// async function using promises - first way.

// const getText = (paths) => {
//     return new Promise((resolve, reject) => {
//         readFile(path.join(paths), 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }


// getText(path.join(__dirname, 'views', 'first.txt')).then((data) => {
//     console.log(data);
// })



// improving the example using async await instead.
const start = async () => {
    try {
        // const third = await getText(path.join(__dirname, 'views', 'third.txt'));
        // console.log(third);
        // const fir = await promiseReadFile(path.join(__dirname, 'views', 'first.txt'),'utf8');
        // const sec = await promiseReadFile(path.join(__dirname, 'views', 'second.txt'),'utf8');
        // await promiseWriteFile(path.join(__dirname, 'views', 'third.txt'),`this is ${fir} and second is ${sec}`);


        // third way.
        const first = await readFile(path.join(__dirname, 'views', 'first.txt'), 'utf8');
        const second = await readFile(path.join(__dirname, 'views', 'second.txt'), 'utf8');
        await writeFile(path.join(__dirname, 'views', 'third.txt'), `${first} ${second}`)
        console.log(first, second);
    }
    catch (err) {
        console.log(err);
    }
}

start();
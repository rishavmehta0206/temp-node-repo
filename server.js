const http = require('http');
const fs = require('fs');
const _ = require('lodash')

// const path = require('path')
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    // set header content type
    // loadash
    const num = _.random(0,20);
    console.log(num)
    const greet = _.once(() => {
        console.log('hello')
    });

    greet()
    greet()
    res.setHeader('Content-Type', 'text/html')
    let path = './views'
    switch (req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            // res.write(data);
            // res.statusCode = 200;
            res.end(data);
        }
    })
    // res.write('<h1>hello, rishav</h1>');
    // res.write('<h1>bye, rishav</h1>');
    // res.end();
});
server.listen(3007, 'localhost', () => {
    console.log('listening for request')
});

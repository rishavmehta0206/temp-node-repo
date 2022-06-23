const fs = require('fs')
const path = require('path')
const http = require('http')
const e = require('express')
const server = http.createServer((req, res) => {
    let paths = ""
    switch (req.url) {
        case '/':
            paths += '/about.html'
            break;
        case '/index':
            paths += '/index.html'
            break;
    }
    fs.readFile(path.join(__dirname, 'views', paths), (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.write(data);
        res.end();
    })

})
server.listen(2100, 'localhost', () => { })
fs.readFile(path.join(__dirname, 'views', 'about.html'), (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data.toString())
})

console.log("Hello")
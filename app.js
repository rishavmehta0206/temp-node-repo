const express = require('express')
const app = express();
const path = require('path')

// listen to requests
app.listen(3007);

app.get('/', (req, res) => {
    // res.send('<p>Hello from express</p>');
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})
app.get('/index', (req, res) => {
    // res.send('<p>Hello from express</p>');
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})
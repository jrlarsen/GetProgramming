var express = require('express');

var app = express();

app.get('/', sayHello);

function sayHello (req, res) {
    res.send('<h1>Hello World!</h1>');
}

app.listen(1337);
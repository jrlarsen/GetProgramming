var express = require('express');
var app = express();

app.get('/', sayHello);
app.get('/moon', goMoon);
app.get('/adventure', setOff);

function sayHello (req, res) {
    res.send('<h1>Hello World!</h1>');
}

function goMoon (req, res) {
    var html = '<h1>Moon Quote</h1>';
    html += '<p>We choose to go to the moon.</p>';
    res.send(html);
}

function setOff (req, res) {
    res.send('<p>I’m going on an adventure!</p>');
}

app.listen(1337);
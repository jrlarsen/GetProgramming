var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/fitness', processSession);

function processSession (req, res) {
    console.log(req.body);

    // this code is added later
    // in the chapter
    res.json({
        'status': 'OK',
        'message': 'Session received for ' + req.body.name
    });
    
};

app.listen(1337);
var express = require('express');
var app = express();

var bid = 5;

app.get('/state', getState);
app.post('/bid', makeBid);

function makeBid (req, res) {
    bid = bid + 5;
    res.json({ bid: bid });
}

function getState (req, res) {
    res.json({ bid: bid });
}

app.use(express.static("public"));

app.listen(1337);
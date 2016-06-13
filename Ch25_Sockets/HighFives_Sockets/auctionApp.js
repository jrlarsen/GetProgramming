var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

var bid = 5;

io.on('connection', socketsRouter);

function socketsRouter (socket) {
    
    socket.on('bid', makeBid);
    socket.on('state', getState);

    function makeBid () {
        bid = bid + 5;
        io.emit('update', { bid: bid });
    }

    function getState () {
        socket.emit('update', { bid: bid });
    }
    
}

app.use(express.static("public"));

server.listen(1337);
var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

var bids = {
    "The Fruitinator! Action Figure": 5,
    "Tomorrowland Pin": 5,
    "Get Programming with JavaScript": 5
};

io.on('connection', socketsRouter);

function socketsRouter (socket) {
    
    socket.on('bid', makeBid);
    socket.on('state', getState);

    function makeBid (data) {
        var item = data.item;
        bids[item] += 5;
        
        var bidData = {
            item: item,
            bid: bids[item]
        };
        
        io.to(item).emit('update', bidData);
    }

    function getState (data) {
        var item = data.item;
        
        var bidData = {
            item: item,
            bid: bids[item]
        };
        
        socket.leave(socket.currentRoom);
        socket.join(item);
        socket.currentRoom = item;
        
        socket.emit('update', bidData);
    }
    
}

app.use(express.static("public"));

server.listen(1337);
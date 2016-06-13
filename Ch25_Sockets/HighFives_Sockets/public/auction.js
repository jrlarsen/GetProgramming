var bid = document.getElementById("bid");
var asking = document.getElementById("asking");
var bidButton = document.getElementById("btnBid");
var socket = io('http://localhost:1337');

function updateDisplay (data) {
    bid.innerHTML = data.bid;
    asking.innerHTML = data.bid + 5;
}

function sendBid () {
    socket.emit('bid');
}

bidButton.addEventListener("click", sendBid);

socket.on('update', updateDisplay);
socket.emit('state');
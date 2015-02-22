# Players

## Ready Player One


[jsbin: Listing 3.01](http://jsbin.com/heniza/edit?js,console)
```javascript
var playerName = "Simon";
console.log(playerName);
```

[jsbin: Listing 3.02](http://jsbin.com/vofimi/edit?js,console)
```javascript
var playerName = "Dax";
var playerLocation = "The Library";

console.log(playerName + " is in " + playerLocation);
```

[jsbin: Listing 3.03](http://jsbin.com/hotira/edit?js,console)
```javascript
var player1Name = "Kandra";
var player1Location = "The Armoury";

var player2Name = "Dax";
var player2Location = "The Kitchen";

console.log(player1Name + " is in " + player1Location);
console.log(player2Name + " is in " + player2Location);
```

[jsbin: Listing 3.04](http://jsbin.com/ficisa/edit?js,console)
```javascript
var player1 = {};

player1.name = "Kandra";
player1.location = "The Armoury";

console.log(player1.name + " is in " + player1.location);
```

[jsbin: Listing 3.05](http://jsbin.com/hakajo/edit?js,console)
```javascript
var player1 = {};
var player2;

player1.name = "Kandra";
player1.location = "The Armoury";

player2 = { name : "Dax", location : "The Kitchen" };

console.log(player1.name + " is in " + player1.location);
console.log(player2.name + " is in " + player2.location);
```

[jsbin: Listing 3.06](http://jsbin.com/caponu/edit?js,console)
```javascript
function log(player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = {};
player1.name = "Kandra";
player1.location = "The Armoury";

log(player1);
```

[jsbin: Listing 3.07](http://jsbin.com/cuxava/edit?js,console)
```javascript
function log(player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = { name : "Kandra", location : "The Armoury" };
var player2 = { name : "Dax", location : "The Kitchen" };
var player3 = { name : "Brin", location : "The Library" };

log(player1);
log(player2);
log(player3);
```

[jsbin: Listing 3.08](http://jsbin.com/kamiri/edit?js,console)
```javascript
function log(player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = { name : "Kandra", location : "The Armoury" };
var player2 = { name : "Dax", location : "The Kitchen" };
var player3 = { name : "Brin", location : "The Library" };

var players = [ player1 , player2 , player3 ];

players.forEach(log);
```

[jsbin: Listing 3.09](http://jsbin.com/vojuli/edit?js,console)
```javascript
function log(player) {
    console.log(player.name + " is in " + player.location);
}

var players = [
    { name : "Kandra", location : "The Armoury" },
    { name : "Dax", location : "The Kitchen" },
    { name : "Brin", location : "The Library" }
];

players.forEach(log);
```

[jsbin: Listing 3.10](http://jsbin.com/mexene/edit?js,console)
```javascript
function log(player) {
    console.log(player.name + " is in " + player.location);
    console.log(player.name + " has: " + player.items.join(', ') + '.');
}

var player1 = {
    name : "Brin",
    location : "The Library",
    items : [ "a sword" , "a lamp" ]
};

log(player1);
```

[jsbin: Listing 3.11](http://jsbin.com/kidovo/edit?js,console)
```javascript
function log(player) {
    console.log(player.name + " is in " + player.location);

    if (player.items.length > 0) {
        console.log(player.name + " has: " + player.items.join(', ') + '.');
    }
}

var player1 = {
    name : "Brin",
    location : "The Library",
    items : [ "a sword" , "a lamp" ]
};

var player2 = {
    name : "Dax",
    location : "The Kitchen",
    items : []
};

log(player1);
log(player2);
```


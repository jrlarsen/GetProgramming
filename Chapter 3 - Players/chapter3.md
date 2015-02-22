# Players

## Ready Player One

```javascript
var playerName = "Simon";
console.log(playerName);
```


```javascript
var playerName = "Dax";
var playerLocation = "The Library";

console.log(playerName + " is in " + playerLocation);
```


```javascript
var player1Name = "Kandra";
var player1Location = "The Armoury";

var player2Name = "Dax";
var player2Location = "The Kitchen";

console.log(player1Name + " is in " + player1Location);
console.log(player2Name + " is in " + player2Location);
```


```javascript
var player1 = {};

player1.name = "Kandra";
player1.location = "The Armoury";

console.log(player1.name + " is in " + player1.location);
```


```javascript
var player1 = {};
var player2;

player1.name = "Kandra";
player1.location = "The Armoury";

player2 = { name : "Dax", location : "The Kitchen" };

console.log(player1.name + " is in " + player1.location);
console.log(player2.name + " is in " + player2.location);
```


```javascript
function log(player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = {};
player1.name = "Kandra";
player1.location = "The Armoury";

log(player1);
```


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


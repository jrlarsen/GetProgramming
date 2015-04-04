# 3. Players and Properties

## 3.1 Variables

Throughout each adventure, we need to be able to store information about our players.  For example, we may want to keep track of names, a character's health, which items they are carrying or where they are. Some of that information may stay the same during a game and some may change.

In a program, we can use *variables* to store information for later use. A variable allows us to refer to information by using a label.


### 3.1.1 Ready Player One: Creating and Using a Variable

The first piece of information we need is a name for each player.

```javascript
var playerName = "Simon";
```

The player's name is Simon. We have chosen to give the player's name the label `playerName`. It is good practice to give variables labels which help anyone reading the code understand how the variable will be used. From now on in the program, whenever we need to use the player's name we can refer to it using the label `playerName`. The `var` keyword in the code is used when we are creating a new variable in the program.

Let's use the `playerName` variable to display its value on the console in jsBin. The console has a built in function called `log` which will display information.

[jsbin: Listing 3.01](http://jsbin.com/heniza/edit?js,console)
```javascript
var playerName = "Simon";
console.log(playerName);
```

> Simon

As our game design evolves, we will want to add more information about each player. We might want to know where they are in our world, their current health or which items they are carrying. The information could be text, numbers, dates, lists or some other *data types*. We will mostly be using text information in our program so in the next section we'll have a quick look at some of the ways we can use text and text variables.


### 3.1.2 Displaying Text: String Concatenation

As we collect more data about a player, we can display messages made up of multiple pieces of text by using the `+` symbol. When working with text, this symbol is the *concatenation operator* and is used to join the separate pieces of text into a single piece.

In programming, a piece of data that is text is called a *string*. In the example above, the variable `playerName` has a value which is the string "Simon". When using the `log` function of the console, we can display messages without using variables by using *string literals*, pieces of text within speech marks. Double, `"`, or single, `'`,  speech marks both work but you must start and end your string with the same mark.

```javascript
console.log("You are in a murky wood.");
console.log('Congratulations! You have found the treasure.');
```
> You are in a murky wood.

> Congratulations! You have found the treasure.

The concatenation operator, `+` can combine string literals and variables.

[jsbin: Listing 3.02](http://jsbin.com/vofimi/edit?js,console)
```javascript
var playerName = "Dax";
var playerLocation = "The Library";
var playerHealth = 45;

console.log(playerName + " is in " + playerLocation);
```
> Dax is in The Library

Notice the spaces in the logged string literal; it is a common mistake to forget spaces when concatenating strings and variables.


### 3.1.3 Ready Player Two: More and More Variables

As we progress through our program we will find we need to store more and more information about a player. In a multi-player environment we will need to store all that information for every player. Choosing good variable names becomes ever more important and can become ever more repetitive and tedious.

[jsbin: Listing 3.03](http://jsbin.com/hotira/edit?js,console)
```javascript
var player1Name = "Kandra";
var player1Location = "The Armoury";
var player1Health = 53;

var player2Name = "Dax";
var player2Location = "The Kitchen";
var player2Health = 28;

console.log(player1Name + " is in " + player1Location);
console.log(player2Name + " is in " + player2Location);
```

As more players join the game, the number of variables will quickly get out of hand. We need a better way to organise our variables and our data.


### 3.1.4 Objects: Collecting a Player's Properties

Instead of having a variable for every piece of information we need to store, we can create a single variable for each player. We would then want information about the player to be stored as sub-variables. The mechanism for such variables and sub-variables in JavaScript uses what are called *objects*. A variable can be a label for one of these objects. For example, the value of `player1` could be an object. Each piece of information about that player is then attached to the object as a *property*.

An empty object, one with no properties, is created using curly brackets, `{}`. Properties can then be set on the object by using *dot notation*.

[jsbin: Listing 3.04](http://jsbin.com/ficisa/edit?js,console)
```javascript
var player1 = {};

player1.name = "Kandra";
player1.location = "The Armoury";

console.log(player1.name + " is in " + player1.location);
```
> Kandra is in The Armoury

Notice, in the example above, that only a single variable, `player1`, is used. The name and location are set as properties of the object.

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


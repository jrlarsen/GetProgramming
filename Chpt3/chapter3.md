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


### 3.2 Objects: Collecting a Player's Properties

Instead of having a variable for every piece of information we need to store, we can create a single variable for each player. We would then want information about the player to be stored as sub-variables. The mechanism for such variables and sub-variables in JavaScript uses what are called *objects*. A variable can be a label for one of these objects. For example, the value of `player1` could be an object. Each piece of information about that player is then attached to the object as a *property*.


### 3.2.1 Adding Properties to Empty Objects

An empty object, one with no properties, is created using empty curly brackets, `{}`. Properties can then be set on the object by using *dot notation*.

[jsbin: Listing 3.04](http://jsbin.com/ficisa/edit?js,console)
```javascript
var player1 = {};

player1.name = "Kandra";
player1.location = "The Armoury";

console.log(player1.name + " is in " + player1.location);
```
> Kandra is in The Armoury

Notice, in the example above, that only a single variable, `player1`, is used. The name and location are set as properties of the object.


### 3.2.2 Creating Objects with Existing Properties

In the previous example we created an empty object and then added properties to it. It is also possible to create an object with properties already in place. We simply include the property names and values between the curly brackets.

[jsbin: Listing 3.05](http://jsbin.com/hakajo/edit?js,console)
```javascript
var player2 = { name : "Dax", location : "The Kitchen" };

console.log(player2.name + " is in " + player2.location);
```
> Dax is in The Kitchen

Within the curly brackets, the properties are separated by commas. Each property is made up of the property name, or *key*, and the property value. Each key and value are separated by a colon, `:`.

Extra properties can be added to an object after it has been created and existing properties can be changed.

```javascript
var player2 = { name : "Dax", health : 42 };

player2.location = "The Dungeon";
player2.name = "Kandra";

console.log(player2.name + " is in " + player2.location);
```
>Kandra is in The Dungeon


### 3.3 Don't Repeat Yourself: Functions

As more players are created, we find ourselves repeating similar code to display information about each one. Notice how the three calls to `console.log` below have exactly the same structure and each uses a variable that refers to a player.

```javascript
var player1 = { name : "Kandra", location : "The Armoury" };
var player2 = { name : "Dax", location : "The Kitchen" };
var player3 = { name : "Brin", location : "The Library" };

console.log(player1.name + " is in " + player1.location);
console.log(player2.name + " is in " + player2.location);
console.log(player3.name + " is in " + player3.location);
```
> Kandra is in The Armoury

> Dax is in The Kitchen

> Brin is in The Library

If we want to change the message displayed about each player, we have to change it three times, once for each player. If there were even more players, changing the message would become overly repetitive and error prone.

A better approach is to use a variable to give a block of code a label. We can then use that label to run the block of code whenever it is needed. Such a reusable block of code is called a *function*.

To display our message about each player we can create a logging function. We then call the function, using its variable label, and pass it whichever player we want the message to be about.

```javascript
var log = function (player) {
    console.log(player.name + " is in " + player.location);
};
```

A variable is created as normal with the `var` keyword. We have given it the label `log`. In round brackets we have placed another label, `player`, which is used to refer to whichever player we pass to the function when we use it. The code that will be executed whenever we use our function is placed between curly brackets. Code surrounded by curly brackets in this way is called a *code block*. The `console.log` function uses the `name` and `location` properties of the player we pass to the function.

We can then use the function to log information about a player.

[jsbin: Listing 3.06](http://jsbin.com/caponu/edit?js,console)
```javascript
var log = function (player) {
    console.log(player.name + " is in " + player.location);
};

var player1 = { name : "Kandra", location : "The Armoury" };

log(player1);
```
> Kandra is in The Armoury

Now that we have a logging function, we can use it to display information about any player. We just pass the player variable to the function by placing the player variable between the brackets when we call the function.

[jsbin: Listing 3.07](http://jsbin.com/cuxava/edit?js,console)
```javascript
var log = function (player) {
    console.log(player.name + " is in " + player.location);
};

var player1 = { name : "Kandra", location : "The Armoury" };
var player2 = { name : "Dax", location : "The Kitchen" };
var player3 = { name : "Brin", location : "The Library" };

log(player1);
log(player2);
log(player3);
```
> Kandra is in The Armoury

> Dax is in The Kitchen

> Brin is in The Library

Now, if we decide to change how we display player information, we only need to change our logging function. That's one change rather than many.


### 3.4 Lists: Arrays

We've managed to put our player logging code into a function. However, we still have to manually call the function for each of our players.

```javascript
log(player1);
log(player2);
log(player3);
```

It would be useful to be able to say "log information about all of these players." If we had a list of all the players, we could write code that calls the log function for each of the list items. In JavaScript such a list is called an *array*. To create an array we place our list items between square brackets and separate them with commas.
 
```javascript
var players = [ player1, player2, player3 ];
```

We have created an array of our three players and a variable for the array with label `players`.

### 3.4.1 Using an Index to Access an Item in an Array

To access an individual item in the array we use an *index* that refers to the position of the item. We start counting from zero, so the first item has index 0, the second item has index 1, the third item has index 2, and so on. `players[0]` is the first item in the array.

```javascript
var log = function (player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = { name : "Kandra", location : "The Armoury" };
var player2 = { name : "Dax", location : "The Kitchen" };
var player3 = { name : "Brin", location : "The Library" };

var players = [ player1 , player2 , player3 ];

log(players[0]);
log(players[1]);
log(players[2]);
```
> Kandra is in The Armoury

> Dax is in The Kitchen

> Brin is in The Library

### 3.4.2 Stepping Through the Items in an Array: The forEach Function

Okay, so we've managed to put our players into an array but we're still manually calling the log function for each of them.

```javascript
log(players[0]);
log(players[1]);
log(players[2]);
```

Fortunately, arrays have a number of built in functions to help us work with them. One such function, `forEach`, lets us pass each item in the array to another function we specify. That's exactly what we need; for each player we want to call the `log` function.

[jsbin: Listing 3.08](http://jsbin.com/kamiri/edit?js,console)
```javascript
var log = function (player) {
    console.log(player.name + " is in " + player.location);
}

var player1 = { name : "Kandra", location : "The Armoury" };
var player2 = { name : "Dax", location : "The Kitchen" };
var player3 = { name : "Brin", location : "The Library" };

var players = [ player1 , player2 , player3 ];

players.forEach(log);
```
> Kandra is in The Armoury

> Dax is in The Kitchen

> Brin is in The Library

The `players` variable refers to an array. We can therefore use dot notation to call the `forEach` function on that array. Between the round brackets of the call to `forEach` we specify the `log` variable which refers to our logging function. As a result, the logging function is called for each player in the `players` array. Perfect!

The process of stepping through an array, item by item, is called *iteration*.


### 3.4.3 Reducing the Number of Variables

If we are going to use an array to list our players, we may not need individual variables for each player. We can create the player objects when we create the `players` array.

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

We have placed our player objects directly into an array, rather than assigning the objects to separate `player1`, `player2` and `player3` variables and then placing those variables into the array.


### 3.4.4 Player Items: Another Array

Now that we have seen how to create arrays to represent lists, we have a good way of keeping track of the items a player has in our game. As they investigate their surroundings, players will pick up items they find and drop items they have used. The `items` property of each player will use an array to list that player's current inventory, the items they are carrying.

```javascript
var player1 = {
    name : "Brin",
    location : "The Library",
    items : [ "a sword" , "a lamp" ]
};
```

Our player has been created with two initial items, a sword and a lamp. We can use dot notation to refer to the array of items, `player1.items`. We can then use index notation to refer to an individual item. To refer to the second item we would use `player1.items[1]`. (Remember the first item in an array has an index of 0).


### 3.4.5 Logging Player Items: The join Function

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


### 3.5 Making Decisions: The if Statement

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


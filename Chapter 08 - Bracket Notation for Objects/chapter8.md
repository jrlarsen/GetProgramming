# Chapter 08 - Bracket notation for object properties


### 
[jsbin: Listing 8.01](http://jsbin.com/kipedu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.01
 * Bracket notation for object properties
 */

var ages = {};

ages["Kandra"] = 56;
ages["Dax"] = 21;

console.log(ages.Kandra);
console.log(ages.Dax);



/* Further Adventures
 *
 * 1) Add a couple more properties to
 *    the ages object.
 *
 * 2) Change the calls to console.log
 *    to use square bracket notation as well.
 *
 */
```



### Longer strings as keys
[jsbin: Listing 8.023](http://jsbin.com/toviya/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.02
 * Longer strings as keys
 */

var ages = {};

ages["Kandra Smith"] = 56;
ages["Dax Aniaku"] = 21;

console.log(ages["Kandra Smith"]);
console.log(ages["Dax Aniaku"]);



/* Further Adventures
 *
 * 1) Add a couple more properties to the ages object.
 *    Include spaces and other characters
 *    in the keys.
 *
 * 2) Log the values to the console.
 *
 * 3) Try changing the properties so they
 *    use dot notation. What happens?
 *
 */
```



### Using a function to add ages
[jsbin: Listing 8.03](http://jsbin.com/pipuva/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.03
 * Using a function to add ages
 */

var ages = {};

var addAge = function (name, age) {
    ages[name] = age;
};

addAge("Kandra Smith", 56);
addAge("Dax Aniaku", 21);

console.log(ages["Kandra Smith"]);
console.log(ages["Dax Aniaku"]);



/* Further Adventures
 *
 * 1) Use the addAge function to add a couple
 *    more people and their ages.
 *
 * 2) Log the new info to the console.
 *
 * 3) At the console prompt,
 *    type in 'ages' and press Enter.
 *    The ages object should be displayed.
 *
 * 4) Still at the console,
 *    use the addAge function to add new info.
 *    e.g. > addAge("Bob", 99);
 *
 * 5) Type 'ages' again to see the updated
 *    ages object.
 *
 */
```



### Using Object.keys
[jsbin: Listing 8.04](http://jsbin.com/mehuno/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.04
 * Using Object.keys
 */

var ages = {
    "Kandra Smith" : 56,
    "Dax Aniaku"   : 21,
    "Blinky"       : 36
};

var keys = Object.keys(ages);

console.log(keys);



/* Further Adventures
 *
 * 1) Add a couple more key-value pairs
 *    to the ages object.
 *
 * 2) Add another property to the ages object
 *    using square bracket notation.
 *    Add the code before the call to
 *    Object.keys, so the new key will
 *    be logged to the console.
 *
 * 3) At the console prompt,
 *    access individual elements of the
 *    keys array by using index notation.
 *    e.g. > keys[2];
 *
 */
```



### Iterating over Object.keys with forEach
[jsbin: Listing 8.05](http://jsbin.com/seteco/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.05
 * Iterating over Object.keys with forEach
 */

var ages = {
    "Kandra Smith" : 56,
    "Dax Aniaku"   : 21,
    "Blinky"       : 36
};

var keys = Object.keys(ages);

keys.forEach(function (key) {
    console.log(key);
});



/* Further Adventures
 *
 * 1) Add three more people to the ages object:
 *    One directly to the object,
 *    one using square brackets and
 *    one using dot notation.
 *
 * 2) Update the call to console.log so it
 *    shows the age of each person.
 *    Remember, the key lets you access
 *    the value from the ages object.
 *
 * 3) Update the call to console.log so it
 *    shows the person's name along with
 *    the length of their name.
 *    e.g. Blinky: 6
 *
 */
```



### 
[jsbin: Listing 8.06]()
```javascript
/* Adventures in JavaScript
 * Listing 8.06
 * Counting words from tweets
 */

var tweets = [
  "Education is showing business the way by using technology to share information. How do we so so safely?",
  "Enjoy a free muffin & coffee with Post Plus, our new loyalty club exclusive to subscribers!",
  "We're LIVE on Periscope right now answering all your #pet questions - tweet us yours now!",
  "Saw an unfinished print of M:I5 yesterday and it is my great pleasure to report it is rather splendid.",
  "Downloading the beta of OS X El Capitan. This is going to gooch my mac for sure, but it will probably look pretty",
  "Mud pies and muscle: H.G. Wells weighs in on #STEMeducation in an automated age",
  "UK Space Agency brings astronaut’s mission to children across the UK #ESA #ESERO",
  "Trying to find an old tweet that I didn't favourite at the time is…a fools game. #continuesDigging",
  "A robot has just passed a classic test of self-awareness. What does that mean?",
  "It was a great event. Very important to learn how to communicate about science and engineering effectively"
];

var words = {};
var tweetText = tweets.join(" ");
var tweetWords = tweetText.split(" ");
  
tweetWords.forEach(function (word) {
    words[word] = 0;
});

tweetWords.forEach(function (word) {
    words[word] = words[word] + 1;
});

console.log(words);



/* Further Adventures
 *
 * 1) Add more tweets to the tweets array
 *    and run the program again.
 *    They don't have to be tweets,
 *    any text will do.
 *
 * The program sees it and It as different words.
 * The string method toLowerCase will convert
 * a string to all lowercase.
 * "I Love NASA".toLowerCase() is "i love nasa"
 *
 * 2) Change the keys in the square brackets
 *    to use word.toLowerCase() instead of word.
 *    Make sure you change them all.
 *
 * 3) Can you change the keys to upper case?
 *
 */
```



### An exits object
[jsbin: Listing 8.07](http://jsbin.com/daqato/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.07
 * An exits object
 */

var Place = function (title) {
    this.title = title;  
};

var kitchen = new Place("The Kitchen");
var dungeon = new Place("The Dungeon");

var exits = {};

exits["north"] = kitchen;
exits["trapdoor"] = dungeon;

var keys = Object.keys(exits);

keys.forEach(function (key) {
    console.log(key + " goes to " + exits[key].title);
});



/* Further Adventures
 *
 * 1) Add a couple more places.
 *
 * 2) Add a couple more exits.
 *
 * 3) At the console prompt,
 *    type 'exits' to see the exits object.
 *    It has a number of keys with the
 *    corresponding values being place objects.
 *
 * 4) Access one of the exits like this:
 *    > exits["north"];
 *    A single object will be displayed.
 *
 * 5) Access the title property:
 *    > exits["north"].title;
 *
 * 6) Or use square brackets:
 *    > exits["north"]["title"]
 *
 */
```



### Functions to add and show exits
[jsbin: Listing 8.08](http://jsbin.com/mibube/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.08
 * Functions to add and show exits
 */

var Place = function (title) {
    this.title = title;  
};

var kitchen = new Place("The Kitchen");
var dungeon = new Place("The Dungeon");

var exits = {};

var addExit = function (direction, place) {
    exits[direction] = place;
};

var showExits = function () {
    var keys = Object.keys(exits);

    keys.forEach(function (key) {
        console.log(key + " goes to " + exits[key].title);
    });
};

addExit("north", kitchen);
addExit("trapdoor", dungeon);

showExits();



/* Further Adventures
 *
 * 1) Add a couple more places.
 *
 * 2) Use the addExit function to add
 *    exits to your new places.
 *
 * 3) Update the showExits function so
 *    it only shows the directions, not
 *    the destinations.
 *
 * 4) Write a showDestination function
 *    that shows the destination when
 *    a direction is passed to it as
 *    an argument.
 *
 */
```



### An exits object in the Place constructor
[jsbin: Listing 8.09](http://jsbin.com/foboka/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.09
 * An exits object in the Place constructor
 */

var Place = function (title, description) {
    this.title = title;
    this.exits = {};
};

Place.prototype.addExit = function (direction, exit) {
    this.exits[direction] = exit;
};

Place.prototype.showExits = function () {  
    console.log("Exits from " + this.title + ":");
  
    Object.keys(this.exits).forEach(function (key) {
        console.log(key);
    });
};

var library = new Place("The Old Library");
var kitchen = new Place("The Kitchen");
var garden = new Place("The Kitchen Garden");

kitchen.addExit("south", library);
kitchen.addExit("west", garden);

kitchen.showExits();



/* Further Adventures
 *
 * 1) Add an exit from the library to the kitchen.
 *
 * 2) Add an exit from the garden to the kitchen.
 *
 * 3) Show the exits for the library
 *    and the garden.
 *
 * 4) Add a couple more places and link
 *    them into the map.
 *
 */
```



### A map with four locations
[jsbin: Listing 8.10](http://jsbin.com/bufico/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.10
 * A map with four locations
 */

var Place = function (title, description) {
    this.title = title;
    this.exits = {};
};

Place.prototype.addExit = function (direction, exit) {
    this.exits[direction] = exit;
};

Place.prototype.showExits = function () {  
    console.log("Exits from " + this.title + ":");
  
    Object.keys(this.exits).forEach(function (key) {
        console.log(key);
    });
};

var library = new Place("The Old Library");
var kitchen = new Place("The Kitchen");
var garden = new Place("The Kitchen Garden");
var cupboard = new Place("The Kitchen Cupboard");

library.addExit("north", kitchen);
garden.addExit("east", kitchen);
cupboard.addExit("west", kitchen);

kitchen.addExit("south", library);
kitchen.addExit("west", garden);
kitchen.addExit("east", cupboard);

var currentPlace;

currentPlace = library;
currentPlace.showExits();

currentPlace = kitchen;
currentPlace.showExits();



/* Further Adventures
 *
 * 1) Switch the currentPlace to the
 *    other two places in turn and show
 *    their exits.
 *
 * 2) Update the Place constructor to
 *    include an items array assigned as
 *    a property of the this object.
 *
 * 3) Add an addItem method to the prototype
 *    that lets you add items to
 *    the items array.
 *
 * 4) Add a showItems method to the prototype
 *    that displays the items in
 *    the items array.
 *
 * 5) Test your work by adding items
 *    to the different locations and
 *    displaying the items on the console.
 *
 */
```



### A Player constructor function
[jsbin: Listing 8.11](http://jsbin.com/leqahi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.11
 * A Player constructor function
 */

var Player = function (name, health) {
    this.name = name;
    this.health = health;
    this.items = [];
    this.place = null;
};

Player.prototype.addItem = function (item) {
    this.items.push(item);
};

Player.prototype.showItems = function () {
    console.log("Items:");
    this.items.forEach(function (item, i) {
        console.log("(" + i + ") " + item);
    });
};

Player.prototype.showPlace = function () {
    console.log(this.name + " is in " + this.place.title);
};

Player.prototype.showHealth = function () {
    console.log(this.name + " has health " + this.health);
};

Player.prototype.showInfo = function () {
    console.log(this.name + ":");
    this.showPlace();
    this.showHealth();
    this.showItems();
};



/* Further Adventures
 *
 * 1) Test out the constructor by
 *    creating a couple of Player objects.
 *
 * 2) Add items for each player.
 *
 * 3) Display each player's info.
 *
 * 4) Write a method to drop the last
 *    item in a player's items array.
 *
 */
```



### A Place constructor function
[jsbin: Listing 8.12](http://jsbin.com/zozule/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.12
 * A Place constructor function
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
    this.items = [];
};

Place.prototype.addItem = function (item) {
    this.items.push(item);
};

Place.prototype.addExit = function (direction, exit) {
    this.exits[direction] = exit;
};

Place.prototype.showItems = function () {
    console.log("Items:");
    this.items.forEach(function (item, i) {
        console.log("(" + i + ") " + item);
    });
};

Place.prototype.showExits = function () {
    console.log("Exits from " + this.title + ":");
  
    Object.keys(this.exits).forEach(function (key) {
        console.log(key);
    });
};

Place.prototype.showInfo = function () {
    console.log(this.title);
    console.log(this.description);
    this.showItems();
    this.showExits();
};



/* Further Adventures
 *
 * 1) Test the constructor by creating three places.
 *
 * 2) Add items to your places.
 *
 * 3) Add exits to your places,
 *    linking them together.
 *
 * 4) Put your three places into an array.
 *    Use forEach with the array to call
 *    showInfo for each place.
 *
 */
```



### Putting a player on the map
[jsbin: Listing 8.13](http://jsbin.com/sezayo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 8.13
 * Putting a player on the map
 */


// Player Constructor

var Player = function (name, health) {
    this.name = name;
    this.health = health;
    this.items = [];
    this.place = null;
};

Player.prototype.addItem = function (item) {
    this.items.push(item);
};

Player.prototype.showItems = function () {
    console.log("Items:");
    this.items.forEach(function (item, i) {
        console.log("(" + i + ") " + item);
    });
};

Player.prototype.showPlace = function () {
    this.place.showInfo();
};

Player.prototype.showHealth = function () {
    console.log(this.name + " has health " + this.health);
};

Player.prototype.showInfo = function () {
    console.log(this.name + ":");
    this.showHealth();
    this.showItems();
};


// Place Constructor

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
    this.items = [];
};

Place.prototype.addItem = function (item) {
    this.items.push(item);
};

Place.prototype.addExit = function (direction, exit) {
    this.exits[direction] = exit;
};

Place.prototype.showItems = function () {
    console.log("Items in " + this.title + ":");
    this.items.forEach(function (item, i) {
        console.log("(" + i + ") " + item);
    });
};

Place.prototype.showExits = function () {
    console.log("Exits from " + this.title + ":");
  
    Object.keys(this.exits).forEach(function (key) {
        console.log(key);
    });
};

Place.prototype.showInfo = function () {
    console.log(this.title);
    console.log(this.description);
    this.showItems();
    this.showExits();
};


// Map

var kitchen = new Place(
    "The Kitchen",
    "You are in a kitchen. There is a disturbing smell."
);
var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);
var garden = new Place(
    "The Kitchen Garden",
    "You are in a small, walled garden."
);
var cupboard = new Place(
    "The Kitchen Cupboard",
    "You are in a cupboard. It's surprisingly roomy."
);

kitchen.addItem("a piece of cheese");
library.addItem("a rusty key");
cupboard.addItem("a tin of spam");

kitchen.addExit("south", library);
kitchen.addExit("west", garden);
kitchen.addExit("east", cupboard);

library.addExit("north", kitchen);
garden.addExit("east", kitchen);
cupboard.addExit("west", kitchen);


// Game

var kandra = new Player("Kandra", 50);
kandra.addItem("The Sword of Doom");

kandra.place = kitchen;
kandra.showInfo();
kandra.showPlace();



/* Further Adventures
 *
 * 1) Move Kandra to a different place
 *    and display info about Kandra
 *    and the place.
 *
 * 2) Improve the output to space
 *    out information about different
 *    objects: people, places, items, exits.
 *
 * In Chapter 9 we'll look at user interaction
 * on the console. But, as a challenge:
 *
 * 3) Write a go function that accepts
 *    a direction as an argument and
 *    moves the player to the place
 *    in that direction.
 *    e.g. > go("north");
 *
 */
```


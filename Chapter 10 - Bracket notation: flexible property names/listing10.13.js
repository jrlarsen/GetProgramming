/* Adventures in JavaScript
 * Listing 10.13
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
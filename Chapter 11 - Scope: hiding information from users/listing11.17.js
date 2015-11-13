/* Get Programming with JavaScript
 * Listing 11.17
 * Lots of global variables in the game
 */


// Constructors
var Player = function (name, health) {
  var items = [];
  var place = null;

  this.addItem = function (item) {
    items.push(item);
  };

  this.showItems = function () {
    console.log("Items:");
    items.forEach(function (item, i) {
      console.log("(" + i + ") " + item);
    });
  };
  
  this.setPlace = function (destination) {
    place = destination;
  };
    
  this.getPlace = function () {
    return place;
  };

  this.showPlace = function () {
    place.showInfo();
  };

  this.showHealth = function () {
    console.log(name + " has health " + health);
  };

  this.showInfo = function () {
    console.log(name + ":");
    this.showHealth();
    this.showItems();
  };
};


var Place = function (title, description) {
  var exits = {};
  var items = [];

  this.addItem = function (item) {
    items.push(item);
  };

  this.addExit = function (direction, exit) {
    exits[direction] = exit;
  };
    
  this.getExit = function (direction) {
    return exits[direction];
  };

  this.showItems = function () {
    console.log("Items in " + title + ":");
    items.forEach(function (item, i) {
      console.log("(" + i + ") " + item);
    });
  };

  this.showExits = function () {
    console.log("Exits from " + title + ":");
  
    Object.keys(exits).forEach(function (key) {
      console.log(key);
    });
  };

  this.showInfo = function () {
    console.log(title);
    console.log(description);
    this.showItems();
    this.showExits();
  };
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

kitchen.addItem("a piece of cheese");
library.addItem("a rusty key");

kitchen.addExit("south", library);
library.addExit("north", kitchen);


// Game initialization
var kandra = new Player("Kandra", 50);
kandra.addItem("The Sword of Doom");

kandra.place = kitchen;
kandra.showInfo();
kandra.showPlace();



/* Further Adventures
 *
 * 1) 
 *
 */
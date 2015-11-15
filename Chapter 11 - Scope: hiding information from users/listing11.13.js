/* Get Programming with JavaScript
 * Listing 11.13
 * The Player Constructor
 */


var Player = function (name, health) {
  this.name = name;
  this.health = health;
  this.items = [];
  this.place = null;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.showItems = function () {
    console.log("Items:");
    this.items.forEach(function (item, i) {
      console.log("(" + i + ") " + item);
    });
  };

  this.showPlace = function () {
    this.place.showInfo();
  };

  this.showHealth = function () {
    console.log(this.name + " has health " + this.health);
  };

  this.showInfo = function () {
    console.log(this.name + ":");
    this.showHealth();
    this.showItems();
  };
};
  

/* Further Adventures
 *
 * 1) Use the constructor to create
 *    a player.
 *
 *    var dax = new Player("Dax", 50);
 *
 * 2) Run the program.
 *
 * 3) At the prompt, access the
 *    player's properties.
 *
 *    > dax.name
 *    > dax.health
 *
 * All the properties are accessible.
 *
 * 4) Change some properties.
 *
 *    > dax.health = 1000
 *    > dax.items = "Was an array"
 *
 */
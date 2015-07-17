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
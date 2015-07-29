/* Adventures in JavaScript
 * Listing 10.11
 * A Player constructor function
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
        console.log(this.name + " is in " + this.place.title);
    };

    this.showHealth = function () {
        console.log(this.name + " has health " + this.health);
    };

    this.showInfo = function () {
        console.log(this.name + ":");
        this.showPlace();
        this.showHealth();
        this.showItems();
    };
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
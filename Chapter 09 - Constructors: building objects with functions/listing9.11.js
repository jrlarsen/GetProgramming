/* Adventures in JavaScript
 * Listing 9.11
 * A Place constructor part 3
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];

    this.showItems = function () {
        console.log("Items:");
        this.items.forEach(function (item, i) {
            console.log("(" + i + ") " + item);
        });
    };

    this.showExits = function () {
        console.log("Exits from " + this.title + ":");
        this.exits.forEach(function (exit, i) {
            console.log("(" + i + ") " + exit.title);
        });
    };

    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
        this.showItems();
        this.showExits();
    };

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.addExit = function (exit) {
        this.exits.push(exit);
    };
};

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

var kitchen = new Place(
    "The Kitchen",
    "You are in the kitchen. There is a disturbing smell."
);

var hall = new Place(
    "The Main Hall",
    "You are in a large hall. It is strangely empty."
);

library.addItem("a rusty key");
library.addExit(kitchen);
library.addExit(hall);

library.showInfo();



/* Further Adventures
 *
 * 1) Add a fourth place.
 *
 * 2) Add some items to your new place.
 *
 * 3) Add some exits to your new place.
 *
 * 4) Use showInfo to display info
 *    about your new place.
 *
 */
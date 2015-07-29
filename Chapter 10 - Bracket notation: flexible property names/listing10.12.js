/* Adventures in JavaScript
 * Listing 10.12
 * A Place constructor function
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
    this.items = [];

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.addExit = function (direction, exit) {
        this.exits[direction] = exit;
    };

    this.showItems = function () {
        console.log("Items:");
        this.items.forEach(function (item, i) {
            console.log("(" + i + ") " + item);
        });
    };

    this.showExits = function () {
        console.log("Exits from " + this.title + ":");

        Object.keys(this.exits).forEach(function (key) {
            console.log(key);
        });
    };

    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
        this.showItems();
        this.showExits();
    };
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
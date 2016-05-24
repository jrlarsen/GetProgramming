/* Get Programming with JavaScript
 * Listing 10.11
 * A map with four locations
 */

var Place = function (title, description) {
    this.title = title;
    this.exits = {};

    this.addExit = function (direction, exit) {
        this.exits[direction] = exit;
    };

    this.showExits = function () {
        console.log("Exits from " + this.title + ":");

        Object.keys(this.exits).forEach(function (key) {
            console.log(key);
        });
    };
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

library.showExits();
kitchen.showExits();



/* Further Adventures
 *
 * 1) Update the Place constructor to
 *    include an items array assigned as
 *    a property of the this object.
 *
 * 2) Add an addItem method to the constructor
 *    that lets you add items to
 *    the items array.
 *
 * 3) Add a showItems method to the constructor
 *    that displays the items in
 *    the items array.
 *
 * 4) Test your work by adding items
 *    to the different locations and
 *    displaying the items on the console.
 *
 */
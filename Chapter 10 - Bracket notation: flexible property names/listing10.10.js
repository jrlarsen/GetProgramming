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
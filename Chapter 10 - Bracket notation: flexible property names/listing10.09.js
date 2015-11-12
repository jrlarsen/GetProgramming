/* Get Programming with JavaScript
 * Listing 10.09
 * An exits object in the Place constructor
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

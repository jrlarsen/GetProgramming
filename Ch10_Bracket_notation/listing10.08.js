/* Get Programming with JavaScript
 * Listing 10.08
 * An exits object
 */

var Place = function (title) {
    this.title = title;
};

var kitchen = new Place("The Kitchen");
var dungeon = new Place("The Dungeon");

var exits = {};

exits["north"] = kitchen;
exits["the trapdoor"] = dungeon;

var keys = Object.keys(exits);

keys.forEach(function (key) {
    console.log(key + " goes to " + exits[key].title);
});



/* Further Adventures
 *
 * 1) Add a couple more places.
 *
 * 2) Add a couple more exits.
 *
 * 3) At the console prompt,
 *    type 'exits' to see the exits object.
 *    It has a number of keys with the
 *    corresponding values being place objects.
 *
 * 4) Access one of the exits like this:
 *    > exits["north"];
 *    A single object will be displayed.
 *
 * 5) Access the title property:
 *    > exits["north"].title;
 *
 * 6) Or use square brackets:
 *    > exits["north"]["title"]
 *
 */
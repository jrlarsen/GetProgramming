/* Adventures in JavaScript
 * Listing 9.09
 * Sharing functions with the Place prototype
 */

var library, kitchen;

var Place = function (title, description) {
    this.title = title;
    this.description = description;
};

Place.prototype.showInfo = function () {
    console.log(this.title);
    console.log(this.description);
};

library = new Place("The Old Library", "You are in an ancient library.");
kitchen = new Place("The Kitchen", "You are in the kitchen.");

library.showInfo();
kitchen.showInfo();



/* Further Adventures
 *
 * 1) Add an items property to the this object
 *    in the Place constructor.
 *    Assign it an empty array.
 *
 * 2) Add an addItem method to Place.prototype
 *    that adds a new item to the items array.
 *
 * 3) Update the showInfo method to also
 *    display the items in the items array.
 *
 * 4) Add items to the library and kitchen.
 *
 * 5) Call the showInfo method on the
 *    library and the kitchen.
 *
 */
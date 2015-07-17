/* Adventures in JavaScript
 * Listing 9.04
 * A Place constructor
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;

    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
    };
};

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

library.showInfo();



/* Further Adventures
 *
 * 1) Use the Place constructor function
 *    to create a second place.
 *    Don't forget the 'new' keyword.
 *
 * 2) Call the showInfo method on your
 *    newly created place.
 *
 */
/* Adventures in JavaScript
 * Listing 9.09
 * A Place constructor part 1
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
 * 1) Add a second place.
 *
 * 2) Call the showInfo method on your
 *    new place event.
 *
 */
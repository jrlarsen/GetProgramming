/* Get Programming with JavaScript
 * Listing 9.09
 * A Place constructor part 1
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;

    this.getInfo = function () {
        var infoString = this.title + "\n";
        infoString += this.description + "\n";
        return infoString;
    };
};

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

console.log(library.getInfo());



/* Further Adventures
 *
 * 1) Add a second place.
 *
 * 2) Call the getInfo method on your
 *    new place.
 *
 */
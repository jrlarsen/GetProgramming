/* Adventures in JavaScript
 * Listing 9.02
 * Adding methods to our constructed object
 */

var buildPlace = function (title, description) {
    var place = {};

    place.title = title;
    place.description = description;

    place.showInfo = function () {
        console.log(place.title);
        console.log(place.description);
    };

    return place;
};

var library = buildPlace(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

library.showInfo();



/* Further Adventures
 *
 * 1) Build a second place.
 *    Use the buildPlace function.
 *
 * 2) Call the showInfo method on your
 *    new place.
 *
 */
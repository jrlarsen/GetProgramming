/* Adventures in JavaScript
 * Listing 7.03
 * An array of constructed objects
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

var places = [
    buildPlace(
        "The Old Library",
        "You are in a library. Dusty books line the walls."
    ),
    buildPlace(
        "The Kitchen",
        "You are in the kitchen. There is a disturbing smell."
    ),
    buildPlace(
        "The Dungeon",
        "You are in The Dungeon. It is dark. And dank. And deep."
    )
];

places.forEach(function (place) {
    place.showInfo();
});



/* Further Adventures
 *
 * 1) Add two more places to the places array.
 *
 * 2) Run the program to display them.
 *
 * 3) Update the showInfo method to visually
 *    separate each place in the console output.
 *
 */
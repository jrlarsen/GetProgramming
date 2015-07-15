/* Adventures in JavaScript
 * Listing 7.01
 * Using a function to create an object
 */

var buildPlace = function (title, description) {
    var place = {};

    place.title = title;
    place.description = description;

    return place;
};

var library = buildPlace(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

console.log(library.title);
console.log(library.description);



/* Further Adventures
 *
 * 1) Build a second place, using the buildPlace function.
 *
 * 2) Log its title and description.
 *
 * 3) Add a numberOfExits parameter to the buildPlace function.
 *
 * 4) Assign numberOfExits to the place object.
 *
 * 5) Update the call to buildPlace for the library.
 *    Include the number of exits as an argument.
 *
 * 6) Log the number of exits.
 *
 */
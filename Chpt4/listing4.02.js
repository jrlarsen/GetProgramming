// Adventures In Code
// Listing 4.02
// http://jsbin.com/liviro/edit?js,console

function log(location) {
    console.log(location.title + "...");
    console.log(location.description);

    if (location.items.length > 0) {
        console.log("Items: " + location.items.join(', ') + '.');
    } else {
        console.log("There are no items here.");
    }

    console.log("Exits: " + location.exits.join(', ') + '.');
}

var location1 = {
    title: "The Library",
    description: "You are in a dusty library. Old books line every wall.",
    items: [ "an ancient key" ],
    exits: [ "north", "east" ]
};

log(location1);


/**
 * Adventures
 *
 * 1) Change some of the properties of location1.
 *
 * 2) Create a second location and log it to the console.
 *
 */
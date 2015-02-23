// Adventures In Code
// Listing 5.01
// http://jsbin.com/yabosi/edit?js,console

function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
}

var location1 = new Location("The Kitchen", "You are in a large kitchen. There is a strong stench of decay.");

var location2 = new Location("The Library", "You are in a dusty, old library. Ancient books line every wall.");

location1.exits["north"] = location2;

console.log(location1);


/**
 * Adventures
 *
 * 1) Add an exit for location2 that points back to location1.
 *
 * 2) Log location2 to the console.
 *
 */
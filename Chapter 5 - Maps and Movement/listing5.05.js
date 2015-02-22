// Adventures In Code
// Listing 5.05
// http://jsbin.com/tesedo/edit?js,console

function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
}

Location.prototype.addExit = function(title, destination) {
    this.exits[title] = destination;
};

Location.prototype.log = function() {
    var title;

    console.log(this.title + "...");
    console.log(this.description);

    console.log("Exits:");
    for (title in this.exits) {
        console.log("\t\t" + title);
    }
};

var map = {
    go : function(direction) {
        if (map.currentLocation.exits[direction] !== undefined) {
            map.currentLocation = map.currentLocation.exits[direction];
        }
        map.log();
    },

    log : function() {
        map.currentLocation.log();
    }
};

var location1 = new Location(
    "The Kitchen",
    "You are in a large kitchen. There is a strong stench of decay."
);

var location2 = new Location(
    "The Library",
    "You are in a dusty, old library. Ancient books line every wall."
);

location1.addExit("north", location2);
location2.addExit("south", location1);

map.currentLocation = location1;
map.log();


/**
 * Adventures
 *
 * 1) Click next to the arrow on the last line of the console.
 *    Enter the text map.go("north") and press enter.
 *    You should have moved to The Libray.
 *
 * 2) Use the map.go() command to return to The Kitchen.
 *
 * 3) Add another location and link it to an existing location.
 *
 */
// jsbin.com/maviza/edit?js,console
// Adventures In Code
// Listing 4.06

function Location(title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];

    this.log = function() {
        console.log('------------------------------------');
        console.log(this.title + "...");
        console.log(this.description);

        if (this.items.length > 0) {
            console.log("Items: " + this.items.join(', ') + '.');
        } else {
            console.log("There are no items here.");
        }

        if (this.exits.length > 0) {
            console.log("Exits: " + this.exits.join(', ') + '.');
        } else {
            console.log("There are no exits. You are trapped!");
        }
    };

    this.addExit = function(newExit) {
        if (this.exits.indexOf(newExit) === -1) {
            this.exits.push(newExit);
        }
    };
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.log();

location1.addExit("north");
location1.addExit("east");
location1.addExit("north");

location1.log();


/**
 * Adventures
 *
 * 1) Change the exits for location1.
 *
 * 2) Create a second location and add exits.
 *
 */
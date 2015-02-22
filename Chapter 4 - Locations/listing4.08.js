// Adventures In Code
// Listing 4.08
// http://jsbin.com/quliha/edit?js,console

function Location(title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];
}

Location.prototype.log = function() {
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

Location.prototype.addExit = function(newExit) {
    if (this.exits.indexOf(newExit) === -1) {
        this.exits.push(newExit);
    }
};

Location.prototype.addItem = function(item) {
    if (this.items.indexOf(item) === -1) {
        this.items.push(item);
    }
};

Location.prototype.removeItem = function(item) {
    var itemIndex = this.items.indexOf(item);

    if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
    }
};


var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.addItem("a rusty key");
location1.addItem("a torch");

location1.log();

location1.removeItem("a torch");
location1.addExit("north");

location1.log();


/**
 * Adventures
 *
 * 1) Change the items for location1 and add another exit.
 *
 * 2) Create a second location and add items and exits.
 *
 */
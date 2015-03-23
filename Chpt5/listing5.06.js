// jsbin.com/jakeci/edit?js,console
// Adventures In Code
// Listing 5.06

function Location(title, description) {
  this.title = title;
  this.description = description;
  this.exits = {};
  this.numberOfExits = 0;
}

Location.prototype.addExit = function(title, destination) {
  if (this.exits[title] === undefined) {
    this.exits[title] = destination;
    this.numberOfExits++;
  }
};

Location.prototype.log = function() {
  var title;

  console.log(this.title + "...");
  console.log(this.description);

  if (this.numberOfExits) {
    console.log("Exits:");
    for (title in this.exits) {
      console.log("\t\t" + title);
    }
  } else {
    console.log("There are no exits. You are trapped!");
  }
};

var map = {
  currentLocation : null,
  
  go : function(direction) {
    if (map.currentLocation) {
      if (map.currentLocation.exits[direction] !== undefined) {
        map.currentLocation = map.currentLocation.exits[direction];
        map.log();
      } else {
        console.log("*** There is no exit in that direction. ***");
      }
      return "-->";
    } else {
      throw new Error("The map needs a current location before we can go.");
    }
  },
  
  log : function() {
    if (map.currentLocation) {
      map.currentLocation.log();
    } else {
      throw new Error("A current location has not been set for the map.");
    }
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
 *    You should have moved to The Library.
 *
 * 2) Use the map.go() command to try an exit that doesn't exist.
 *
 * 3) Comment out map.currentLocation = location1. (Add // at the start)
 *    Run the program.
 *    Try map.go("north")
 *
 */
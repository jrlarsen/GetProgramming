// jsbin.com/fuwiju/edit?js,console
// Adventures In Code
// Listing 5.03

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
  
  console.log("--------------------------------------");
  console.log(this.title + "...");
  console.log(this.description);
  
  console.log("Exits:");
  for (title in this.exits) {
    console.log("\t\t" + title);
  }
};

var location1 = new Location("The Kitchen", "You are in a large kitchen. There is a strong stench of decay.");

var location2 = new Location("The Library", "You are in a dusty, old library. Ancient books line every wall.");

location1.addExit("north", location2);

location1.log();


/**
 * Adventures
 *
 * 1) Add an exit for location2 that points back to location1.
 *
 * 2) Log location2 to the console.
 *
 */
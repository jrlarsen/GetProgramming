// jsbin.com/xisuku/edit?js,console
// Adventures In Code
// Listing 4.05

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
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.log();

location1.exits.push("north");
location1.exits.push("east");

location1.log();

location1.items.push("a rusty key");

location1.log();


/**
* Adventures
*
* 1) Change the title and description used to create location1.
*
* 2) Create a second location and log its properties to the console.
*
* 3) Add items and exits to the second location.
*    Log the updated item to the console.
*
*/
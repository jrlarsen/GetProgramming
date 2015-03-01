// jsbin.com/yoluyi/edit?js,console
// Adventures In Code
// Listing 4.03

function Location(title, description) {
  this.title = title;
  this.description = description;
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

console.log(location1.title);
console.log(location1.description);


/**
* Adventures
*
* 1) Change the title and description used to create location1.
*
* 2) Create a second location and log its properties to the console.
*
*/
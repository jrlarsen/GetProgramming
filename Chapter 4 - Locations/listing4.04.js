// Adventures In Code
// Listing 4.04
// http://jsbin.com/lotoxo/edit?js,console

function Location(title, description) {
    this.title = title;
    this.description = description;

    this.log = function() {
        console.log(this.title + "...");
        console.log(this.description);
    };
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.log();


/**
 * Adventures
 *
 * 1) Change the title and description used to create location1.
 *
 * 2) Create a second location and log its properties to the console.
 *
 */
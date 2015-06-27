/* Adventures in JavaScript
 * Listing 4.01
 * Displaying an object's properties on the console
 */

var player1 = {
    name: "Kandra",
    location: "The Old Library",
    health: 50
};

console.log("Player information for " + player1.name);
console.log("------------------------------");
console.log(player1.name + " is in " + player1.location);
console.log(player1.name + " has health " + player1.health);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a second player and display the same info for them
 *
 * 2) Create an object to represent a blog post
 *
 * 3) Write code to display info about the blog post
 *
 * 4) What happens if you try to display a property that doesn't exist?
 *    e.g. player1.nam
 *
 */
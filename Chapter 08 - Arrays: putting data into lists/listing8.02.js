/* Adventures in JavaScript
 * Listing 8.02
 * Using existing objects in an array
 */

var player1 = { name : "Kandra", health : 50 },
    player2 = { name : "Dax",    health : 40 },
    player3 = { name : "Blinky", health : 2000 },

    adventurePlayers = [ player1, player2 ],
    mazePlayers = [ player3 ];

console.log(adventurePlayers);
console.log(mazePlayers);



/* Further Adventures
 *
 * 1) Add player1 to the mazePlayers array.
 *    Can it be in two arrays at once?
 *
 * 2) Run the program again to check if an
 *    object can be in two arrays at once.
 *
 */
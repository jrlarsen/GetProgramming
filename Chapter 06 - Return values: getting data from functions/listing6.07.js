/* Adventures in JavaScript
 * Listing 6.07
 * Getting a string for a player’s name
 */

var getPlayerName;

getPlayerName = function (playerName) {
    return playerName;
};

console.log(getPlayerName("Kandra"));



/* Further Adventures
 *
 * 1) Update the getPlayerName function
 *    so it adds a prefix and suffix
 *    made up of the = character.
 *    The length of the prefix and suffix
 *    should be the same as the player's name.
 *
 *    getPlayerName("Kiki") should return
 *    ==== Kiki ====
 *
 *    getPlayerName("Mahesha") should return
 *    ======= Mahesha =======
 *
 */
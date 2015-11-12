/* Get Programming with JavaScript
 * Listing 6.08
 * Getting strings for a player’s health and location
 */

var getPlayerHealth;
var getPlayerPlace;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));



/* Further Adventures
 *
 * 1) Change the two functions so they only
 *    show the first three letters of a
 *    player's name as part of the returned string.
 *    e.g. Kan... health 50
 *    e.g. Kan... in The Dungeon of Doom
 *
 * 2) Further change them so they also
 *    transform the names to upper case.
 *    e.g. KAN... health 50
 *    e.g. KAN... in The Dungeon of Doom
 *
 */

/* Get Programming with JavaScript
 * Listing 6.09
 * Getting a string for a player’s information
 */

var getPlayerName;
var getPlayerHealth;
var getPlayerPlace;
var getPlayerInfo;
var getBorder;

getPlayerName = function (playerName) {
    return playerName;
};

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

getBorder = function () {
    return "********************";
};

getPlayerInfo = function (playerName, playerPlace, playerHealth) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getBorder();
    playerInfo += "\n";

    return playerInfo;
};

console.log(getPlayerInfo("Kandra", "The Dungeon of Doom", 50));




/* Further Adventures
 *
 * 1) Add a second call to getPlayerInfo with
 *    different player information. Log the
 *    returned string to the console.
 *
 * 2) Call getPlayerInfo at the console prompt.
 *
 * 3) What happens if you call getPlayerInfo
 *    without any arguments?
 *
 *    > getPlayerInfo()
 *
 */

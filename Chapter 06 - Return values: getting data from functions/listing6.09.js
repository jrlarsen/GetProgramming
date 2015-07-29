/* Adventures in JavaScript
 * Listing 6.09
 * Getting a string for a player’s information
 */

var getPlayerName;
var getPlayerHealth;
var getPlayerPlace;
var getPlayerInfo;
var getLine;

getPlayerName = function (playerName) {
    return playerName;
};

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

getLine = function (lineLength, character) {
    var line;
    var characterStartIndex;

    line = "****************************************";
    line += "----------------------------------------";
    line += "========================================";
    line += "++++++++++++++++++++++++++++++++++++++++";

    characterStartIndex = line.indexOf(character);

    return line.substr(characterStartIndex, lineLength);
};

getPlayerInfo = function (playerName, playerPlace, playerHealth) {
    var playerInfo;

    playerInfo = "\n" + getPlayerName(playerName);
    playerInfo += "\n" + getLine(20, "*");
    playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
    playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
    playerInfo += "\n" + getLine(20, "*");
    playerInfo += "\n";

    return playerInfo;
};

console.log(getPlayerInfo("Kandra", "The Dungeon of Doom", 50));



/* Further Adventures
 *
 * There is a JavaScript function to return the
 * smaller of two numbers.
 * e.g. Math.min(3, 8) returns 3
 * e.g. Math.min(45, 40) returns 40
 *
 * There is another function to return the
 * larger of two numbers.
 * e.g. Math.max(3, 8) returns 8
 * e.g. Math.max(45, 40) returns 40
 *
 * In the getLine function, you want the
 * lineLength to be between 0 and 40.
 *
 * 1) In the getLine function, before the return statement,
 *    add these two lines:
 *    lineLength = Math.max(0, lineLength);
 *    lineLength = Math.min(40, lineLength);
 *
 *    They will make sure lineLength is between 0 and 40.
 *
 * 2) Update the getPlayerInfo function so that
 *    the line separators are the same length
 *    as the string returned by getPlayerPlace,
 *    up to a length of 40.
 *    You can declare new variables if required.
 *
 */
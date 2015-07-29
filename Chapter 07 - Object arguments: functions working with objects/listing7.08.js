/* Adventures in JavaScript
 * Listing 7.08
 * Displaying player information using objects
 */

var getPlayerName = function (player) {
    return player.name;
};

var getPlayerHealth = function (player) {
    return player.name + " has health " + player.health;
};

var getPlayerPlace = function (player) {
    return player.name + " is in " + player.place;
};

var Spacer = {
    getLine : function (lineLength, character) {
        lineLength = Math.max(0, lineLength);
        lineLength = Math.min(40, lineLength);

        var line = "****************************************";
        line += "----------------------------------------";
        line += "========================================";
        line += "++++++++++++++++++++++++++++++++++++++++";
        line += "                                        ";

        return line.substr(line.indexOf(character), lineLength);
    },

    wrap : function (text, character, length) {
        var wrapText = character + " " + text;
        wrapText += Spacer.getLine(length - text.length - 3, " ");
        wrapText += character;

        return wrapText;
    },

    box : function (text, character, length) {
        var boxText = "\n";

        boxText += Spacer.getLine(length, character) + "\n";
        boxText += Spacer.wrap(text, character, length) + "\n";
        boxText += Spacer.getLine(length, character) + "\n";

        return boxText;
    }
};

var getPlayerInfo = function (player, character) {
    var playerPlace = getPlayerPlace(player);
    var playerHealth = getPlayerHealth(player);
    var longest = Math.max(playerPlace.length, playerHealth.length) + 4;

    var playerInfo = Spacer.box(getPlayerName(player), character, longest);
    playerInfo += Spacer.wrap(playerPlace, character, longest);
    playerInfo += "\n" + Spacer.wrap(playerHealth, character, longest);
    playerInfo += "\n" + Spacer.getLine(longest, character);
    playerInfo += "\n";

    return playerInfo;
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "Limbo",
    health: 40
};

console.log(getPlayerInfo(player1, "="));
console.log(getPlayerInfo(player2, "+"));



/* Further Adventures
 *
 * 1) Add an items property to each player.
 *    items: "a rusty key, a piece of cheese"
 *
 * 2) Write a getPlayerItems function to return
 *    a string for a player's items.
 *
 * 3) Update the getPlayerInfo functions so it
 *    also includes the items info.
 *    Take the items info string into account
 *    when working out the longest string.
 *
 */
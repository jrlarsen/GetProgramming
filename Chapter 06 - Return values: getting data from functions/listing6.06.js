/* Adventures in JavaScript
 * Listing 6.06
 * Getting a separator line
 */

var getLine;

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

console.log(getLine(10, "+"));
console.log(getLine(3, "="));



/* Further Adventures
 *
 * 1) Update the getLine function to include
 *    ~ as a possible separator option. (tilde)
 *
 * This one could be a bit of a challenge!
 *
 * 2) Write a getBox function that accepts
 *    some text and a character to use as
 *    a border. The function should return
 *    the text surrounded by a border made
 *    of the specified character.
 *    e.g. getBox("To Infinity!", "+") should return
 *
 *    ++++++++++++++++
 *    + To Infinity! +
 *    ++++++++++++++++
 *
 *    You can use the getLine function.
 *
 * To add a new line in your string, use \n.
 * All strings have a length property.
 *
 */
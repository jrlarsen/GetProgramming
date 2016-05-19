/* Get Programming with JavaScript
 * Listing 7.10
 * Organizing functions as object properties
 */

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  
  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;      
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};

console.log(spacer.box("Mercury", 11, "="));
console.log(spacer.box("Mars", 11, "*"));



/* Further Adventures
 *
 * 1) Change the Spacer.box function so that
 *    the box is 5 lines high.
 *
 *    Spacer.box("Earth");
 *
 *    > =========
 *    > =       =
 *    > = Earth =
 *    > =       =
 *    > =========
 *
 */

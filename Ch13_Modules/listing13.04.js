/* Get Programming with JavaScript
 * Listing 13.04
 * The spacer namespace
 */

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var characterIndex;
    
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    
    characterIndex = longString.indexOf(character);
    
    if (characterIndex === -1) {
      characterIndex = 0;
    }
    
    return longString.substr(characterIndex, length);
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


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The program produces no output but
 * the spacer variable is added to
 * the global scope.
 *
 * 2) At the prompt, call the line
 *    method. e.g.
 *
 *    > spacer.line(3, "*")
 *      "***"
 *
 * All of the functions are accessible
 * as methods of spacer, but only a
 * single global variable is used.
 *
 * 3) At the prompt, try calling the
 *    line function directly.
 *
 *    > line(3, "*")
 *
 * 4) Call the box method with a
 *    character not recognized by the
 *    line method.
 *
 *    > spacer.box("Hello", 9, "x")
 *
 * Can you explain the output?
 *
 */
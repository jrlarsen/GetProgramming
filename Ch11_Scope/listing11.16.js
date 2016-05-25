/* Get Programming with JavaScript
 * Listing 11.16
 * Hiding place info in the constructor
 */

// The spacer namespace

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


// The Place constructor

var Place = function (title, description) {
  var newLine = spacer.newLine();
  var items = [];
  var exits = {};

  var getItemsInfo = function () {
    var itemsString = "Items: " + newLine;
    items.forEach(function (item) {
      itemsString += "   - " + item;
      itemsString += newLine;
    });
    return itemsString;
  };

  var getExitsInfo = function () {
    var exitsString = "Exits from " + title;
    exitsString += ":" + newLine;

    Object.keys(exits).forEach(function (key) {
      exitsString += "   - " + key;
      exitsString += newLine;
    });

    return exitsString;
  };

  var getTitleInfo = function () {
    return spacer.box(title, title.length + 4, "=");
  };

  var getInfo = function () {
    var infoString = getTitleInfo();
    infoString += description;
    infoString += newLine + newLine;
    infoString += getItemsInfo() + newLine;
    infoString += getExitsInfo();
    infoString += spacer.line(40, "=") + newLine;
    return infoString;
  };


  this.showInfo = function () {
    console.log(getInfo());
  };

  this.addItem = function (item) {
    items.push(item);
  };

  this.addExit = function (direction, exit) {
    exits[direction] = exit;
  };

  this.getExit = function (direction) {
    return exits[direction];
  };

  this.getLastItem = function () {
    return items.pop();
  };
};



/* Further Adventures
 *
 * 1) Add a method that lets users
 *    remove an item using its name.
 *
 *    kitchen.removeItem("a smelly cheese");
 *
 * 2) Add a method that lets users
 *    remove an item using its index.
 *
 *    kitchen.removeItemAt(2);
 *
 */
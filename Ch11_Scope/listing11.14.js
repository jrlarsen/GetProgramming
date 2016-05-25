/* Get Programming with JavaScript
 * Listing 11.14
 * Hiding the Player implementation
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


// The Player constructor

var Player = function (name, health) {
  var newLine = spacer.newLine();
  var items = [];
  var place = null;


  var getNameInfo = function () {
    return name;
  };

  var getHealthInfo = function () {
    return "(" + health + ")";
  };

  var getItemsInfo = function () {
    var itemsString = "Items:" + newLine;

    items.forEach(function (item, i) {
      itemsString += "   - " + item + newLine;
    });

    return itemsString;
  };

  var getTitleInfo = function () {
    return getNameInfo() + " " + getHealthInfo();
  };

  var getInfo = function () {
    var info = spacer.box(getTitleInfo(), 40, "*");
    info += "  " + getItemsInfo();
    info += spacer.line(40, "*");
    info += newLine;

    return info;
  };


  this.addItem = function (item) {
    items.push(item);
  };

  this.setPlace = function (destination) {
    place = destination;
  };

  this.getPlace = function () {
    return place;
  };

  this.showInfo = function (character) {
    console.log(getInfo(character));
  };
};



/* Further Adventures
 *
 * 1) Use the constructor to create
 *    a player.
 *
 *    var dax = new Player("Dax", 50);
 *
 * 2) Run the program.
 *
 * 3) At the console, try to access
 *    player properties.
 *
 *    > dax.name
 *    > dax.health
 *    > dax.items
 *
 * Those properties don't exist!
 * name, health and items are variables
 * local to the constructor function;
 * they were not set as properties
 * of the special 'this' object.
 *
 */
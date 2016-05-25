/* Get Programming with JavaScript
 * Listing 11.13
 * The Player constructor
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

  this.name = name;
  this.health = health;
  this.items = [];
  this.place = null;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.getNameInfo = function () {
    return this.name;
  };

  this.getHealthInfo = function () {
    return this.name + " has health " + this.health;
  };

  this.getPlaceInfo = function () {
    return this.name + " is in " + this.place.title;
  };

  this.getItemsInfo = function () {
    var itemsString = "Items:" + newLine;

    this.items.forEach(function (item, i) {
      itemsString += "   - " + item + newLine;
    });

    return itemsString;
  };

  this.getInfo = function (character) {
    var place = this.getPlaceInfo();
    var health = this.getHealthInfo();
    var longest = Math.max(place.length, health.length) + 4;

    var info = spacer.box(this.getNameInfo(), longest, character);
    info += spacer.wrap(place, longest, character);
    info += newLine + spacer.wrap(health, longest, character);
    info += newLine + spacer.line(longest, character);

    info += newLine;
    info += "  " + this.getItemsInfo();
    info += newLine;
    info += spacer.line(longest, character);
    info += newLine;

    return info;
  };

  this.showInfo = function (character) {
    console.log(this.getInfo(character));
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
 * 3) At the prompt, access the
 *    player's properties.
 *
 *    > dax.name
 *    > dax.health
 *
 * All the properties are accessible.
 *
 * 4) Change some properties.
 *
 *    > dax.health = 1000
 *    > dax.items = "Was an array"
 *
 */
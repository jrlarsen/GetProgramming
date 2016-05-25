/* Get Programming with JavaScript
 * Listing 11.15
 * The Place constructor
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

  this.title = title;
  this.description = description;
  this.items = [];
  this.exits = {};

  this.getItemsInfo = function () {
    var itemsString = "Items: " + newLine;
    this.items.forEach(function (item) {
      itemsString += "   - " + item;
      itemsString += newLine;
    });
    return itemsString;
  };

  this.getExitsInfo = function () {
    var exitsString = "Exits from " + this.title;
    exitsString += ":" + newLine;

    Object.keys(this.exits).forEach(function (key) {
      exitsString += "   - " + key;
      exitsString += newLine;
    });

    return exitsString;
  };

  this.getTitleInfo = function () {
    return spacer.box(
        this.title,
        this.title.length + 4,
        "="
    );
  };

  this.getInfo = function () {
    var infoString = this.getTitleInfo();
    infoString += this.description;
    infoString += newLine + newLine;
    infoString += this.getItemsInfo() + newLine;
    infoString += this.getExitsInfo();
    infoString += spacer.line(40, "=") + newLine;
    return infoString;
  };


  this.showInfo = function () {
    console.log(this.getInfo());
  };

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.addExit = function (direction, exit) {
    this.exits[direction] = exit;
  };
};




/* Further Adventures
 *
 * 1) Run the program.
 *
 * You can enter commands at the prompt
 * over more than one line.
 * Press shift + Enter to move to
 * a new line.
 *
 * 2) At the prompt, create a
 *    new place, using the constructor.
 *
 *    > var hall = new Place(
 *        "The Hall",
 *        "You are in a spacious hall."
 *      )
 *
 * 3) Add items to the place.
 *    Use the addItem method.
 *
 * 4) Use showItems to display the items.
 *
 * 5) Access the items directly.
 *
 *    > hall.items
 *
 */
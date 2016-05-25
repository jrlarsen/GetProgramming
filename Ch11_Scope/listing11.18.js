/* Get Programming with JavaScript
 * Listing 11.18
 * Letting users interact with the game via an interface object
 */


var getGame = function () {

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


  // Constructors

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

  // Console update function
  var render = function () {
    console.clear();
    player.getPlace().showInfo();
    player.showInfo();
  };

  // Create some places
  var kitchen = new Place(
      "The Kitchen",
      "You are in a kitchen. There is a disturbing smell."
  );
  var library = new Place(
      "The Old Library",
      "You are in a library. Dusty books line the walls."
  );
  var garden = new Place(
      "The Kitchen Garden",
      "You are in a small, walled garden."
  );
  var cupboard = new Place(
      "The Kitchen Cupboard",
      "You are in a cupboard. It's surprisingly roomy."
  );

  // Add items and exits to places
  kitchen.addItem("a piece of cheese");
  library.addItem("a rusty key");
  cupboard.addItem("a tin of spam");

  kitchen.addExit("south", library);
  kitchen.addExit("west", garden);
  kitchen.addExit("east", cupboard);

  library.addExit("north", kitchen);
  garden.addExit("east", kitchen);
  cupboard.addExit("west", kitchen);

  // Game initialization
  var player = new Player("Kandra", 50);
  player.addItem("The Sword of Doom");
  player.setPlace(kitchen);

  render();

  // Return the public interface
  return {
    go: function (direction) {
      var place = player.getPlace();
      var destination = place.getExit(direction);
      player.setPlace(destination);
      render();
      return "";
    },

    get: function () {
      var place = player.getPlace();
      var item = place.getLastItem();
      player.addItem(item);
      render();
      return "";
    }
  };

};

var game = getGame();



/* Further Adventures
 *
 * 1) Play the game, Using the two public methods:
 *
 *   > game.get()
 *   > game.go("north")
 *
 */
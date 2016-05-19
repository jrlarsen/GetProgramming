/* Get Programming with JavaScript
 * Listing 12.08
 * Checking user input
 */


var getGame = function () {
  
  // Player constructor
  var Player = function (name, health) {
    var items = [];
    var place = null;

    this.addItem = function (item) {
      items.push(item);
    };

    this.showItems = function () {
      console.log("Items:");
      items.forEach(function (item, i) {
        console.log("(" + i + ") " + item);
      });
    };
  
    this.setPlace = function (destination) {
      place = destination;
    };
    
    this.getPlace = function () {
      return place;
    };

    this.showPlace = function () {
      place.showInfo();
    };

    this.showHealth = function () {
      console.log(name + " has health " + health);
    };

    this.showInfo = function () {
      console.log(name + ":");
      this.showHealth();
      this.showItems();
    };
  };
  
  // Place constructor
  var Place = function (title, description) {
    var exits = {};
    var items = [];

    this.addItem = function (item) {
      items.push(item);
    };

    this.addExit = function (direction, exit) {
      exits[direction] = exit;
    };
    
    this.getExit = function (direction) {
      return exits[direction];
    };

    this.showItems = function () {
      console.log("Items in " + title + ":");
      items.forEach(function (item, i) {
        console.log("(" + i + ") " + item);
      });
    };

    this.showExits = function () {
      console.log("Exits from " + title + ":");
  
      Object.keys(exits).forEach(function (key) {
        console.log(key);
      });
    };

    this.showInfo = function () {
      console.log(title);
      console.log(description);
      this.showItems();
      this.showExits();
    };
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
  
  // Create a player
  var player = new Player("Kandra", 50);
  player.addItem("The Sword of Doom");

  player.setPlace(kitchen);
  player.showInfo();
  player.showPlace();
  
  // Return the public interface
  return {
    me: function () {
      player.showInfo();
    },
    
    here: function () {
      player.showPlace();
    },
    
    go: function (direction) {
      var place = player.getPlace();
      var destination = place.getExit(direction);
      
      if (destination !== undefined) {
        player.setPlace(destination);
        player.showPlace();
      } else {
        console.log("There is no exit in that direction");
      }
    }
  };
  
};

var game = getGame();



/* Further Adventures
 *
 * 1) Play the game, Using the three public methods:
 *
 *    > game.me()
 *    > game.here()
 *    > game.go("north")
 *
 * 2) Try entering an invalid direction.
 *
 *    > game.go("snarf");
 *
 */
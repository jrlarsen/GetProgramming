/* Get Programming with JavaScript
 * Listing 11.14
 * Hiding the Player implementation
 */


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
  



/* Further Adventures
 *
 * 1) Play the game, Using the three public methods:
 *
 *   > game.me()
 *   > game.here()
 *   > game.go("north")
 *
 */
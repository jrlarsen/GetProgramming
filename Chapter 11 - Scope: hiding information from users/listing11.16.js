/* Get Programming with JavaScript
 * Listing 11.16
 * Hiding place info in the constructor
 */


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
  



/* Further Adventures
 *
 * 1) Play the game, Using the three public methods:
 *
 *   > game.me()
 *   > game.here()
 *   > game.go("north")
 *
 */
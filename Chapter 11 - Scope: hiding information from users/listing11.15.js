/* Get Programming with JavaScript
 * Listing 11.15
 * The Place Constructor
 */


var Place = function (title, description) {
  this.title = title;
  this.description = description;
  this.exits = {};
  this.items = [];

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.addExit = function (direction, exit) {
    this.exits[direction] = exit;
  };

  this.showItems = function () {
    console.log("Items in " + this.title + ":");
    this.items.forEach(function (item, i) {
      console.log("(" + i + ") " + item);
    });
  };

  this.showExits = function () {
    console.log("Exits from " + this.title + ":");
  
    Object.keys(this.exits).forEach(function (key) {
      console.log(key);
    });
  };

  this.showInfo = function () {
    console.log(this.title);
    console.log(this.description);
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
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
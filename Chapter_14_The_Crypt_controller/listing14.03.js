/* Get Programming with JavaScript
 * Listing 14.03
 * A simplified Place constructor
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.Place = function (title, description) {
    var exits = {};
    var items = [];

    this.addItem = function (item) {
      items.push(item);
    };
  
    this.removeItem = function (item) {
      var itemIndex = items.indexOf(item);
      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
      }
    };
  
    this.hasItem = function (item) {
      return items.indexOf(item) !== -1;
    };

    this.addExit = function (direction, exit) {
      exits[direction] = exit;
    };
    
    this.getExit = function (direction) {
      return exits[direction];
    };

    this.getData = function () {
      var data = {
        "title" : title,
        "description" : description,
        "items" : items.slice(),
        "exits" : Object.keys(exits)
      };
    
      return data;
    };
  };

})();
  


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a new place.
 *
 *    > var p = new theCrypt.Place("The Farm", "You are at a farm")
 *    > p.getData()
 *
 * 3) Add items.
 *
 *    > p.addItem("a key")
 *    > p.addItem("a cheese")
 *    > p.getData()
 *
 * 4) Check for items.
 *
 *    > p.hasItem("a key")
 *    > p.hasItem("a sword")
 *
 * 5) Add an exit.
 *
 *    > p.addExit("east", "The Farmhouse")
 *    > p.getData()
 *
 */
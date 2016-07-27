/* Get Programming with JavaScript
 * Listing 15.06
 * A simplified Place constructor
 */

(function () {

  var Place = function (title, description) {
    var exits = {};
    var items = [];
    var challenges = {};

    this.addItem = function (item) {
      items.push(item);
    };
  
    this.getLastItem = function () {
        return items.pop();
    };

    this.addExit = function (direction, exit) {
      exits[direction] = exit;
    };
    
    this.getExit = function (direction) {
      return exits[direction];
    };
    
    this.addChallenge = function (direction, challenge) {
      challenges[direction] = challenge;
    };
  
    this.getChallenge = function (direction) {
      return challenges[direction];
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
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.Place = Place;

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
 * 4) Add an exit.
 *
 *    > p.addExit("east", "The Farmhouse")
 *    > p.getData()
 *
 */

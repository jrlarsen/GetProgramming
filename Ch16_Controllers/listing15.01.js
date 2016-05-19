/* Get Programming with JavaScript
 * Listing 15.01
 * A Place constructor with challenges
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.Place = function (title, description) {
    var exits = {};
    var items = [];
    var challenges = {};

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

})();
  


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a place.
 *
 *    > var p = new TheCrypt.Place("The Farm", "You are at a farm.")
 *    > p.getData()
 *
 * 3) Add an exit.
 *
 *    > p.addExit("east", "The Farmhouse")
 *    > p.getData()
 *
 * 4) Create a challenge object.
 *
 *    > var ch = {}
 *    > ch.message = "The is a bull blocking the gate"
 *    > ch.success = "The bull runs off after the kite"
 *    > ch.failure = "It's getting angrier"
 *    > ch.requires = "a red kite"
 *    > ch.damage = 30
 *    > ch.itemRequired = true
 *    > ch
 *
 * 5) Add the challenge.
 *
 *    > p.addChallenge("east", ch)
 *    > p.getData()
 *    > p.getChallenge("east")
 *
 */
/* Get Programming with JavaScript
 * Listing 15.04
 * The Player constructor
 */

(function () {

  var Player = function (name, health) {
    var items = [];
    var place = null;

    this.addItem = function (item) {
      items.push(item);
    };

    this.hasItem = function (item) {
        return items.indexOf(item) !== -1;
    };
  
    this.removeItem = function (item) {
        var itemIndex = items.indexOf(item);
        if (itemIndex !== -1) {
            items.splice(itemIndex, 1);
        }    
    };

    this.setPlace = function (destination) {
      place = destination;
    };
    
    this.getPlace = function () {
      return place;
    };
    
    this.applyDamage = function (damage) {
        health = health - damage;
    };

    this.getData = function () {
      var data = {
        "name" : name,
        "health" : health,
        "items" : items.slice()
      };
    
      if (place !== null) {
        data.place = place.title;
      }
    
      return data;
    };
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.Player = Player;
  
})();
  


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, enter the
 *    following statements:
 *
 *    > var p1 = new theCrypt.Player("Bob", 20)
 *    > p1.getData()
 *
 * data about the player should be displayed.
 *
 * 3) Add some items to the player.
 *
 *    > p1.addItem("a horse")
 *    > p1.addItem("a cow")
 *    > p1.getData()
 *
 * The Place constructor isn't available
 * but we can use an object with a title
 * for now.
 *
 * 4) Set a place for the player.
 *
 *    > p1.setPlace({title : "The Farm"})
 *    > p1.getData()
 *
 */

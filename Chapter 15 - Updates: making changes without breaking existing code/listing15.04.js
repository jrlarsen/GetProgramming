/* Get Programming with JavaScript
 * Listing 15.04
 * A Player constructor with damage and item methods
 */

(function () {
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.Player = function (name, health) {
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
  
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt,
 *    create a player.
 *
 *    > var p = new theCrypt.Player("Dax", 50)
 *    > p.getData()
 *
 * 3) Add an item.
 *
 *    > p.addItem("cheese")
 *    > p.getData()
 *
 * 4) Check for the item.
 *
 *    > p.hasItem("cheese")
 *    > p.hasItem("spam")
 *
 * 5) Apply some damage.
 *
 *    > p.applyDamage(40)
 *    > p.getData()
 *
 */
// Get Programming with JavaScript
// Listing 13.19
// The Player constructor as a module

(function () {  
  
  var Player = function (name, health) {
    var newLine = spacer.newLine();
    var items = [];
    var place = null;

    var getNameInfo = function () {
        return name;
    };

    var getHealthInfo = function () {
        return "(" + health + ")";
    };

    var getItemsInfo = function () {
        var itemsString = "Items:" + newLine;
       
        items.forEach(function (item, i) {
            itemsString += "   - " + item + newLine;
        });

        return itemsString;
    };
  
    var getTitleInfo = function () {
        return getNameInfo() + " " + getHealthInfo();
    };

    var getInfo = function () {
        var info = spacer.box(getTitleInfo(), 40, "*");
        info += "  " + getItemsInfo();
        info += spacer.line(40, "*");
        info += newLine;

        return info;
    }; 

    this.addItem = function (item) {
        items.push(item);
    };
  
    this.setPlace = function (destination) {
        place = destination;
    };
    
    this.getPlace = function () {
        return place;
    };

    this.showInfo = function (character) {
        console.log(getInfo(character));
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
 * 2) At the console prompt,
 *    try to use Player to create a new
 *    player object.
 *
 *    > var p = new Player("Dax", 50)
 *
 *    It won't work.
 *    Player is a private variable.
 *
 *    However, Player has also been assigned
 *    to theCrypt, which is global.
 *
 * 3) At the console prompt,
 *    use theCrypt.Player to create a new
 *    player object.
 *
 *    > var p = new theCrypt.Player("Dax", 50)
 *
 *    Okay, it can now find Player.
 *    But spacer has gone AWOL.
 *
 * 4) Add a script element to the HTML Panel
 *    to include the spacer namespace.
 *    (JS Bin code for spacer: juneqo)
 *    (You may have to refresh the page
 *     to load the script.)
 *
 * 5) Create a new player and call p.showInfo()
 *
 */

/* Get Programming with JavaScript
 * Listing 14.05
 * A Place constructor with challenges
 * Requires spacer
 */

(function () {

  var Place = function (title, description) {
    var newLine = spacer.newLine();
    var items = [];
    var exits = {};
    var challenges = {};
  
    var getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };
  
    var getExitsInfo = function () {
        var exitsString = "Exits from " + title;
        exitsString += ":" + newLine;
        
        Object.keys(exits).forEach(function (key) {
            exitsString += "   - " + key;
            exitsString += newLine;
        });
      
        return exitsString;
    };

    var getTitleInfo = function () {
        return spacer.box(title, title.length + 4, "=");
    };

    var getInfo = function () {
        var infoString = getTitleInfo();
        infoString += description;
        infoString += newLine + newLine;
        infoString += getItemsInfo() + newLine;
        infoString += getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };

    this.showInfo = function () {
        console.log(getInfo());
    };

    this.addItem = function (item) {
        items.push(item);
    };
  
    this.addExit = function (direction, exit) {
        exits[direction] = exit;
    };

    this.getExit = function (direction) {
        return exits[direction];
    };
  
    this.getLastItem = function () {
        return items.pop();
    };
    
    this.addChallenge = function (direction, challenge) {
      challenges[direction] = challenge;
    };
  
    this.getChallenge = function (direction) {
      return challenges[direction];
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
 * 2) Create a place.
 *
 *    > var p = new theCrypt.Place("The Farm", "You are at a farm.")
 *    > p.showInfo()
 *
 * 3) Add an exit.
 *
 *    > p.addExit("east", "The Farmhouse")
 *    > p.showInfo()
 *
 * 4) Create a challenge object.
 *
 *    > var ch = {}
 *    > ch.message = "There is a bull blocking the gate"
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
 *    > p.getChallenge("east")
 *
 */

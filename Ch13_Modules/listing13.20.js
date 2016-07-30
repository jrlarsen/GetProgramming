// Get Programming with JavaScript
// Listing 13.20
// The Place constructor as a module

(function () {

  var Place = function (title, description) {
    var newLine = spacer.newLine();
    var items = [];
    var exits = {};
  
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
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.Place = Place;  
  
})();



/* Further Adventures
 *
 * Have a play with the global object
 * at the console prompt:
 *
 * 1) Try to access a non-existent variable:
 *
 *    > spoon
 *
 *    ERROR! There is no spoon!
 *
 * 2) Access the global window object:
 *
 *    > window
 *
 *    Wow! It has lots of properties!
 *
 * 3) Try and access a non-existent property:
 *
 *    > window.spoon
 *
 *    This time, there is no error.
 *    No spoon property has been defined, so
 *    the special undefined value is returned.
 *
 * 4) Set a value for the spoon property:
 *
 *    > window.spoon = 1
 *
 *    Setting a property on the window object
 *    makes it available as a global variable.
 *
 * 5) Try to access the spoon variable:
 *
 *    > spoon
 *      1
 *
 */

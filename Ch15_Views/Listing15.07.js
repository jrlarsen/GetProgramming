// Get Programming with JavaScript
// Listing 15.07
// A place view

(function () {

  var getItemsInfo = function (placeData) {
    var itemsString = "Items: " + spacer.newLine();
    placeData.items.forEach(function (item) {
      itemsString += "   - " + item;
      itemsString += spacer.newLine();
    });
    return itemsString;
  };
  
  var getExitsInfo = function (placeData) {
    var exitsString = "Exits from " + placeData.title;
    exitsString += ":" + spacer.newLine();
        
    placeData.exits.forEach(function (direction) {
      exitsString += "   - " + direction;
      exitsString += spacer.newLine();
    });
      
    return exitsString;
  };

  var getTitleInfo = function (placeData) {
    return spacer.box(placeData.title, placeData.title.length + 4, "=");
  };

  var getInfo = function (placeData) {
    var infoString = getTitleInfo(placeData);
    infoString += placeData.description;
    infoString += spacer.newLine() + spacer.newLine();
    infoString += getItemsInfo(placeData) + spacer.newLine();
    infoString += getExitsInfo(placeData);
    infoString += spacer.line(40, "=") + spacer.newLine();
    return infoString;
  };
  
  var render = function (place) {
    console.log(getInfo(place.getData()));
  };
    
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.placeView = {
    render: render
  };

})();
  


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a place.
 *
 *    > var p = new theCrypt.Place("The Farm", "You are at a farm")
 *    > p.getData()
 *
 * 3) Use the view to display the place.
 *
 *    > theCrypt.placeView.render(p)
 *
 * 4) Add some items.
 *
 *    > p.addItem("a horse")
 *    > p.addItem("a cow")
 *    > theCrypt.placeView.render(p)
 *
 * 5) Add an exit.
 *
 *    > p.addExit("east", "The Farmhouse")
 *    > theCrypt.placeView.render(p)
 *
 */

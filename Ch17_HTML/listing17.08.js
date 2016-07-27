/* Get Programming with JavaScript
 * Listing 17.08
 * A web-based place view
 */

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
    var placeDiv = document.getElementById("place");
    placeDiv.innerHTML = getInfo(place.getData());
  };
    
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.placeView = {
    render: render
  };

})();

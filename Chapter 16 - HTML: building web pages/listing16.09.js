/* Get Programming with JavaScript
 * Listing 16.09
 * A web-based Place view
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.placeView = (function () {
    var renderItems = function (placeData) {
      var itemsString = "";

      if (placeData.items.length > 0) {
        itemsString += "Items:\n";
        placeData.items.forEach(function (item, i) {
          itemsString += "(" + (i + 1) + ") ";
          itemsString += item + "\n";
        });
      }
    
      return itemsString;
    };
  
    var renderExits = function (placeData) {
      var exitsString = "";
      var exits = placeData.exits;
    
      if (exits.length > 0) {
        exitsString += "Exits:\n";
        exits.forEach(function (exit, i) {
          exitsString += "(" + (i + 1) + ") ";
          exitsString += exit + "\n";
        });
      }
    
      return exitsString;
    };
      
    var renderPlace = function (placeData) {
      var placeString = "\n";
    
      placeString += placeData.title + "\n";
      placeString += placeData.description + "\n";
    
      placeString += renderItems(placeData);
      placeString += renderExits(placeData);
    
      return placeString;
    };
  
    var render = function (place) {
      var placeDiv = document.getElementById("place");
      placeDiv.innerHTML = renderPlace(place.getData());
    };
  
    return {
      render: render
    };
  })();

})();
  
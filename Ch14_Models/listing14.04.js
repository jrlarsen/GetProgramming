/* Get Programming with JavaScript
 * Listing 14.04
 * A Place view
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
      console.log(renderPlace(place.getData()));
    };
  
    return {
      render: render
    };
  })();

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
/* Get Programming with JavaScript
 * Listing 15.02
 * The map builder with challenges
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.buildMap = function (mapData) {  
    var placesStore = {};
  
    var buildPlace = function (placeData) {
      var place = new theCrypt.Place(placeData.title, placeData.description);
    
      if (placeData.items !== undefined) {
        placeData.items.forEach(place.addItem);
      }
      
      placesStore[placeData.title] = place;
    };
  
    var buildExits = function (placeData) {
      var here = placesStore[placeData.title];
    
      if (placeData.exits !== undefined) {
        placeData.exits.forEach(function (exit) {
          var there = placesStore[exit.to];
          here.addExit(exit.direction, there);
          here.addChallenge(exit.direction, exit.challenge);
        });
      }    
    };
      
    // create all places
    mapData.places.forEach(buildPlace);
    
    // link places together
    mapData.places.forEach(buildExits);
    
    return placesStore[mapData.firstPlace];  
  };

})();



/* Further Adventures
 *
 * To test the buildMap function, you
 * need some map data and the
 * Place constructor.
 *
 * 1) Add a script element to the
 *    HTML panel to load the
 *    Place constructor.
 *
 * 2) In the JavaScript panel, after
 *    the existing code, add some
 *    map data.
 *
 * 3) Add a line of code to call the
 *    buildMap function with the
 *    map data.
 *
 *    var first = theCrypt.buildMap(data);
 *
 * 4) Add code to log the first object's
 *    data to the console.
 *
 *    console.log(first.getData());
 *
 * 5) Run the program.
 *
 */
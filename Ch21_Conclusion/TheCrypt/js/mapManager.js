/* Get Programming with JavaScript
 * Chapter 21
 * The map builder
 */

(function () {
  var buildMap = function (mapData) {  
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
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.buildMap = buildMap;
  
})();

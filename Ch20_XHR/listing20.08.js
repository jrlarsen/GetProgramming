// Get Programming with JavaScript
// Listing 20.08
// Map Manager
// Uses gpwj.data and theCrypt.Place

(function () {
  "use strict";

  var placesStore = {};
  
  function addPlace (placeData) {
    var place = new theCrypt.Place(placeData.title, placeData.description);
    placesStore[placeData.id] = place;
      
    if (placeData.items !== undefined) {
      placeData.items.forEach(place.addItem);
    }
    
    if (placeData.exits !== undefined) {
      placeData.exits.forEach(function (exit) {
        place.addExit(exit.direction, exit.id);
        place.addChallenge(exit.direction, exit.challenge);
      });
    }
    return place;
  }
  
  function loadPlace (id, callback) {
    var place = placesStore[id];
  
    if (place === undefined) {
      gpwj.data.load(id, function (placeData) {
        var place = addPlace(placeData);
        callback(place);
      });    
    } else {
      callback(place);
    }
  }
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.map = {
    loadPlace: loadPlace
  };
  
})();

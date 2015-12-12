/* Get Programming with JavaScript
 * Listing 19.05
 * Map manager
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.map = (function () {
    var placesStore = {};
  
    function addPlace (pData) {
      var place = new theCrypt.Place(pData.title, pData.description);
      placesStore[pData.id] = place;
      
      if (pData.items !== undefined) {
        pData.items.forEach(place.addItem);
      }
    
      if (pData.exits !== undefined) {
        pData.exits.forEach(function (exit) {
          place.addExit(exit.direction, exit.id);
        });
      }
      return place;
    }
  
    function loadPlace (id, callback) {
      var place = placesStore[id];
      var xhr;
    
      if (place === undefined) {
        xhr = new XMLHttpRequest();
    
        xhr.addEventListener("load", function () {
          var placeData = JSON.parse(xhr.responseText);
          callback(addPlace(placeData));
        });
    
        xhr.open("GET", "http://output.jsbin.com/" + id + ".json");
        xhr.send();
      } else {
        callback(place);
      }
    }
  
    return {
      loadPlace: loadPlace
    };
  
  })();
})();
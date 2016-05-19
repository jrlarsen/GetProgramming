/* Get Programming with JavaScript
 * Listing 18.20
 * A Place view with templates
 * Must come after theCrypt.Template
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.placeView = (function () {
    var placeDiv = document.getElementById("place");
    var placeScript = document.getElementById("placeTemplate");
    var itemScript = document.getElementById("itemTemplate");
  
    var placeTemplate = new theCrypt.Template(placeScript.innerHTML);
    var itemTemplate = new theCrypt.Template(itemScript.innerHTML);
  
    var render = function (place) {
      var data = place.getData();
      var itemsDiv;
      var exitsDiv;
    
      var items = data.items.map(function (itemName) {
        return { item : itemName };
      });
    
      var exits = data.exits.map(function (exitName) {
        return { item : exitName };
      });
    
      placeDiv.innerHTML = placeTemplate.fill(data);
    
      itemsDiv = document.getElementById("placeItems");
      itemsDiv.innerHTML = itemTemplate.fillList(items);
        
      exitsDiv = document.getElementById("placeExits");
      exitsDiv.innerHTML = itemTemplate.fillList(exits);
    };
  
    return {
      render: render
    };
  })();

})();
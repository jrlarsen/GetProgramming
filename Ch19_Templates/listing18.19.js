/* Get Programming with JavaScript
 * Listing 18.19
 * A Player view using templates
 * Must come after theCrypt.Template
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.playerView = (function () {
    var playerDiv = document.getElementById("player");
    var playerScript = document.getElementById("playerTemplate");
    var itemScript = document.getElementById("itemTemplate");
  
    var playerTemplate = new theCrypt.Template(playerScript.innerHTML);
    var itemTemplate = new theCrypt.Template(itemScript.innerHTML);
  
    var render = function (player) {
      var data = player.getData();
      var itemsDiv;
    
      var items = data.items.map(function (itemName) {
        return { item : itemName };
      });
    
      playerDiv.innerHTML = playerTemplate.fill(data);
    
      itemsDiv = document.getElementById("playerItems");
      itemsDiv.innerHTML = itemTemplate.fillList(items);
    };
  
    return {
      render: render
    };
  })();
})();
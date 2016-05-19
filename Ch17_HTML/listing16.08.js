/* Get Programming with JavaScript
 * Listing 16.08
 * A web-based Player view
 */

(function () {
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.playerView = (function () {
    var renderName = function (playerData) {
      return playerData.name;
    };
  
    var renderHealth = function (playerData) {
      return playerData.name + " has health " + playerData.health;
    };
  
    var renderItems = function (playerData) {
      var itemsString = "";
      var items = playerData.items;
    
      if (items.length > 0) {
        itemsString += "Items:\n";
        items.forEach(function (item, i) {
          itemsString += "(" + (i + 1) + ") ";
          itemsString += item + "\n";
        });
      }
    
      return itemsString;
    };
  
    var renderPlayer = function (playerData) {
      var playerString = "\n";
    
      playerString += renderName(playerData) + "\n";
      playerString += renderHealth(playerData) + "\n";    
      playerString += renderItems(playerData);
    
      return playerString;
    };
  
    // display player info on the web page
    var render = function (player) {
      
      // get a reference to the div with id "player"
      var playerDiv = document.getElementById("player");
      
      // update the contents of the div
      playerDiv.innerHTML = renderPlayer(player.getData());
    };
  
    return {
      render: render
    };
  })();
  
})();

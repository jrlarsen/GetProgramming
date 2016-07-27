/* Get Programming with JavaScript
 * Listing 17.07
 * A web-based player view
 */

(function () {
  "use strict";

  function getNameInfo (playerData) {
    return playerData.name;
  }

  function getHealthInfo (playerData) {
    return "(" + playerData.health + ")";
  }
  
  function getItemsInfo (playerData) {
    var itemsString = "Items:" + spacer.newLine();
       
    playerData.items.forEach(function (item, i) {
      itemsString += "   - " + item + spacer.newLine();
    });

    return itemsString;
  }
  
  function getTitleInfo (playerData) {
    return getNameInfo(playerData) + " " + getHealthInfo(playerData);
  }

  function getInfo (playerData) {
    var info = spacer.box(getTitleInfo(playerData), 40, "*");
    info += "  " + getItemsInfo(playerData);
    info += spacer.line(40, "*");
    info += spacer.newLine();

    return info;
  }
  
  function render (player) {
    var playerDiv = document.getElementById("player");
    playerDiv.innerHTML = getInfo(player.getData());
  }
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.playerView = {
    render: render
  };
  
})();

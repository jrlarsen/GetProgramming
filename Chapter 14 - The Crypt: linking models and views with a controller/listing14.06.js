/* Get Programming with JavaScript
 * Listing 14.06
 * A game controller
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.game = (function () {
    var player;
  
    var renderPlayer = function () {
      theCrypt.playerView.render(player);
    };
  
    var renderPlace = function () {
      theCrypt.placeView.render(player.getPlace());
    };

    var renderMessage = function (message) {
      theCrypt.messageView.render(message);
    };
  
    var init = function (mapData, playerName) {
      var firstPlace = theCrypt.buildMap(mapData);
    
      player = new theCrypt.Player(playerName, 50);
      player.addItem("The Sword of Doom");
      player.setPlace(firstPlace);
    
      renderPlayer();
      renderPlace();
    };
  
    var go = function (direction) {
      var place = player.getPlace();
      var destination = place.getExit(direction);
    
      if (destination !== undefined) {
        player.setPlace(destination);
        renderPlace();
      } else {
        renderMessage("There is no exit in that direction");
      }
    };
    
    var get = function (item) {
      var place = player.getPlace();
      if (place.hasItem(item)) {
        place.removeItem(item);
        player.addItem(item);
      } else {
        renderMessage("You can't get that!");
      }
    };
  
    // Return the public interface
    return {
      me: renderPlayer,
      here: renderPlace,
      go: go,
      get: get,
      init: init
    };
  
  })();

})();


/* Further Adventures
 *
 * The game controller uses the other
 * modules created for The Crypt in
 * Chapters 13 and 14.
 *
 * The controller is tested in
 * listings 14.07 and 14.08.
 *
 */
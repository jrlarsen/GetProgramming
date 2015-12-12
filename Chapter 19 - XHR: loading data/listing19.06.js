/* Get Programming with JavaScript
 * Listing 19.06
 * A game controller
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.game = (function () {
    var player;
  
    function renderPlayer () {
      theCrypt.playerView.render(player);
    }
  
    function renderPlace () {
      theCrypt.placeView.render(player.getPlace());
    }

    function renderMessage (message) {
      theCrypt.messageView.render(message);
    }
  
    function init (mapData, playerName) {
      theCrypt.map.loadPlace(mapData.firstPlaceID, function (firstPlace) {
      
        player = new theCrypt.Player(playerName, 50);
        player.addItem("The Sword of Doom");
        player.setPlace(firstPlace);
    
        renderPlayer();
        renderPlace();  
      });
    }
  
    function go (direction) {
      var place = player.getPlace();
      var destination = place.getExit(direction);

      if (destination === undefined) {
      
        renderMessage("There is no exit in that direction");
      
      } else {
      
        theCrypt.map.loadPlace(destination, function (place) {
          player.setPlace(place);
          renderPlace();
        });
      
      }
    }
    
    function get (item) {
      var place = player.getPlace();
      if (place.hasItem(item)) {
        place.removeItem(item);
        player.addItem(item);
      } else {
        renderMessage("You can't get that!");
      }
    }
  
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
  
theCrypt.game.init({ firstPlaceID : "qulude" }, "Dax");
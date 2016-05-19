/* Get Programming with JavaScript
 * Listings 15.03 and 15.05
 * A game controller with challenges
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
      var challenge = place.getChallenge(direction);
    
      if (destination !== undefined) {

        if (challenge === undefined || challenge.complete === true) {
          player.setPlace(destination);
          renderPlace();
        } else {
          renderMessage(challenge.message);
          if (challenge.damage) {
            player.applyDamage(challenge.damage);
          }
        }

      } else {
        renderMessage("There is no exit in that direction");
      }
    };
  
    var use = function (item, direction) {
      var place = player.getPlace();
      var challenge = place.getChallenge(direction);
    
      if (challenge === undefined || challenge.complete === true) {
        renderMessage("You don't need to use that there");
      } else if (player.hasItem(item)) {
      
        if (item === challenge.requires) {
          renderMessage(challenge.success);
          challenge.complete = true;
          if (challenge.itemConsumed) {
            player.removeItem(item);
          }
        } else {
          renderMessage(challenge.failure);
        }
      
      } else {
        renderMessage("You don't have that item");
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
      use: use,
      get: get,
      init: init
    };
  
  })();

})();



/* Further Adventures
 *
 * 1) Look through the go and use methods.
 *    Find all the references to challenges.
 *    Are any of the properties of
 *    cahllenges not used?
 *
 */
// Get Programming with JavaScript
// Chapter 21
// The game controller

(function () {

  var player;
  var inPlay = false;

  var init = function (mapData, playerName) {
    var firstPlace = theCrypt.buildMap(mapData);
  
    player = new theCrypt.Player(playerName, 50);
    player.addItem("The Sword of Doom");
    player.setPlace(firstPlace);
    
    inPlay = true;
    render();
    return "";
  };
  
  var checkGameStatus = function () {
    if (player.getData().health <= 0) {
        inPlay = false;
        renderMessage("Overcome by your wounds...");
        renderMessage("...you fall to the ground.");
        renderMessage("- Your adventure is over -");
    }
  };

  var render = function () {
    console.clear();
    if (inPlay) {
      theCrypt.placeView.render(player.getPlace());
      theCrypt.playerView.render(player);   
    }
  };

  var renderMessage = function (message) {
    theCrypt.messageView.render(message);
  };

  var get = function () {
    if (inPlay) {
      var place = player.getPlace();
      var item = place.getLastItem();

      if (item !== undefined) {
        player.addItem(item);
        render();
      } else {
        renderMessage("There is no item to get");
      }
    } else {
      renderMessage("The game is over!");
    }
    return "";
  };
  
  var go = function (direction) {
    if (inPlay) {
      var place = player.getPlace();
      var destination = place.getExit(direction);
      var challenge = place.getChallenge(direction);

      if (destination === undefined) {
          renderMessage("There is no exit in that direction");
      } else {
          if ((challenge === undefined) || challenge.complete) {
              player.setPlace(destination);
              render();
          } else {
              if (challenge.damage) {
                  player.applyDamage(challenge.damage);
              }
          
              render();
              renderMessage(challenge.message);
              checkGameStatus();
          }
      }
    } else {
      renderMessage("The game is over!");
    }
    return "";
  };

  var use = function (item, direction) {
      if (inPlay) {
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
      } else {
        renderMessage("The game is over!");
      }
      return "";
  };
  
  // Assign the public interface
  window.game = {
    get: get,
    go: go,
    use: use,
    init: init
  };

})();

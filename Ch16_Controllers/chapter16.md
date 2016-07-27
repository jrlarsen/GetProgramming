# Chapter 16 - Controllers: linking models and views

### The fitness app controller
[JS Bin Listing 16.01](http://jsbin.com/goniro/edit?js,console) - goniro 
```javascript
// Get Programming with JavaScript
// Listing 16.01
// The fitness app controller

(function () {
  
  var buildUser = function (userData) {
    var user = new fitnessApp.User(userData.name);
  
    userData.sessions.forEach(function (session) {
      user.addSession(session.sessionDate, session.duration);
    });
  
    return user;
  };
  
  var init = function (userData) {
    var user = buildUser(userData);
    
    fitnessApp.userView.render(user);
    
    return {
      log: function (sessionDate, duration) {
        user.addSession(sessionDate, duration);
        fitnessApp.userView.render(user);
        return "Thanks for logging your session.";
      }
    };
  };
  
  if (window.fitnessApp === undefined) {
    window.fitnessApp = {};
  }
  
  fitnessApp.init = init;
  
})();



/* Further Adventures
 *
 * The User constructor and user view
 * code have been imported on the
 * HTML panel.
 *
 * The user data needs a name and
 * a sessions array.
 *
 * 1) Run the program.
 *
 * 2) At the console, create some
 *    user data:
 *
 *    > var data = { name: 'Bob', sessions: [] }
 *
 * 3) Initialize the fitness app
 *    with the data:
 *
 *    > var user = fitnessApp.init(data)
 *
 * 4) Log a session:
 *
 *    > user.log("2016-09-03", 40)
 *
 */
```


### The fitness app (HTML)
[JS Bin Listing 16.02](http://jsbin.com/huxuti/edit?html,js,console) - huxuti 
```HTML
<!-- fitnessApp.userData -->
<script src="http://output.jsbin.com/tenuwis.js"></script>

<!-- fitnessApp.User -->
<script src="http://output.jsbin.com/fasebo.js"></script>

<!-- fitnessApp.userView -->
<script src="http://output.jsbin.com/yapahe.js"></script>

<!-- fitnessApp.controller -->
<script src="http://output.jsbin.com/goniro.js"></script>
```


### The fitness app
[JS Bin Listing 16.03](http://jsbin.com/huxuti/edit?html,js,console) - huxuti 
```javascript
// Get Programming with JavaScript
// Listings 16.02 and 16.03
// The fitness app

var app = fitnessApp.init(fitnessApp.userData);



/* Further Adventures
 *
 * 1) Create your own user data file
 *    on JS Bin and import it instead
 *    of the current data file.
 *
 * 2) Log some sessions for your user.
 *
 */
```

### The game controller
[JS Bin Listings 16.04 to 16.10](http://jsbin.com/yeqicu/edit?js) - yeqicu 
```javascript
// Get Programming with JavaScript
// Listings 16.04 to 16.10
// The game controller

(function () {

  // 16.05
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
  
  // 16.06
  var checkGameStatus = function () {
    if (player.getData().health <= 0) {
        inPlay = false;
        renderMessage("Overcome by your wounds...");
        renderMessage("...you fall to the ground.");
        renderMessage("- Your adventure is over -");
    }
  };

  // 16.07
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

  // 16.08
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
  
  // 16.09
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

  // 16.10
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
  
  // 16.04
  // Assign the public interface
  window.game = {
    get: get,
    go: go,
    use: use,
    init: init
  };

})();


/* Further Adventures
 *
 * The game controller uses the other
 * modules created for The Crypt in
 * Chapters 14 and 15.
 *
 * The controller is tested in
 * listings 16.11 and 16.12.
 *
 * As you progress through the discussions
 * in chapter 16, make sure you see
 * how each function plays its part
 * in making the game work.
 *
 */
```



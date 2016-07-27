# Chapter 15 - Views: displaying data

### A simple user view
[JS Bin Listing 15.01](http://jsbin.com/goqinep/edit?js,console) - goqinep 
```javascript
// Get Programming with JavaScript
// Listing 15.01
// A simple user view


// User constructor

var User = function (name) {
    var sessions = [];
    var totalDuration = 0;

    this.addSession = function (sessionDate, duration) {
        sessions.push({
            "sessionDate" : sessionDate,
            "duration"    : duration
        });
        totalDuration += duration;
        return totalDuration;
    };
  
    this.getData = function () {
        return {
            "name"    : name,
            "total"   : totalDuration,
            "sessions": sessions.slice()
        };
    };
};


// View

var userView = (function () {
  
  var getInfo = function (userData) {
    var infoString = "\n" + userData.name + "\n";
    
    userData.sessions.forEach(function (session) {
      infoString += session.duration + " minutes on ";
      infoString += session.sessionDate + "\n";
    });
    
    infoString += "\n" + userData.total + " minutes so far";
    infoString += "\nWell done!\n";
    
    return infoString;
  };
  
  var render = function (user) {
    console.log(getInfo(user.getData()));
  };
  
  return {
    render: render
  };
  
})();


// Test

var user = new User("Mahesha");
user.addSession("2017-02-05", 35);
user.addSession("2017-02-06", 45);

userView.render(user);


/* Further Adventures
 *
 * 1) Update the view so that it displays
 *    different messages depending on
 *    the total exercise the user has
 *    completed.
 *
 *    e.g. "Get going!"
 *         "Not bad!"
 *         "Getting there!"
 *         "Outstanding!"
 *
 */
```

### Testing two user views (HTML)
[JS Bin Listing 15.02](http://jsbin.com/vamuzu/edit?html,js,console) - vamuzu 
```HTML
<!-- spacer -->
<script src="http://output.jsbin.com/juneqo.js"></script>

<!-- fitnessApp.User -->
<script src="http://output.jsbin.com/fasebo.js"></script>

<!-- fitnessApp.userView -->
<script src="http://output.jsbin.com/yapahe.js"></script>

<!-- fitnessApp.userViewEnhanced -->
<script src="http://output.jsbin.com/puculi.js"></script>
```



### Testing two user views
[JS Bin Listing 15.03](http://jsbin.com/vamuzu/edit?html,js,console) - vamuzu 
```javascript
// Get Programming with JavaScript
// Listings 15.02 and 15.03
// Testing two user views

var user = new fitnessApp.User("Mahesha");

user.addSession("2017-02-05", 35);
user.addSession("2017-02-06", 45);

fitnessApp.userView.render(user);
fitnessApp.userViewEnhanced.render(user);



/* Further Adventures
 *
 * 1) Add a couple more sessions
 *    for the user and run the
 *    program again.
 *
 * 2) Take a look at the code for
 *    the enhanced view (it's imported
 *    on the HTML panel).
 *    Can you follow it?
 *
 */
```


### The Player constructor
[JS Bin Listing 15.04](http://jsbin.com/yaneye/edit?js,console) - yaneye 
```javascript
/* Get Programming with JavaScript
 * Listing 15.04
 * The Player constructor
 */

(function () {

  var Player = function (name, health) {
    var items = [];
    var place = null;

    this.addItem = function (item) {
      items.push(item);
    };

    this.hasItem = function (item) {
        return items.indexOf(item) !== -1;
    };
  
    this.removeItem = function (item) {
        var itemIndex = items.indexOf(item);
        if (itemIndex !== -1) {
            items.splice(itemIndex, 1);
        }    
    };

    this.setPlace = function (destination) {
      place = destination;
    };
    
    this.getPlace = function () {
      return place;
    };
    
    this.applyDamage = function (damage) {
        health = health - damage;
    };

    this.getData = function () {
      var data = {
        "name" : name,
        "health" : health,
        "items" : items.slice()
      };
    
      if (place !== null) {
        data.place = place.title;
      }
    
      return data;
    };
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.Player = Player;
  
})();
  


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, enter the
 *    following statements:
 *
 *    > var p1 = new theCrypt.Player("Bob", 20)
 *    > p1.getData()
 *
 * data about the player should be displayed.
 *
 * 3) Add some items to the player.
 *
 *    > p1.addItem("a horse")
 *    > p1.addItem("a cow")
 *    > p1.getData()
 *
 * The Place constructor isn't available
 * but we can use an object with a title
 * for now.
 *
 * 4) Set a place for the player.
 *
 *    > p1.setPlace({title : "The Farm"})
 *    > p1.getData()
 *
 */
```

### A player view
[JS Bin Listing 15.05](http://jsbin.com/zucifu/edit?js,console) - zucifu 
```javascript
/* Get Programming with JavaScript
 * Listing 15.05
 * A player view
 */

(function () {

  var getNameInfo = function (playerData) {
    return playerData.name;
  };

  var getHealthInfo = function (playerData) {
    return "(" + playerData.health + ")";
  };
  
  var getItemsInfo = function (playerData) {
    var itemsString = "Items:" + spacer.newLine();
       
    playerData.items.forEach(function (item, i) {
      itemsString += "   - " + item + spacer.newLine();
    });

    return itemsString;
  };
  
  var getTitleInfo = function (playerData) {
    return getNameInfo(playerData) + " " + getHealthInfo(playerData);
  };

  var getInfo = function (playerData) {
    var info = spacer.box(getTitleInfo(playerData), 40, "*");
    info += "  " + getItemsInfo(playerData);
    info += spacer.line(40, "*");
    info += spacer.newLine();

    return info;
  }; 
  
  var render = function (player) {
    console.log(getInfo(player.getData()));
  };  
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.playerView = {
    render: render
  };
  
})();
  


/* Further Adventures
 *
 * If you look in the HTML panel you'll
 * see that the Player module is loaded.
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, create
 *    a player.
 *
 *    > var p1 = new theCrypt.Player("Bob", 20)
 *    > p1.getData()
 *
 * 3) Use the player view to display
 *    info about the player.
 *
 *    > theCrypt.playerView.render(p1)
 *
 * 4) Add some items to the player.
 *
 *    > p1.addItem("a horse")
 *    > p1.addItem("a cow")
 *
 * 5) Render the player info again.
 *
 *    > theCrypt.playerView.render(p1)
 *
 */
```



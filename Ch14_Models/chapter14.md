# Chapter 14 - Models: working with data

### The User Constructor
[JS Bin Listing 14.01](http://jsbin.com/suzala/edit?js,console) - suzala 
```javascript
// Get Programming with JavaScript
// Listing 14.01
// The User constructor

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



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Test the constructor at the console prompt:
 *
 *    > var user = new User("Mahesha")
 *    > user.addSession("2017-02-05", 120)
 *    > user.addSession("2017-02-06", 35)
 *    > user.getData()
 *    > user.getData().total
 *
 */
```

### Importing the User constructor
[JS Bin Listing 14.02](http://jsbin.com/zenire/edit?html,js,console) - zenire
```html
<!-- The User constructor -->
<script src="http://output.jsbin.com/suzala.js"></script>
```

### A function to build a user model from user data
[JS Bin Listing 14.03](http://jsbin.com/zenire/edit?html,js,console) - zenire 
```javascript
// Get Programming with JavaScript
// Listings 14.02 and 14.03
// A function to build a user model from user data
// Requires the User constructor

var buildUser = function (userData) {
  var user = new User(userData.name);
  
  userData.sessions.forEach(function (sesh) {
    user.addSession(sesh.sessionDate, sesh.duration);
  });
  
  return user;
};

var userData = {
    "name" : "Mahesha",
    "sessions" : [
        { "sessionDate" : "2017-02-05", "duration" : 120 },
        { "sessionDate" : "2017-02-06", "duration" : 35 },
        { "sessionDate" : "2017-02-06", "duration" : 45 }
    ]
};

var user = buildUser(userData);

console.log(user.addSession("2017-02-15", 40));



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Add a couple more sessions to the user data
 *    and run the program again.
 *
 * 3) Use buildUser to create a second user from
 *    a new user data object.
 *
 */
```


### Map data (Kitchen example)
[JS Bin Listing 14.04](http://jsbin.com/qonoje/edit?js,console) - qonoje 
```JavaScript
/* Get Programming with JavaScript
 * Listing 14.04
 * Map data (Kitchen example)
 */

(function () {
  
  var mapData = {
    "title" : "The Dark House",
    "firstPlace" : "The Kitchen",
  
    "places" : [
      {
        "title" : "The Kitchen",
        "description" : "You are in a kitchen. There is a disturbing smell.",
        "items" : [ "a piece of cheese" ],
        "exits" : [
          { "direction": "south", "to": "The Old Library" },
          { "direction": "west",  "to": "The Kitchen Garden" },
          { "direction": "east",  "to": "The Kitchen Cupboard" }
        ]
      },
      {
        "title" : "The Old Library",
        "description" : "You are in a library. Dusty books line the walls.",
        "items" : [ "a rusty key" ],
        "exits" : [
          { "direction" : "north", "to" : "The Kitchen" }
        ]
      },
      {
        "title" : "The Kitchen Garden",
        "description" : "You are in a small, walled garden.",
        "exits" : [
          { "direction" : "east", "to" : "The Kitchen" }
        ]
      },
      {
        "title" : "The Kitchen Cupboard",
        "description" : "You are in a cupboard. It's surprisingly roomy.",
        "items" : [ "a tin of Spam" ],
        "exits" : [
          { "direction" : "west", "to" : "The Kitchen" }
        ]
      }
    ]
  };

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.mapData = mapData;
  
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, type the following,
 *    pressing Enter after each one:
 *
 *    > var mapData = theCrypt.mapData
 *    > mapData
 *    > mapData.title
 *    > mapData.places
 *    > mapData.places[0]
 *    > mapData.places[0].description
 *
 * 3) Create a new empty place and assign it
 *    to a variable.
 *
 *    > var place = {}
 *
 * 4) Add title and description properties
 *    to the place.
 *
 *    > place.title = "The Games Room"
 *
 * 5) Add the place to the mapData places array.
 *
 *    > mapData.places.push(place)
 *
 */
```


### A Place constructor with challenges
[JS Bin Listing 14.05](http://jsbin.com/ruviso/edit?js,console) - ruviso 
```javascript
/* Get Programming with JavaScript
 * Listing 14.05
 * A Place constructor with challenges
 * Requires spacer
 */

(function () {

  var Place = function (title, description) {
    var newLine = spacer.newLine();
    var items = [];
    var exits = {};
    var challenges = {};
  
    var getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };
  
    var getExitsInfo = function () {
        var exitsString = "Exits from " + title;
        exitsString += ":" + newLine;
        
        Object.keys(exits).forEach(function (key) {
            exitsString += "   - " + key;
            exitsString += newLine;
        });
      
        return exitsString;
    };

    var getTitleInfo = function () {
        return spacer.box(title, title.length + 4, "=");
    };

    var getInfo = function () {
        var infoString = getTitleInfo();
        infoString += description;
        infoString += newLine + newLine;
        infoString += getItemsInfo() + newLine;
        infoString += getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };

    this.showInfo = function () {
        console.log(getInfo());
    };

    this.addItem = function (item) {
        items.push(item);
    };
  
    this.addExit = function (direction, exit) {
        exits[direction] = exit;
    };

    this.getExit = function (direction) {
        return exits[direction];
    };
  
    this.getLastItem = function () {
        return items.pop();
    };
    
    this.addChallenge = function (direction, challenge) {
      challenges[direction] = challenge;
    };
  
    this.getChallenge = function (direction) {
      return challenges[direction];
    };
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.Place = Place;  
  
})();
  


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a place.
 *
 *    > var p = new theCrypt.Place("The Farm", "You are at a farm.")
 *    > p.showInfo()
 *
 * 3) Add an exit.
 *
 *    > p.addExit("east", "The Farmhouse")
 *    > p.showInfo()
 *
 * 4) Create a challenge object.
 *
 *    > var ch = {}
 *    > ch.message = "There is a bull blocking the gate"
 *    > ch.success = "The bull runs off after the kite"
 *    > ch.failure = "It's getting angrier"
 *    > ch.requires = "a red kite"
 *    > ch.damage = 30
 *    > ch.itemRequired = true
 *    > ch
 *
 * 5) Add the challenge.
 *
 *    > p.addChallenge("east", ch)
 *    > p.getChallenge("east")
 *
 */
```

### The map builder
[JS Bin Listing 14.06](http://jsbin.com/paqihi/edit?js,console) - paqihi 
```javascript
/* Get Programming with JavaScript
 * Listing 14.06
 * The map builder
 */

(function () {
  var buildMap = function (mapData) {  
    var placesStore = {};
  
    var buildPlace = function (placeData) {
      var place = new theCrypt.Place(placeData.title, placeData.description);
    
      if (placeData.items !== undefined) {
        placeData.items.forEach(place.addItem);
      }
      
      placesStore[placeData.title] = place;
    };
  
    var buildExits = function (placeData) {
      var here = placesStore[placeData.title];
    
      if (placeData.exits !== undefined) {
        placeData.exits.forEach(function (exit) {
          var there = placesStore[exit.to];
          here.addExit(exit.direction, there);
          here.addChallenge(exit.direction, exit.challenge);                            
        });
      }    
    };
      
    // create all places
    mapData.places.forEach(buildPlace);
    
    // link places together
    mapData.places.forEach(buildExits);
    
    return placesStore[mapData.firstPlace];  
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.buildMap = buildMap;
  
})();


/* Further Adventures
 *
 * The buildMap function uses
 * the Place constructor and needs
 * some map data to work on.
 *
 * Listing 14.08 shows a working
 * example that imports all the
 * modules needed.
 *
 */
```

### Using the new map builder
[JS Bin Listing 14.07](http://jsbin.com/mogano/edit?js,console) - mogano 
```javascript
// Get Programming with JavaScript
// Listing 14.07
// Using the new map builder

(function () {
  
  var getGame = function () {
    
    var render = function () {
      console.clear();
      player.getPlace().showInfo();
      player.showInfo();  
    };
    
    var firstPlace = theCrypt.buildMap(theCrypt.mapData);
  
    var player = new theCrypt.Player("Kandra", 50);
    player.addItem("The Sword of Doom");
    player.setPlace(firstPlace);

    render();
  
    // Return the public interface
    return {
      go: function (direction) {
        var place = player.getPlace();
        var destination = place.getExit(direction);

        if (destination !== undefined) {
          player.setPlace(destination);
          render();
          return "";
        } else {
          return "*** There is no exit in that direction ***";
        }
      },

      get: function () {
          var place = player.getPlace();
          var item = place.getLastItem();

          if (item !== undefined) {
              player.addItem(item);
              render();
              return "";
          } else {
              return "*** There is no item to get ***";
          }
      }    
    };
    
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.getGame = getGame;
  
})();



/* Further Adventures
 *
 * This module is part of a larger program.
 * It requires other modules to run.
 *
 * Listing 14.08 shows all of the pieces
 * working together.
 *
 */
```

### Using the new map builder (HTML)
[JS Bin Listing 14.08](http://jsbin.com/rulayu/edit?html,console) - rulayu

```html
<!-- spacer -->
<script src="http://output.jsbin.com/juneqo.js"></script>

<!-- Player constructor -->
<script src="http://output.jsbin.com/nubijex.js"></script>

<!-- Place constructor -->
<script src="http://output.jsbin.com/ruviso.js"></script>

<!-- map data (Kitchen example with challenge) -->
<script src="http://output.jsbin.com/jayici.js"></script>

<!-- map builder -->
<script src="http://output.jsbin.com/paqihi.js"></script>

<!-- Game initialization -->
<script src="http://output.jsbin.com/mogano.js"></script>
```

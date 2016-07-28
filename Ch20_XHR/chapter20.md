# Chapter 20 - XHR: loading data


### Using an XHR object to load user data
[JS Bin Listing 20.01](http://jsbin.com/qakofo/edit?js,console) - qakofo 
```javascript
// Get Programming with JavaScript
// Listing 20.01
// Using an XHR object to load user data

var xhr = new XMLHttpRequest();
var url = "http://output.jsbin.com/qiwizo.json";

xhr.addEventListener("load", function () {
  console.log(xhr.responseText);
});

xhr.open("GET", url);
xhr.send();



/* Further Adventures
 *
 * 1) Run the program to see the data load.
 *
 * 2) Change the URL to pobapa.json
 *    instead of qiwizo.json and
 *    run the program again.
 *
 */
```


### Parsing JSON text to obtain a JavaScript object
[JS Bin Listing 20.02](http://jsBin.com/rexolo/edit?js,console) - rexolo 
```javascript
// Get Programming with JavaScript
// Listing 20.02
// Parsing JSON text to obtain a JavaScript object

var xhr = new XMLHttpRequest();
var url = "http://output.jsbin.com/qiwizo.json";

xhr.addEventListener("load", function () {
  var data = JSON.parse(xhr.responseText);
  console.log(data);
});

xhr.open("GET", url);
xhr.send();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * Once loaded, the data is converted
 * into a JavaScript object you can use.
 *
 * 2) Add more console.log lines inside
 *    the event listener function:
 *
 *    console.log(data.name);
 *    console.log(data.duration);
 *    console.log(data.sessions[0]);
 *
 * 3) At the console prompt,
 *    try to access the data variable:
 *
 *    > data
 *
 *    Why is there an error?
 *
 */
```


### A module for loading JS Bin data
[JS Bin Listing 20.03](http://jsbin.com/suxoge/edit?js,console) - suxoge
```javascript
// Get Programming with JavaScript
// Listing 20.03
// A module for loading JS Bin data

(function () {
  "use strict";
  
  function loadData (bin, callback) {
    var xhr = new XMLHttpRequest();
    var url = "http://output.jsbin.com/" + bin + ".json";

    xhr.addEventListener("load", function () {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    });

    xhr.open("GET", url);
    xhr.send();
  }
  
  if (window.gpwj === undefined) {
    window.gpwj = {};
  }
  
  gpwj.data = {
    load: loadData
  };
  
})();

gpwj.data.load("qiwizo", console.log);


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Change the bin code to "pobapa"
 *    and run the program again.
 *
 * 3) Declare a new function, outside
 *    the IIFE, called numSessions.
 *
 * 4) Add statements to the function to
 *    display the number of sessions for
 *    the loaded user:
 *
 *    "Mahesha has logged 3 sessions."
 *
 * 5) Replace console.log with numSessions
 *    as the callback for the load function.
 *
 * 6) Run the program.
 *
 */
```


### The fitness app controller
[JS Bin listing 20.04](http://jsbin.com/nudezo/edit?js) - nudezo 
```javascript
// Get Programming with JavaScript
// Listing 20.04
// The fitness app controller

(function () {
  
  var user = null;
  
  function buildUser (userData) {
    var user = new fitnessApp.User(userData.name);
  
    userData.sessions.forEach(function (session) {
      user.addSession(session.sessionDate, session.duration);
    });
  
    return user;
  }
  
  function updateUserFromData (userData) {
      user = buildUser(userData);
      fitnessApp.userView.render(user);     
  }
  
  function loadUser (id) {
    gpwj.data.load(id, updateUserFromData);
    return "Loading user details...";
  }
  
  function log (sessionDate, duration) {
    if (user !== null) {
        user.addSession(sessionDate, duration);
        fitnessApp.userView.render(user);
        return "Thanks for logging your session.";
    } else {
        return "Please wait for user details to load.";
    }
  }
  
  function init (id) {
    loadUser(id);
       
    return {
      log: log,
      loadUser: loadUser
    };
  }
  
  if (window.fitnessApp === undefined) {
    window.fitnessApp = {};
  }
  
  fitnessApp.init = init;
  
})();
```


### The fitness app (HTML)
[JS Bin Listing 20.05](http://jsbin.com/mikigo/edit?html,console) - mikigo 
```HTML
<!-- fitnessApp.User -->
<script src="http://output.jsbin.com/fasebo.js"></script>

<!-- fitnessApp.userView -->
<script src="http://output.jsbin.com/yapahe.js"></script>

<!-- fitnessApp.controller -->
<script src="http://output.jsbin.com/nudezo.js"></script>

<!-- gpwj.data -->
<script src="http://output.jsbin.com/guzula.json"></script>
```



### The fitness app
[JS Bin Listing 20.06](http://jsbin.com/mikigo/edit?js,console) - mikigo 
```javascript
// Get Programming with JavaScript
// Listings 20.05 and 20.06
// The fitness app

var app = fitnessApp.init("qiwizo");

// pobapa - Obinna
// qapavi - Liang
// qiwizo - Mahesha


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Log some sessions:
 *
 *    > app.log("2017-02-07", 20)
 *
 * 3) Load another user:
 *
 *    > app.loadUser("pobapa")
 *    > app.log("2017-02-10", 45)
 *
 */
```


### The JSON data for The Kitchen
[JS Bin Listing 20.07](http://output.jsbin.com/qulude.json) - qulude 
```javascript
{
  "title" : "The Kitchen",
  "id" : "qulude",
  "description" : "You are in a kitchen. There is a disturbing smell.",
  "items" : [ "a piece of cheese" ],
  "exits" : [
    {
      "direction" : "south",
      "to" : "The Old Library",
      "id" : "kacaluy"
    },
    {
      "direction" : "west",
      "to" : "The Kitchen Garden",
      "id" : "xulare"
    },
    {
      "direction" : "east",
      "to" : "The Kitchen Cupboard",
      "id" : "jodeyo"
    }
  ]
}
```


### Map Manager
[JS Bin Listing 20.08](http://jsbin.com/xesoxu/edit?js) - xesoxu 
```javascript
// Get Programming with JavaScript
// Listing 20.08
// Map Manager
// Uses gpwj.data and theCrypt.Place

(function () {
  "use strict";

  var placesStore = {};
  
  function addPlace (placeData) {
    var place = new theCrypt.Place(placeData.title, placeData.description);
    placesStore[placeData.id] = place;
      
    if (placeData.items !== undefined) {
      placeData.items.forEach(place.addItem);
    }
    
    if (placeData.exits !== undefined) {
      placeData.exits.forEach(function (exit) {
        place.addExit(exit.direction, exit.id);
        place.addChallenge(exit.direction, exit.challenge);
      });
    }
    return place;
  }
  
  function loadPlace (id, callback) {
    var place = placesStore[id];
  
    if (place === undefined) {
      gpwj.data.load(id, function (placeData) {
        var place = addPlace(placeData);
        callback(place);
      });    
    } else {
      callback(place);
    }
  }
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.map = {
    loadPlace: loadPlace
  };
  
})();
```



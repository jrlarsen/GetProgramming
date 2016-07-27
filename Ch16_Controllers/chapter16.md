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

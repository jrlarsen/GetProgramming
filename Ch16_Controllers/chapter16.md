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



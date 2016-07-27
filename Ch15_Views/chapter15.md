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



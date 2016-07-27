# Chapter 14 - Models: working with data

### The User Constructor
[JS Bin Listing 14.01]() -
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

```html
<!-- The User constructor -->
<script src="http://output.jsbin.com/suzala.js"></script>
```


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

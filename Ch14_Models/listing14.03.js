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

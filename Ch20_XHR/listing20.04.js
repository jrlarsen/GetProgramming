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

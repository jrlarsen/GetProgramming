// Get Programming with JavaScript
// Chapter 21
// The Place constructor

(function () {

  var Place = function (title, description) {
    var exits = {};
    var items = [];
    var challenges = {};

    this.addItem = function (item) {
      items.push(item);
    };
  
    this.getLastItem = function () {
        return items.pop();
    };

    this.addExit = function (direction, exit) {
      exits[direction] = exit;
    };
    
    this.getExit = function (direction) {
      return exits[direction];
    };
    
    this.addChallenge = function (direction, challenge) {
      challenges[direction] = challenge;
    };
  
    this.getChallenge = function (direction) {
      return challenges[direction];
    };

    this.getData = function () {
      var data = {
        "title" : title,
        "description" : description,
        "items" : items.slice(),
        "exits" : Object.keys(exits)
      };
    
      return data;
    };
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.Place = Place;

})();

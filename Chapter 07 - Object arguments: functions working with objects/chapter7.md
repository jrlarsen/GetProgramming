# Chapter 07 - Object arguments: functions working with objects


### Passing a function an object as an argument
[JS Bin: Listing 7.01](http://jsbin.com/tafopo/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.01
 * Passing a function an object as an argument
 */

var planet1;
var getPlanetInfo;

planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

getPlanetInfo = function (planet) {
    return planet.name + ": planet number " + planet.position;
};

console.log(getPlanetInfo(planet1));



/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */
```


### A function that adds properties to an object
[JS Bin: Listing 7.02](http://jsbin.com/qevodu/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.02
 * A function that adds properties to an object
 */

var planet1 = { name: "Jupiter", radius: 69911 };

var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.area = 4 * 3.142 * r * r;
    planet.volume = 4 * 3.142 * r * r * r / 3;
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("surface area = " + planet.area + " square km");
    console.log("volume = " + planet.volume + " cubic km");
};

calculateSizes(planet1);
displaySizes(planet1);                                                  
                                                  


/* Further Adventures
 *
 * The diameter of a planet is double its radius.
 *
 * 1) Update the calculateSizes function so it also
 *    adds a diameter property to the planet.
 *
 * 2) Update the displaySizes function so it also
 *    displays the diameter on the console.
 *
 */
```


###
[JS Bin: Listing 7.03](http://jsbin.com/coyeta/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.03
 * A function to create planets
 */

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));



/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */
```


### Moving a point in 2D
[JS Bin: Listing 7.04](http://jsbin.com/baxuvi/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.04
 * Moving a point in 2D
 */

var point1;
var point2;
var move;
var showPoint;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 4, y : -2 });

showPoint(point1);
console.log("Move 4 across and 2 down");
showPoint(point2);



/* Further Adventures
 *
 * 1) Change the amount by which the point is moved
 *    by altering the x and y properties of
 *    the object literal passed to the move function.
 *
 * 2) Write a reflectX function that reflects
 *    a point in the x-axis, returning the new point.
 *
 * 3) How about a rotate90 function that rotates
 *    the point by 90 degrees anticlockwise
 *    around ( 0 , 0 )?
 *
 */
```


### Converting a string to upper case
[JS Bin Listing 7.05](http://jsbin.com/jizaqu/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.05
 * Converting a string to upper case
 */

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);



/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */
```


### Finding substrings
[JS Bin Listing 7.06](http://jsbin.com/mesisi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 7.06
 * Finding substrings
 */

var message = "We choose to go to the Moon!";

console.log(message.substr(3, 12));



/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */
```


### Finding a character with indexOf
[JS Bin Listing 7.07](http://jsbin.com/bidabi/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.07
 * Finding a character with indexOf
 */

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));



/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */
```


### Using Math.min and Math.max
[JS Bin Listing 7.08](http://jsbin.com/moyoti/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.08
 * Using Math.min and Math.max
 */

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);



/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */
```



### Using Math.min and Math.max to constrain an argument
[JS Bin: Listing 7.09](http://jsbin.com/qiziyo/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.09
 * Using Math.min and Math.max to constrain an argument
 */

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

console.log(line(30));
console.log(line(40));
console.log(line(50));



/* Further Adventures
 *
 * 1) Test line lengths from -20 to 60
 *    in steps of 10.
 *
 * 2) Define a spaces function that returns a string
 *    made up of a specified number of space characters.
 *    The line of spaces returned can have a length
 *    between 0 and 40.
 *
 * 3) Add an emptyBox function
 *    that draws an empty box of specified
 *    width and height 5.
 *
 *    emptyBox(12);
 *
 *    > ============
 *    > =          =
 *    > =          =
 *    > =          =
 *    > ============
 *
 */
```


### Organizing functions as object properties
[JS Bin: Listing 7.10](http://jsbin.com/kayono/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.10
 * Organizing functions as object properties
 */

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  
  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;      
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};

console.log(spacer.box("Mercury", 11, "="));
console.log(spacer.box("Mars", 11, "*"));



/* Further Adventures
 *
 * 1) Change the Spacer.box function so that
 *    the box is 5 lines high.
 *
 *    Spacer.box("Earth");
 *
 *    > =========
 *    > =       =
 *    > = Earth =
 *    > =       =
 *    > =========
 *
 */
```


### Displaying player information using objects
[JS Bin: Listing 7.11](http://jsbin.com/beqabe/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 7.11
 * Displaying player information using objects
 */

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  
  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;      
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine(); 
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};

var getPlayerName = function (player) {
  return player.name;
};

var getPlayerHealth = function (player) {
  return player.name + " has health " + player.health;
};

var getPlayerPlace = function (player) {
  return player.name + " is in " + player.place;
};

var getPlayerInfo = function (player, character) {  
  var place = getPlayerPlace(player);
  var health = getPlayerHealth(player);
  var longest = Math.max(place.length, health.length) + 4;

  var info = spacer.box(getPlayerName(player), longest, character);
  info += spacer.wrap(place, longest, character);
  info += spacer.newLine() + spacer.wrap(health, longest, character);
  info += spacer.newLine() + spacer.line(longest, character);
  info += spacer.newLine();

  return info;
};

var player1 = {
  name: "Kandra",
  place: "The Dungeon of Doom",
  health: 50
};

var player2 = {
  name: "Dax",
  place: "Limbo",
  health: 40
};

console.log(getPlayerInfo(player1, "="));
console.log(getPlayerInfo(player2, "+"));




/* Further Adventures
 *
 * 1) Add an items property to each player.
 *    items: "a rusty key, a piece of cheese"
 *
 * 2) Write a getPlayerItems function to return
 *    a string for a player's items.
 *
 * 3) Update the getPlayerInfo functions so it
 *    also includes the items info.
 *    Take the items info string into account
 *    when working out the longest string.
 *
 */
```

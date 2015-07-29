# Chapter 07 - Object arguments: functions working with objects


### Passing a function an object as an argument
[jsbin: Listing 7.01](http://jsbin.com/tafopo/edit?js,console)
```javascript
/* Adventures in JavaScript
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
[jsbin: Listing 7.02](http://jsbin.com/qevodu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 7.02
 * A function that adds properties to an object
 */

var sale1;
var calculateTax;
var displaySale;

sale1 = { price: 14, taxRate: 15 };

calculateTax = function (sale) {
	sale.tax = sale.price * sale.taxRate / 100;
	sale.total = sale.price + sale.tax;
};

displaySale = function (sale) {
  console.log("price = $" + sale.price.toFixed(2));
  console.log("tax @ " + sale.taxRate + "% = $" + sale.tax.toFixed(2));
  console.log("total cost = $" + sale.total.toFixed(2));
};

calculateTax(sale1);
displaySale(sale1);



/* Further Adventures
 *
 * 1) Change the taxRate property of the sale1 object
 *    and run the program.
 *
 * 2) Add a second sale object, sale2.
 *
 * 3) Add calls to calculateTax and displaySale
 *    to display sale info for sale2.
 *
 * 4) Can you find a way to combine the calls
 *    to calculateTax and displaySale?
 *
 */
```


###
[jsbin: Listing 7.03]()
```javascript
/* Adventures in JavaScript
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
[jsbin: Listing 7.04](http://jsbin.com/baxuvi/edit?js,console)
```javascript
/* Adventures in JavaScript
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


### Using Math.min and Math.max
[jsbin: Listing 7.05](http://jsbin.com/moyoti/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 7.05
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
 *    three arguments and displays the
 *
 */
```


### Using Math.min and Math.max to constrain an argument
[jsbin: Listing 7.06](http://jsbin.com/qiziyo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 7.06
 * Using Math.min and Math.max to constrain an argument
 */

var Spacer = {
    line: function (lineLength) {
        var line = "========================================";
        lineLength = Math.max(0, lineLength);
        lineLength = Math.min(40, lineLength);
        return line.substr(0, lineLength);
    }
};

console.log(Spacer.line(30));
console.log(Spacer.line(40));
console.log(Spacer.line(50));



/* Further Adventures
 *
 * 1) Test line lengths from -20 to 60
 *    in steps of 10.
 *
 * 2) Add an emptyBox function to the Spacer
 *    object that draws an empty box of specified
 *    width and height 5.
 *
 *    Spacer.emptyBox(12);
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
[jsbin: Listing 7.07](http://jsbin.com/kayono/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 7.07
 * Organizing functions as object properties
 */

var Spacer = {
    line: function (length) {
        var line = "========================================";
        length = Math.max(0, length);
        length = Math.min(40, length);
        return line.substr(0, length);
    },

    title: function (text, pad) {
        return Spacer.line(pad) + " " + text + " " + Spacer.line(pad);
    },

    box: function (text) {
        var boxText = "\n" + Spacer.line(text.length + 4) + "\n";
        boxText += Spacer.title(text, 1) + "\n";
        boxText += Spacer.line(text.length + 4) + "\n";
        return boxText;
    }
};

console.log(Spacer.box("Mercury"));
console.log(Spacer.box("Mars"));



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
[jsbin: Listing 7.08](http://jsbin.com/beqabe/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 7.08
 * Displaying player information using objects
 */

var getPlayerName = function (player) {
    return player.name;
};

var getPlayerHealth = function (player) {
    return player.name + " has health " + player.health;
};

var getPlayerPlace = function (player) {
    return player.name + " is in " + player.place;
};

var Spacer = {
    getLine : function (lineLength, character) {
        lineLength = Math.max(0, lineLength);
        lineLength = Math.min(40, lineLength);

        var line = "****************************************";
        line += "----------------------------------------";
        line += "========================================";
        line += "++++++++++++++++++++++++++++++++++++++++";
        line += "                                        ";

        return line.substr(line.indexOf(character), lineLength);
    },

    wrap : function (text, character, length) {
        var wrapText = character + " " + text;
        wrapText += Spacer.getLine(length - text.length - 3, " ");
        wrapText += character;

        return wrapText;
    },

    box : function (text, character, length) {
        var boxText = "\n";

        boxText += Spacer.getLine(length, character) + "\n";
        boxText += Spacer.wrap(text, character, length) + "\n";
        boxText += Spacer.getLine(length, character) + "\n";

        return boxText;
    }
};

var getPlayerInfo = function (player, character) {
    var playerPlace = getPlayerPlace(player);
    var playerHealth = getPlayerHealth(player);
    var longest = Math.max(playerPlace.length, playerHealth.length) + 4;

    var playerInfo = Spacer.box(getPlayerName(player), character, longest);
    playerInfo += Spacer.wrap(playerPlace, character, longest);
    playerInfo += "\n" + Spacer.wrap(playerHealth, character, longest);
    playerInfo += "\n" + Spacer.getLine(longest, character);
    playerInfo += "\n";

    return playerInfo;
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

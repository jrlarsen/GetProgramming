# Chapter 08 - Arrays: putting data into lists


### Creating arrays
[JS Bin: Listing 8.01](http://jsbin.com/cevodu/edit?js,console) - cevodu
```javascript
/* Get Programming with JavaScript
 * Listing 8.01
 * Creating arrays
 */

var scores;
var names;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

console.log(scores);
console.log(names);



/* Further Adventures
 *
 * 1) Add an extra element to each array.
 *
 * 2) Declare a third variable, akaScores.
 *
 * 3) Assign the scores array to akaScores.
 *    akaScores = scores
 *
 * 4) Log akaScores to the console.
 *
 */
```


### Using existing objects in an array
[JS Bin: Listing 8.02](http://jsbin.com/gizulu/edit?js,console) - gizulu
```javascript
/* Get Programming with JavaScript
 * Listing 8.02
 * Using existing objects in an array
 */

var place1 = { name : "The Pyramids", country : "Egypt" };
var place2 = { name : "The Grand Canyon", country : "USA" };
var place3 = { name : "Bondi Beach", country : "Australia" };

var thisYear = [ place1, place2 ];
var nextYear = [ place3 ];

console.log(thisYear);
console.log(nextYear);



/* Further Adventures
 *
 * 1) Add place1 to the nextYear array.
 *    Can it be in two arrays at once?
 *
 * 2) Run the program again to check if an
 *    object can be in two arrays at once.
 *
 */
```


### Accessing array elements
[JS Bin: Listing 8.03](http://jsbin.com/qemufe/edit?js,console) - qemufe
```javascript
/* Get Programming with JavaScript
 * Listing 8.03
 * Accessing array elements
 */

var scores = [ 3, 1, 8, 2 ];

console.log("There are " + scores.length + " scores:");
console.log("The first score is " + scores[0]); 
console.log("The second score is " + scores[1]);
console.log("The third score is " + scores[2]);
console.log("The fourth score is " + scores[3]);



/* Further Adventures
 *
 * 1) Add a fifth score to the array.
 *
 * 2) Add an extra console.log to display the new score.
 *
 * The index of the last element is one less than
 * the length of the array.
 *
 * 3) Log the value of the last element to the console.
 *    Start the message with "The last score is " and
 *    concatenate the score to the string.
 *    Use an expression involving scores.length
 *    as the index for the last element.
 *
 * 4) Add an extra score to the array and 
 *    run the program again.
 *
 */
```


### Using a variable as an index
[JS Bin: Listing 8.04](http://jsbin.com/veyexa/edit?js,console) - veyexa
```javascript
/* Get Programming with JavaScript
 * Listing 8.04
 * Using a variable as an index
 */

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log( days[dayInWeek] );
console.log( days[dayInWeek - 1] );



/* Further Adventures
 *
 * 1) Change the value of the dayInWeek variable
 *    to display a different day.
 *
 * 2) Write a function that accepts a number for the
 *    day of the week to be displayed and returns
 *    the day as a string. Assign the function to
 *    a getDay variable.
 *
 * 3) Call your function, passing it 4 as the day
 *    of the week, and log the value it returns.
 *
 */
```


### Passing an array to a function
[JS Bin: Listing 8.05](http://jsbin.com/bewebi/edit?js,console) - bewebi
```javascript
/* Get Programming with JavaScript
 * Listing 8.05
 * Passing an array to a function
 */

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);



/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */
```


### Manipulating arrays with push, pop and join
[JS Bin: Listing 8.06](http://jsbin.com/faqabu/edit?js,console) - faqabu
```javascript
/* Get Programming with JavaScript
 * Listing 8.06
 * Manipulating arrays with push, pop and join
 */

var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));



/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */
```


### Iterating over an array with forEach
[JS Bin: Listing 8.07](http://jsbin.com/sokosi/edit?js,console) - sokosi
```javascript
/* Get Programming with JavaScript
 * Listing 8.07
 * Iterating over an array with forEach
 */

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);



/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */
```


### Calling forEach with an inline function
[JS Bin: Listing 8.08](http://jsbin.com/yapecu/edit?js,console) - yapecu
```javascript
/* Get Programming with JavaScript
 * Listing 8.08
 * Calling forEach with an inline function
 */

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

console.log("Dream destinations:");

items.forEach(function (item) {
	console.log(" – " + item);
});



/* Further Adventures
 *
 * 1) Change the program to show the number of
 *    places to visit as well as the places themselves.
 *
 * 2) Wrap the display code in a function
 *    and assign it to the showItems variable.
 *
 * 3) Click after the prompt on the console,
 *    type showItems() and press Enter.
 *    Can you run your function from the console?
 *
 * 4) Add and remove array items via the console
 *    and display the current state of the array
 *    with the showItems function.
 *
 * You can press the up arrow when working at the
 * console prompt to show previous commands used.
 *
 */
```


### Using the arguments passed by forEach
[JS Bin Listing 8.09](http://jsbin.com/suvegi/edit?js,console) - suvegi
```javascript
/* Get Programming with JavaScript
 * Listing 8.09
 * Using the arguments passed by forEach
 */

var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

showArguments = function (item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);


/* Further Adventures
 *
 * 1) Add two more names to the players array.
 *
 * 2) Run the program.
 *
 * 3) Change the first console.log so
 *    it uses wholeArray and index
 *    to display the current item in
 *    the array. Don't use the item
 *    parameter.
 *
 */
```


### Using the arguments passed by forEach - compact
[JS Bin Listing 8.10](http://jsbin.com/pagahe/edit?js,console) - pagahe
```javascript
/* Get Programming with JavaScript
 * Listing 8.10
 * Using the arguments passed by forEach - compact
 */

[ "Dax", "Jahver", "Kandra" ].forEach(function (item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
});



/* Further Adventures
 *
 * 1) Create an array of rectangle objects.
 *    Each rectangle should have a length
 *    property and a width property.
 *
 * 2) Define an assignArea function that
 *    takes a rectangle as an argument and
 *    assigns an area property holding
 *    the area of the rectangle.
 *
 * 3) Define a showInfo function that
 *    takes a rectangle as an argument and
 *    displays its properties on the console.
 *
 * 4) Use forEach and your two functions
 *    to display info about each of
 *    the rectangles in the array.
 *
 */
```


### Finding the total shopping bill
[JS Bin: Listing 8.11](http://jsbin.com/zizixu/edit?js,console) - zizixu
```javascript
/* Get Programming with JavaScript
 * Listing 8.11
 * Finding the total shopping bill
 */

var getTotalBill = function (itemCosts, itemCounts) {
	var total = 0;

	itemCosts.forEach(function (cost, i) {
		total += cost * itemCounts[i];
	});

	return total;
};

var costs = [ 1.99, 4.95, 2.50, 9.87 ];
var numOfEach = [ 2, 1, 5, 2 ];

console.log("The total cost is $" + getTotalBill(costs, numOfEach));



/* Further Adventures
 *
 * 1) Add an extra item to the shopping trip.
 *
 * 2) Change the function so that forEach iterates
 *    over itemCounts instead of itemCosts.
 *    Can you make it work?
 *
 * 3) Create a single array of objects with
 *    cost and numberBought properties.
 *
 *    items = [ { cost: 1.99, numberBought: 2 },
 *              { cost: 4.95, numberBought: 1 } ];
 *
 * 4) Update getTotalBill to accept a single array
 *    of items.
 *
 */
```


### Displaying a multiple choice question
[JS Bin: Listing 8.12](http://jsbin.com/lobahu/edit?js,console) - lobahu
```javascript
/* Get Programming with JavaScript
 * Listing 8.12
 * Displaying a multiple choice question
 */

var displayQuestion = function (questionAndAnswer) {
  var options = [ "A", "B", "C", "D", "E" ];
  
  console.log(questionAndAnswer.question);
  
  questionAndAnswer.answers.forEach(
    function (answer, i) {
      console.log(options[i] + " - " + answer);
    }
  );
};

var question1 = {
  question : "What is the capital of France?",
  answers : [
    "Bordeaux",
    "F",
    "Paris",
    "Brussels"
  ],
  correctAnswer : "Paris"
};

displayQuestion(question1);



/* Further Adventures
 *
 * 1) Add two more question objects.
 *
 * 2) Create an array with your question objects.
 *
 * 3) Use forEach to call displayQuestion on
 *    each of your questions.
 *
 * 4) Can you execute a command at the prompt
 *    to display a particular question?
 */
```


### A player object
[JS Bin: Listing 8.13](http://jsbin.com/mecude/edit?js,console) - mecude
```javascript
/* Get Programming with JavaScript
 * Listing 8.13
 * Displaying player items
 */

// The spacer namespace

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


// Player display code

var getPlayerName = function (player) {
  return player.name;
};

var getPlayerHealth = function (player) {
  return player.name + " has health " + player.health;
};

var getPlayerPlace = function (player) {
  return player.name + " is in " + player.place;
};

var getPlayerItems = function (player) {
  var itemsString = "Items:" + spacer.newLine();

  player.items.forEach(function (item) {
    itemsString += "   - " + item + spacer.newLine();
  });

  return itemsString;
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
  info += "  " + getPlayerItems(player);
  info += spacer.newLine();
  info += spacer.line(longest, character);

  info += spacer.newLine();

  return info;
};

var showPlayerInfo = function (player, character) {
  console.log(getPlayerInfo(player, character));
};


// Create a player

var player1 = {
  name: "Kandra",
  place: "The Dungeon of Doom",
  health: 50,
  items : ["a trusty lamp"]
};

showPlayerInfo(player1, "=");

player1.items.push("a rusty key");

showPlayerInfo(player1, "*");




/* Further Adventures
 *
 * 1) Add and remove items at the prompt
 *    using push and pop. Notice what is displayed
 *    when push and pop are called.
 *
 * 2) Use the index argument for forEach
 *    to number the items displayed. Make
 *    the numbers start at 1.
 *
 * 3) Write a showItem function that accepts
 *    a player and an itemNumber as arguments
 *    and displays the specified player item.
 *
 * 4) Write an addItem function that accepts
 *    a player and an item title as arguments
 *    and adds the item title to the player's
 *    item array.
 *
 */
```

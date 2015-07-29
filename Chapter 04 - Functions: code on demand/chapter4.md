# Functions: code on demand

### Displaying an object’s properties on the console
[jsbin: Listing 4.01](http://jsbin.com/besudi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.01
 * Displaying an object's properties on the console
 */

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */
```

### Displaying information from similar objects
[jsbin: Listing 4.02](http://jsbin.com/gewegi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.02
 * Displaying information from similar objects
 */

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */
```

### Adding tax to find the total cost
[jsbin: Listing 4.03](http://jsbin.com/kawocu/2/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.03
 * Adding tax to find the total cost
 */

var sale1;
var sale2;
var sale3;

sale1 = { price: 14, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };

sale1.tax = sale1.price * sale1.taxRate / 100;
sale2.tax = sale2.price * sale2.taxRate / 100;
sale3.tax = sale3.price * sale3.taxRate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;

console.log("price = $" + sale1.price.toFixed(2));
console.log("tax @ " + sale1.taxRate + "% = $" + sale1.tax.toFixed(2));
console.log("total cost = $" + sale1.total.toFixed(2));

console.log("price = $" + sale2.price.toFixed(2));
console.log("tax @ " + sale2.taxRate + "% = $" + sale2.tax.toFixed(2));
console.log("total cost = $" + sale2.total.toFixed(2));

console.log("price = $" + sale3.price.toFixed(2));
console.log("tax @ " + sale3.taxRate + "% = $" + sale3.tax.toFixed(2));
console.log("total cost = $" + sale3.total.toFixed(2));




/* Further Adventures
 *
 * 1) Add the details for a fouth sale.
 *
 * 2) Log the fourth sale to the console.
 *    Use the same format as the others.
 *
 * 3) Add code to separate out the different
 *    sales on the console.
 *
 * 4) Change the number of decimal places displayed.
 *
 */
```


### A simple function definition and assignment
[jsbin: Listing 4.04](http://jsbin.com/tehixo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.04
 * A simple function definition and assignment
 */

var sayHello;

sayHello = function () {
    console.log("Hello World!");
};

sayHello();



/* Further Adventures
 *
 * 1) Add a second sayHello(); on a new line. Run the program
 *
 * 2) Change the message from the sayHello function
 *
 * 3) Create a sayGoodbye function
 *
 * 4) Make the program say goodbye ten times
 *
 */
```


### Two more function definitions and assignments
[jsbin: Listing 4.05](http://jsbin.com/xezani/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.05
 * Two more function definitions and assignments
 */

var findTotal;
var displayMenu;

var findTotal = function () {
	result = number1 + number2;
};

var displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};



/* Further Adventures
 *
 * How to run a function, also called calling
 * or invoking the function, is explained in
 * Section 4.2.2.
 * If these exercises are too hard, you
 * can always come back to them later.
 *
 * 1) Declare number1, number2 and result variables.
 *
 * 2) Assign values to the variables.
 *
 * 3) Run the findTotal function by writing its name
 *    followed by round brackets: findTotal();
 *
 * 4) Display the result on the console.
 *
 * 5) Run the displayMenu function.
 *
 */
```


### Calling the sayHello function three times
[jsbin: Listing 4.06](http://jsbin.com/vozuxa/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.06
 * Calling the sayHello function three times
 */

var sayHello;

sayHello = function () {
	console.log("Hello World!");
};

sayHello();
sayHello();
sayHello();



/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */
```


### Using the findTotal function to display a calculation
[jsbin: Listing 4.07](http://jsbin.com/hefuwa/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.07
 * Using the findTotal function to display a calculation
 */

var number1 = 1000;
var number2 = 66;
var result;
var findTotal;

findTotal = function () {
	result = number1 + number2;
};

findTotal();

console.log(number1 + " + " + number2 + " = " + result);



/* Further Adventures
 *
 * 1) Change number1 and number2 and run the program
 *
 * 2) Add a third variable, number3, and assign it a value
 *
 * 3) Update the findTotal function to add the three numbers
 *
 * 4) Update the console.log line to show the new calculation
 *
 */
```


### Displaying a menu
[jsbin: Listing 4.08](http://jsbin.com/cujozo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.08
 * Displaying a menu
 */

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

displayMenu();



/* Further Adventures
 *
 * 1) Add two more options to the displayMenu function and run the program
 *
 * 2) Create your own displayMyMenu function
 *
 * 3) Add a line to call your function as well. Run the program
 *
 */
```


### Using a function to display object properties
[jsbin: Listing 4.09](http://jsbin.com/toqopo/2/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.09
 * Using a function to display object properties
 */

var showMovieInfo;

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};



/* Further Adventures
 *
 * 1) Add a call to showMovieInfo and run the program.
 *    What happens?
 *
 * 2) Declare a movie variable
 *    but don't assign it a value.
 *    Run the program. What happens now?
 *
 * 3) Create an empty object and
 *    assign it to the movie variable.
 *    Run the program again.
 *    Does the output change?
 *
 * 4) Add title, actors and directors properties
 *    to the movie object. Run one more time.
 *    Is the output as expected?
 *
 */
```


### Calling the showMovieInfo function
[jsbin: Listing 4.10](http://jsbin.com/menebu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.10
 * Calling the showMovieInfo function
 */

var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};

movie = movie1;

showMovieInfo();



/* Further Adventures
 *
 * 1) Without declaring a movie2 variable,
 *    assign movie2 to the movie variable
 *    instead of movie1.
 *    i.e. movie = movie2;
 *    What happens when you call showMovieInfo?
 *
 * 2) Create an empty object and
 *    assign it to a movie2 variable.
 *    What happens when you call showMovieInfo now?
 *
 * 3) Fill out movie2 with the properties
 *    needed by showMovieInfo.
 *    What happens when you call showMovieInfo now?
 *
 */
```


### Using the same function with multiple objects
[jsbin: Listing 4.11](http://jsbin.com/mavutu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.11
 * Using the same function with multiple objects
 */

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();



/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */
```


### Using functions to add and display tax
[jsbin: Listing 4.12](http://jsbin.com/raqiri/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.12
 * Using functions to add and display tax
 */

var sale1;
var sale2;
var sale3;
var sale;
var calculateTax;
var displaySale;

sale1 = { price: 14, taxRate: 15 };
sale2 = { price: 40, taxRate: 10 };
sale3 = { price: 120, taxRate: 20 };

calculateTax = function () {
	sale.tax = sale.price * sale.taxRate / 100;
	sale.total = sale.price + sale.tax;
};

displaySale = function () { 
  console.log("price = $" + sale.price.toFixed(2));
  console.log("tax @ " + sale.taxRate + "% = $" + sale.tax.toFixed(2));
  console.log("total cost = $" + sale.total.toFixed(2));
};

sale = sale1;
calculateTax();
displaySale();

sale = sale2;
calculateTax();
displaySale();

sale = sale3;
calculateTax();
displaySale();



/* Further Adventures
 *
 * 1) Add a fourth sale object.
 *
 * 2) Update the code so that tax is calculated
 *    and the new sale is displayed.
 *
 * Having two separate functions to calculate tax
 * and display sales is good, each has a specific purpose.
 * Having to call both functions
 * for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't
 *    have to call both functions for every sale?
 *
 */
```


### Updating our display function to add a blank line
[jsbin: Listing 4.13](http://jsbin.com/cijini/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.13
 * Updating our display function to add a blank line
 */

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
    console.log("");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();



/* Further Adventures
 *
 * 1) Create three objects to represent blog posts.
 *
 * 2) Create a function to display
 *    the posts on the console.
 *
 * 3) Can you find your own way of visually
 *    separating the different blog posts
 *    on the console?
 *
 */
```


### A function to display player information
[jsbin: Listing 4.14](http://jsbin.com/mafade/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.14
 * A function to display player information
 */

var player1;
var player2;
var player;
var showPlayerInfo;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */
```

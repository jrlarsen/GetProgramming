# Objects: grouping your data

### Using variables to represent a book
[JS Bin: Listing 3.01](http://jsbin.com/fucuxah/edit?js,console) - fucuxah
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.01
 * Using variables to represent a book
 */

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);



/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */
```


### Using prefixes to tell book variables apart
[JS Bin: Listing 3.02](http://jsbin.com/qowagi/edit?js,console) - qowagi
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.02
 * Using prefixes to tell book variables apart
 */

var book1Title = "The Hobbit";
var book1Authors = "J.R.R.Tolkien";

var book2Title = "Northern Lights";
var book2Authors = "Philip Pullman";

var book3Title = "The Adventures of Tom Sawyer";
var book3Authors = "Mark Twain";

console.log("There are three books so far...");
console.log(book1Title);
console.log(book2Title);
console.log(book3Title);



/* Further Adventures
 *
 * 1) Add a fourth book.
 *
 * 2) Update the messages to include the new book.
 *
 */
```


### A book as an object
[JS Bin: Listing 3.03](http://jsbin.com/ruruko/edit?js,console) - ruruko
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.03
 * A book as an object
 */

var book;

book = {
    title : "The Hobbit",
    author : "J. R. R. Tolkien",
    published : 1937
};

console.log(book);



/* Further Adventures
 *
 * 1) Change the title of book to
 *    "The Hobbit, or There and Back Again".
 *    Run the program again.
 *
 * 2) Try creating a book2 object.
 *
 * 3) Log book2 to the console.
 *
 */
```


### Creating an empty object
[JS Bin: Listing 3.04](http://jsbin.com/kaqatu/edit?js,console) - kaqatu
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.04
 * Creating an empty object
 */

var book;

book = {};



/* Further Adventures
 *
 * 1) Log book to the console.
 *
 * 2) Place your cursor between the curly braces
 *    in the code above and press enter.
 *    jsBin should add an empty line between
 *    the braces. You can add more empty lines.
 *
 * 3) Run the program again, logging book
 *    to the console.
 *    The extra lines should make no difference
 *    to the outcome.
 *
 */
```


### An object with a single property
[JS Bin: Listing 3.05](http://jsbin.com/robupi/edit?js,console) - robupi
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.05
 * An object with a single property
 */

var book = { title : "The Hobbit" };



/* Further Adventures
 *
 * 1) Log book to the console.
 *
 * 2) Create a second book.
 *
 * 3) Log book2 to the console.
 *
 * 4) Run the program.
 *    In the console tab, click after the prompt, >.
 *    Type book and press Enter.
 *    The book object should be displayed.
 *
 */
```


### Using line breaks to aid readability
[JS Bin: Listing 3.06](http://jsbin.com/bafige/edit?js,console) - bafige
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.06
 * Using line breaks to aid readability
 */

var book;

book = {
	title : "The Hobbit"
};



/* Further Adventures
 *
 * 1) Create a second book.
 *
 * 2) Try adding new properties to each book.
 *    If error messages appear, see if you can make
 *    sense of them. Do they help you to
 *    fix the problem?
 *
 */
```


### Objects with multiple properties
[JS Bin: Listing 3.07](http://jsbin.com/bawiqev/edit?js,console) - bawiqev
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.07
 * Objects with multiple properties
 */

var book1;
var book2;

book1 = { title : "The Hobbit" , author : "J. R. R. Tolkien" };

book2 = {
	title : "Northern Lights",
	author : "Philip Pullman"
};



/* Further Adventures
 *
 * 1) Add a third property to each book.
 *    Don't forget the commas.
 *
 * The linear format for book1 is okay for
 * objects with few properties but becomes
 * unwieldy as more properties are added.
 *
 * 2) Add spaces to book2 properties so that
 *    the colons line up.
 *    Do you prefer the objects formatted that way?
 *
 * 3) Reformat book1 so that it has the same
 *    layout as book2.
 *
 */
```


### Using dot notation to access property values
[JS Bin: Listing 3.08](http://jsbin.com/funiyu/edit?js,console) - funiyu
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.08
 * Using dot notation to access property values
 */

var book;

book = {
  title     : "The Hobbit",
	author    : "J. R. R. Tolkien",
	published : 1937
};

console.log(book.title);
console.log(book.author);



/* Further Adventures
 *
 * 1) Log the published property to the console.
 *
 * 2) Add a second book.
 *
 * 3) Log its details to the console.
 *
 * 4) In the console tab, at the prompt,
 *    type in book.title and press Enter.
 *    Once the program is run, object properties
 *    are available interactively via the console.
 *
 */
```


### Concatenating string properties
[JS Bin: Listing 3.09](http://jsbin.com/yoweti/edit?js,console) - yoweti
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.09
 * Concatenating string properties
 */

var book1;
var book2;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};

console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);



/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */
```


### Using dot notation to update a property
[JS Bin: Listing 3.10](http://jsbin.com/mulimi/edit?js,console) - mulimi
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.10
 * Using dot notation to update a property
 */

var player1;

player1 = {
	  name: "Max",
	  attempted: 0,
    correct: 0
};

player1.attempted = 1;
player1.correct = 1;
player1.score = 50;



/* Further Adventures
 *
 * 1) Run the program and then
 *    click after the console prompt.
 *
 * 2) Change the value of the score property
 *    by typing player1.score = 100;
 *    at the prompt and pressing Enter.
 *
 * 3) Update other properties using the console.
 *
 */
```


### Using a property in a calculation
[JS Bin: Listing 3.11](http://jsbin.com/cuboko/edit?js,console) - cuboko
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.11
 * Using a property in a calculation
 */

var player1;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);



/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */
```


### A blog post
[JS Bin: Listing 3.12](http://jsbin.com/jiculu/edit?js,console) - jiculu
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.12
 * A blog post
 */

var post = {
	id : 1,
	title : "My Crazy Space Adventure",
	author : "Philae",
	created : "2015-06-21",
	approved : true,
	body : "You will not believe where I just woke up!! Only on a comet..."
};



/* Further Adventures
 *
 * 1) Display some of the properties.
 *
 * 2) Add a second post.
 *
 * We'd like to be able to display posts only if
 * the approved property is true.
 * Part 2 of Get Programming with JavaScript will
 * investigate choices and conditions.
 *
 */
```


### A calendar event
[JS Bin: Listing 3.13](http://jsbin.com/viroho/edit?js,console) - viroho
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.13
 * A calendar event
 */

var event = {
	title : "Appraisal Meeting",
	startDate : "2016-10-04 16:00:00",
	endDate : "2016-10-04 17:00:00",
	location : "Martha's office",
	importance: 1,
	notes : 'Don\'t forget the portfolio!'
};



/* Further Adventures
 *
 * 1) Remove the backslash from the notes property.
 *
 * 2) Take a look at the errors reported by jsBin.
 *
 * 3) Put the backslash back.
 *
 * 4) See how the location property doesn't need
 *    a backslash. What happens if you add one and
 *    log the location property?
 *
 * 5) What if you want to show a backslash
 *    as part of a string?
 *
 */
```


### Location for a weather app
[JS Bin: Listing 3.14](http://jsbin.com/diguhe/edit?js,console) - diguhe
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.14
 * Location for a weather app
 */

var location = {
  "city"      : "San Francisco",
  "state"     : "CA",
  "country"   : "US",
  "zip"       : "94101",
  "latitude"  : 37.775,
  "longitude" : -122.418,
  "elevation" : 47.000
};



/* Further Adventures
 *
 * 1) Run the program
 *
 * 2) In the console tab, click after the blue arrow.
 *    Type location.city followed by Enter
 *    to show the city property.
 *
 * Hmmmm, something's not right!
 *
 * 3) Type location and press Enter
 *    to display the whole location object.
 *
 * Okay, that's definitely not our location object.
 *
 * This is an example of a variable collision.
 * Browsers (and jsBin) are programs themselves and
 * create their own variables.
 * Other code, not ours, has declared its own
 * location variable, over-writing ours.
 *
 * 4) Change our location variable, now calling
 *    it geolocation.
 *    Repeat steps 1, 2 and 3, using geolocation
 *    instead of location.
 *
 */
```


### A question and answer for a quiz app
[JS Bin: Listing 3.15](http://jsbin.com/damoto/edit?js,console) - damoto
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.15
 * A question and answer for a quiz app
 */

var questionAndAnswer = {
	question: "What is the capital of France?",
	answer1: "Bordeaux",
	answer2: "F",
	answer3: "Paris",
	answer4: "Brussels",
	correctAnswer: "Paris",
	marksForQuestion: 2
};



/* Further Adventures
 *
 * 1) Use console.log to present the question
 *    and answer options in a nicely formatted way.
 *
 */
```


### A player object
[JS Bin: Listing 3.16](http://jsbin.com/qelene/edit?js,console) - qelene
```javascript
/* Get Programmimg with JavaScript
 * Listing 3.16
 * A player object
 */

var player;

player = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of Doom",
    items: "a rusty key, The Sword of Destiny, a piece of cheese"
};

console.log(player.name);
console.log(player.name + " is in " + player.place);
console.log(player.name + " has health " + player.health);
console.log("Items: " + player.items);



/* Further Adventures
 *
 * 1) Create a second player.
 *
 * 2) Log their details to the console.
 *
 * Notice how storing the items as a string
 * isn't a great approach. If the player
 * drops an item we'll have to manipulate
 * the string to remove the item.
 *
 * JavaScript has a way of storing lists
 * of items called an array. See Chapter 8.
 *
 */
 ```

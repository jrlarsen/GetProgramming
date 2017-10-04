# Using New JavaScript Features

I'm going to start adding examples that mirror those in the book but that use some of the recent additions to the language.

* string template literals
* let and const
* default arguments
* spread and rest
* arrow functions
* the class keyword
* modules

## Chapter 2

### Declaring and assigning a variable with let
[JS Bin: Listing 2.10](http://jsbin.com/lebisup/edit?js,console) - lebisup
```javascript
/* Get Programming with JavaScript
 * Listing 2.10
 * Declaring and assigning a variable with let
 */


// declare the variable
let score;

// assign it a value
score = 100;

console.log(score);

// assign a new value
score = score + 50;

console.log(score);



/* Further Adventures
 *
 * 1) Assign a new value to the score variable.
 *
 * 2) Log the new value to the console.
 *
 * 3) Declare two more variables using let,
 *    and assign them values.
 *
 */
```

### Declaring and assigning a constant with const
[JS Bin: Listing 2.11](http://jsbin.com/tosixe/edit?js,console) - tosixe
```javascript
/* Get Programming with JavaScript
 * Listing 2.11
 * Declaring and assigning a constant with const
 */


// declare a variable that may change
let playerLocation = "The Dungeon";

// declare a variable that won't change
const playerName = "Kandra";

console.log(playerName + " is in " + playerLocation);

// assign a new value
playerLocation = "The Old Library";

console.log(playerName + " is in " + playerLocation);



/* Further Adventures
 *
 * 1) Try assigning a new value to playerName.
 *
 * Variables declared with const must be assigned
 * a value when they are declared. They cannot
 * have a new value assigned to them later.
 *
 * 2) Try separating the declaration of playerName
 *    from its first assignment.
 *
 *    const playerName;
 *    playerName = "Kandra";
 *
 */
```

### Using template literals when logging variables
[JS Bin: Listing 2.12](http://jsbin.com/yenuxuh/edit?js,console) - yenuxuh
```javascript
/* Get Programming with JavaScript
 * Listing 2.12
 * Using template literals when logging variables
 */


let playerLocation = "The Dungeon";
const playerName = "Kandra";

// use backticks and placeholders to display values
console.log(`${playerName} is in ${playerLocation}`);

playerLocation = "The Old Library";

console.log(`${playerName} is in ${playerLocation}`);



/* Further Adventures
 *
 * Place text between backticks to create a
 * template literal.
 *
 * 1) Change the location again and display the updated
 *    player info.
 *
 * Variable values can be included in the template
 * by using a placeholder:
 *
 * `${variableName}`
 *
 * The value of the variable will replace the placeholder.
 *
 * 2) Create a new variable (using let or const).
 *
 * 3) Display the variable's value by using a template.
 *
 */
```

## Chapter 3

### Using dot notation in templates
[JS Bin: Listing 3.17](http://jsbin.com/sedehut/edit?js,console) - sedehut
```javascript
/* Get Programming with JavaScript
 * Listing 3.17
 * Using dot notation in templates
 */


const book = {
  title     : "The Hobbit",
	author    : "J. R. R. Tolkien",
	published : 1937
};

console.log(`${book.title} by ${book.author}`);



/* Further Adventures
 *
 * 1) Use a placeholder to include the published
 *    property in the template string.
 *
 * 2) Add a second book.
 *
 * 3) Log its details to the console using a template.
 *
 * The book variable is declared as a constant.
 *
 * 4) Try to update one of the properties.
 *    Does the program still work?
 *
 *    book.published = 1938;
 *
 */
```

### Assigning properties to variables
[JS Bin: Listing 3.18](http://jsbin.com/jefeyid/edit?js,console) - jefeyid
```javascript
/* Get Programming with JavaScript
 * Listing 3.18
 * Assigning properties to variables
 */


const book = {
  title     : "The Hobbit",
	author    : "J. R. R. Tolkien",
	published : 1937
};

// declare two variables whose names match
// properties of the object.
// assign the matching values to the variables

const { title, author } = book;

console.log(`${title} by ${author}`);



/* Further Adventures
 *
 * Using curly braces on the left of an assignment,
 *
 * { name1, name2 } = myObject;
 *
 * assigns property values of the object on the right
 * to variables with matching names.
 *
 * The process is called object destructuring
 *
 * 1) Assign the published property to a matching variable.
 *
 * 2) Include the new variable in the template.
 *
 * The destructured variables are declared as constants.
 *
 * 4) Add a second book and try the destructuring
 *    process again.
 *
 */
```


### Assigning variables to matching properties
[JS Bin: Listing 3.19](http://jsbin.com/rivufo/edit?js,console) - rivufo
```javascript
/* Get Programming with JavaScript
 * Listing 3.19
 * Assigning variables to matching properties
 */

const author = "Mark Twain";
const title = "The Adventures of Tom Sawyer";

const book = {
  author,
  title
};

console.log(book);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * The book object is displayed on the console.
 *
 * When a variable name matches a property name
 * you want to assign, you can use the shorthand
 * shown in the listing above.
 *
 * 2) Change the program to use the longer syntax.
 *
 * e.g. for just the author property:
 *
 * const book = {
 *   author: author
 * };
 *
 * Does it still work?
 *
 * 3) Add a third variable and matching property
 *    using the shorthand.
 * 
 */
```

### Updating objects assigned to constants
[JS Bin: Listing 3.20](http://jsbin.com/labidah/edit?js,console) - labidah
```javascript
/* Get Programming with JavaScript
 * Listing 3.20
 * Updating objects assigned to constants
 */

const player1 = {
	  name: "Max",
	  attempted: 0,
    correct: 0
};

player1.attempted = 1;
player1.correct = 1;
player1.score = 50;

const playerInfo = `
 * ${player1.name}
 * has score
 * ${player1.score}
`;

console.log(playerInfo);



/* Further Adventures
 *
 * 1) Add more lines to the program to
 *    update the name and score.
 *
 * 2) Log the updated player info to the console.
 *
 * You can only assign a value once to a variable
 * declared with const. However, if you assign an
 * object to the variable, you can update the
 * variable's properties.
 *
 * 3) At the end of the program,
 *    try assigning a new object to player1:
 *
 *    player1 = { name: "Kandra" };
 *
 * 4) Play with the playerInfo template to make
 *    the info logged more interesting.
 *
 * Template strings can span multiple lines.
 *
 */
```

## Chapter 4

### Using fat arrow notation
[JS Bin: Listing 4.15](http://jsbin.com/bolefid/edit?js,console) - bolefid
```javascript
/* Get Programming with JavaScript
 * Listing 4.15
 * Using fat arrow notation
 */

const sayHello = () => {
	console.log("Hello World!");
};

sayHello();
sayHello();
sayHello();



/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * Enclose the message in backticks to spread it
 * across multiple lines.
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page.
 *
 */
```

### Displaying a menu using a template string
[JS Bin: Listing 4.16](http://jsbin.com/leqofu/edit?js,console) - leqofu
```javascript
/* Get Programming with JavaScript
 * Listing 4.16
 * Displaying a menu using a template string
 */

const displayMenu = () => {
    console.log(`
Please choose an option:
(1) Print log
(2) Upload file
(9) Quit
` );
};

displayMenu();



/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */
```

### A function to display player information
[JS Bin: Listing 4.17](http://jsbin.com/tosofap/edit?js,console) - tosofap
```javascript
/* Get Programming with JavaScript
 * Listing 4.17
 * A function to display player information
 */

let player;

const player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

const player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

const showPlayerInfo = () => {
    const { name, place, health } = player;
    console.log(`
${name}
------------------------------
${name} is in ${place}
${name} has health ${health}
------------------------------
`   );
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


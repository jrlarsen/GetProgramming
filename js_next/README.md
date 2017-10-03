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
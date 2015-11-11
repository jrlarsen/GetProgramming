# Variables

### Declaring a variable
[jsbin: Listing 2.01](http://jsbin.com/kugubobevo/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.01
 * Declaring a variable
 */

var score;



/* Further Adventures
 *
 * 1) Delete the semicolon at after the word score.
 *    jsBin should complain and show an error message.
 *    Take a look at the message.
 *
 * 2) Add the semicolon back after the word score.
 *    The semicolon shows the end of the statement.
 *
 * 3) Declare two more variables.
 *
 */
```


### Assigning a value to a variable
[jsbin: Listing 2.02](http://jsbin.com/yuvoju/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.02
 * Assigning a value to a variable
 */

var score;
score = 100;



/* Further Adventures
 *
 * 1) Click Run on the jsBin Console tab.
 *    Nothing will be displayed on the console
 *    but the program will have run,
 *    creating the score variable.
 *
 * 2) Click in the console, just to the right of the blue prompt >
 *    The console should be highlighted and
 *    a cursor should be blinking next to the prompt.
 *
 * 3) Type the word score to match your variable name
 *    and press enter.
 *    100, the value assigned to score, should be displayed.
 *
 * 4) Change the value of score in the code above.
 *    Repeat steps 1, 2 and 3.
 *
 */
```


### Using a variable
[jsbin: Listing 2.03](http://jsbin.com/huvime/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.03
 * Using a variable
 */

var score;
score = 100;
console.log(score);



/* Further Adventures
 *
 * 1) Change the value assigned to score.
 *    Run the program again.
 *
 * 2) Declare a second variable, maybe score2.
 *
 * 3) Assign your variable a value.
 *
 * 4) Use console.log to display your variable on the console.
 *
 */
```


### Variables vary
[jsbin: Listing 2.04](http://jsbin.com/jasafa/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.04
 * Variables vary
 */

var score;
score = 100;
console.log(score);

score = 150;
console.log(score);



/* Further Adventures
 *
 * 1) Change the value assigned to score.
 *    Run the program again.
 *
 * 2) Declare a second variable, maybe score2.
 *
 * 3) Assign your variable a value.
 *
 * 4) Use console.log to display your variable on the console.
 *
 * 5) Can you display the sum
 *    of the two variables?
 *
 */
```


### Assigning text to variables
[jsbin: Listing 2.05](http://jsbin.com/hobiqo/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.05
 * Assigning text to variables
 */

var message;

message = "Hello World!";
console.log(message);

message = 'Congratulations! Your tweet has won a prize...';
console.log(message);



/* Further Adventures
 *
 * 1) Assign message a third value. Display it on the console.
 *
 * Pieces of text can be joined together using the + symbol.
 * e.g. "Hello " + "World!"
 *
 * 2) Split the first message into two pieces,
 *    joined by + and run the program.
 *
 * 3) Split the second message into three pieces,
 *    joined by + and run the program.
 *    Be careful to use matching speech marks.
 *
 */
```


### Declaring and assigning in two steps
[jsbin: Listing 2.06](http://jsbin.com/vegoja/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.06
 * Declaring and assigning in two steps
 */

var playerName;
var locationName;

playerName = "Kandra";
locationName = "The Dungeon of Doom";

console.log(playerName + " is in " + locationName);



/* Further Adventures
 *
 * 1) Declare a score variable.
 *
 * 2) Assign it a value.
 *
 * 3) Display an extra message on the console,
 *    by combining variables and strings, to say
 *    something like "Kandra has a score of 100"
 *
 */
```


### Declaring and assigning in one step
[jsbin: Listing 2.07](http://jsbin.com/dorane/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.07
 * Declaring and assigning in one step
 */

var playerName = "Kandra";
var locationName = "The Dungeon of Doom";

console.log(playerName + " is in " + locationName);



/* Further Adventures
 *
 * 1) Declare a health variable and assign it
 *    a value in one step.
 *
 * 2) Declare a message variable.
 *
 * 3) Assign message a value created by joining
 *    variables and text to say something like
 *    "Kandra has health 50 and is in The Dungeon of Doom"
 *
 * 4) Replace the current console.log statement
 *    with a new one to display the message variable.
 *
 */
```


### Using a variable’s current value to set its new value
[jsbin: Listing 2.08](http://jsbin.com/kijuce/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.08
 * Using a variable’s current value to set its new value
 */

var score;
score = 100;
console.log("Your score was " + score);

console.log("Great splat!!!");
score = score + 50;
console.log("New score: " + score);

console.log("Way to go!");



/* Further Adventures
 *
 * The player splats a kumquat.
 * Add code to:
 *
 * 1) Tell the player of a successful splat
 *
 * 2) Add 100 to the player's score
 *
 * 3) Show the new score
 *
 * 4) Display a message of congratulations
 *
 */
```


### Valid and invalid variable names
[jsbin: Listing 2.09](http://jsbin.com/biqawu/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 2.09
 * Valid and invalid variable names
 */

var thisIsFine;
var $noProblemHere;
var _underscore56;
var StartWithCapital;
var z5;

var 999;
var 39Steps;
var &nope;
var single words only;
var yield;



/* Further Adventures
 *
 * 1) Take a look at the errors in the
 *    error section of jsBin below.
 *
 * 2) Click Run in the console
 *    and see what errors appear there.
 *
 * 3) Delete the second block of variables
 *    one by one from the code.
 *    See how the errors change.
 *
 */
 ```

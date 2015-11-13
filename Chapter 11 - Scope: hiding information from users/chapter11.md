# Chapter 11 - Scope: hiding information from users


### Declare, assign and use a variable
[JS Bin Listing 11.01](http://jsbin.com/gujacum/edit?js,console) - gujacum
```javascript
/* Get Programming with JavaScript
 * Listing 11.01
 * Declare, assign and use a variable
 */

var mountain;

mountain = "Ben Nevis";

console.log(mountain);


/* Further Adventures
 *
 * Run the program, then at the console prompt:
 *
 * 1) Type mountain and press enter.
 *
 * The value assigned to the mountain variable
 * should be displayed.
 *
 * mountain is a global variable.
 * It can be accessed anywhere in the program.
 *
 * 2) Assign the mountain variable a new value.
 *    e.g. mountain = "Everest"
 *
 * 3) Type mountain and press enter.
 *
 */
 ```


### Accessing a variable from within a function
[JS Bin Listing 11.02](http://jsbin.com/zojida/edit?js,console) - zojida
```javascript
/* Get Programming with JavaScript
 * Listing 11.02
 * Accessing a variable from within a function
 */

var mountain = "Ben Nevis";

var showMountain = function () {
    console.log(mountain);
};

showMountain();



/* Further Adventures
 *
 * The mountain and showMountain variables are
 * accessible anywhere in the program.
 *
 * 1) At the console prompt,
 *    type 'showMountain' and press enter.
 *
 * The function definition is displayed.
 * (JS Bin may have changed it to use its
 * own log function)
 *
 * 2) Type 'showMountain()' and press enter.
 *
 * "Ben Nevis" is displayed, followed by the
 * return value of the function, undefined.
 *
 * 3) Change the definition of the showMountain
 *    function to return the value of
 *    the mountain variable.
 *    i.e. return mountain;
 *
 * 4) Run the program and clear the console.
 *
 * 5) Type 'showMountain()' and press enter.
 *
 */
```


### A nano-quiz
[JS Bin Listing 11.03](http:/nubipi/jsbin.com//edit?js,console) - nubipi
```javascript
/* Get Programming with JavaScript
 * Listing 11.03
 * A nano-quiz
 */

var question = "What is the highest mountain in Wales?";
var answer = "Snowdon";

console.log(question);



/* Further Adventures
 *
 * 1) At the prompt,
 *    type 'answer' and press enter.
 *
 * 2) Assign answer a new value.
 *
 * Both question and answer are accessible
 * anywhere in the program, including inside functions.
 *
 * 3) Define a showQandA function to display
 *    the question and answer.
 *
 * 4) Run the program.
 *
 * 5) Call the showQandA function at the console prompt.
 *
 */
```


### A variable hidden from the console
[JS Bin Listing 11.04](http:/bobilu/jsbin.com//edit?js,console) - bobilu
```javascript
/* Get Programming with JavaScript
 * Listing 11.04
 * A variable hidden from the console
 */

var hide = function () {
    var mountain = "Devils Tower";
};

console.log(mountain);



/* Further Adventures
 *
 * The program causes an error because it tries
 * to access the mountain variable outside of the
 * function in which it is declared.
 *
 * Does running the hide function help?
 *
 * 1) At the prompt, call the hide function.
 *    i.e. type 'hide()' and press enter.
 *
 * The return value of the hide function is displayed.
 * As no return value was specified in the definition,
 * the hide function returns 'undefined'.
 *
 * 2) Type 'mountain' and press enter.
 *
 * The mountain variable is only accessible to code
 * within the hide function.
 *
 * 3) Return the value of mountain from the hide function.
 *
 * 4) At the prompt, call the hide function.
 *
 * When the hide function is called, "Devils Tower" is
 * displayed on the console. The console displays
 * the return value of functions called.
 *
 */
```


### The variable is visible within the function
[JS Bin Listing 11.05](http:/raluqu/jsbin.com//edit?js,console) - raluqu
```javascript
/* Get Programming with JavaScript
 * Listing 11.05
 * The variable is visible within the function
 */

var show = function () {
    var mountain = "Devils Tower";
    console.log(mountain);
};

show();


/* Further Adventures
 *
 * 1) Declare another variable called mountain,
 *    outside of the function, at the end
 *    of the program.
 *    e.g. var mountain = "Everest";
 *
 * 2) Run the program.
 *
 * 3) At the prompt, type 'mountain' and press enter.
 *
 * Within the show function, the local version
 * of mountain is used.
 *
 * Outside the show function, the global version
 * of mountain is used.
 *
 */
```


### Global and local variables
[JS Bin Listing 11.06](http:/riconi/jsbin.com//edit?js,console) - riconi
```javascript
/* Get Programming with JavaScript
 * Listing 11.06
 * Global and local variables
 */

var mountain;
var show;

mountain = "Ben Nevis";

show = function () {
    var secretMountain = "Devils Tower";

    console.log(mountain);
    console.log(secretMountain);
};

show();

console.log(mountain);
console.log(secretMountain);                                           



/* Further Adventures
 *
 * 1) At the prompt, assign mountain a new value.
 *
 * 2) Call show at the prompt.
 *
 */
```


### A counter
[JS Bin Listing 11.07](http:/yagese/jsbin.com//edit?js,console) - yagese
```javascript
/* Get Programming with JavaScript
 * Listing 11.07
 * A counter
 */

var counter = 0;

var count = function () {
  counter = counter + 1;
  return counter;
};



/* Further Adventures
 *
 * 1) Type the following commands at the prompt:
 *
 *    > count()
 *    > count()
 *    > count()
 *
 * The current value of counter is displayed on the
 * console for each call to count.
 *
 * 2) Type the following commands at the prompt:
 *
 *    > counter = 99
 *    > count()
 *    > count()
 *
 * Because counter is a global variable, you can
 * change it at the console.
 *
 */
```


### 
[JS Bin Listing 11.08](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.09](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.10](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.11](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.12](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.13](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.14](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.15](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.16](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.17](http://jsbin.com//edit?js,console) - 
```javascript

```


### 
[JS Bin Listing 11.18](http://jsbin.com//edit?js,console) - 
```javascript

```

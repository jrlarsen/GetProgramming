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
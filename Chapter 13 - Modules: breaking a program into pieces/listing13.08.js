/* Get Programming with JavaScript
 * Listing 13.08
 * An immediately invoked function expression
 */

var callMeNow = (function () {
    console.log("Wow, you’re a quick mover!");
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The function is defined and
 * immediately executed, logging its
 * message to the console.
 *
 * The function can't be called again
 * as it hasn't been assigned to
 * a variable.
 *
 * 2) Assign the expression to
 *    a variable.
 *
 * var callMeNow = (function () {
 *   console.log("Wow, you're a quick mover!");
 * })();
 *
 * 3) Run the program.
 *
 * 4) At the prompt, type callMeNow
 *    and press Enter.
 *
 * callMeNow has the value 'undefined'.
 * It was not assigned the function.
 * It was assigned the return value
 * of the function. The function does
 * not return a value, so callMeNow
 * was assigned 'undefined'.
 *
 */
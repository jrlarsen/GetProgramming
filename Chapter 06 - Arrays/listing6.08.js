/* Adventures in JavaScript
 * Listing 6.08
 * Calling forEach with an inline function
 */

var items = [ "a rusty key", "a piece of cheese", "the sword of doom" ];

console.log("Items currently held:");

items.forEach(function (item) {
    console.log(" – " + item);
});



/* Further Adventures
 *
 * 1) Change the program to show the number of
 *    items currently held as well as the items themselves.
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
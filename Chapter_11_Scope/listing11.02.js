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
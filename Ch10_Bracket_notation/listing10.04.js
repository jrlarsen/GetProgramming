/* Get Programming with JavaScript
 * Listing 10.04
 * Using Object.keys
 */

var ages = {
    "Kandra Smith" : 56,
    "Dax Aniaku"   : 210,
    "Blinky"       : 36
};

var keys = Object.keys(ages);

console.log(keys);



/* Further Adventures
 *
 * 1) Add a couple more key-value pairs
 *    to the ages object.
 *
 * 2) Add another property to the ages object
 *    using square bracket notation.
 *    Add the code before the call to
 *    Object.keys, so the new key will
 *    be logged to the console.
 *
 * 3) At the console prompt,
 *    access individual elements of the
 *    keys array by using index notation.
 *    e.g. > keys[2];
 *
 */
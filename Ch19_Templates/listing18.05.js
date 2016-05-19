/* Get Programming with JavaScript
 * Listing 18.05
 * Using a while loop with replace
 */

var before = "Kandra. Kandra has health 50. Kandra is in The Dungeon.";
var oldName = "a";
var newName = "A";
var after = before;

while (after.indexOf(oldName) !== -1) {
    after = after.replace(oldName, newName);
    console.log(after);
}



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Change the program so that it
 *    replaces all occurrences of
 *    "a" with "A".
 *
 * 3) Write a function called swap
 *    that replaces all occurrences
 *    of one string with another.
 *
 *    swap(mainString, replaceThis, withThis) 
 *
 */
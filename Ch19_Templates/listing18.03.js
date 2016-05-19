/* Get Programming with JavaScript
 * Listing 18.03
 * Calling replace three times
 */

var before = "Kandra. Kandra has health 50. Kandra is in The Dungeon.";
var oldName = "Kandra";
var newName = "Jahver";
var after;

after = before.replace(oldName, newName);
console.log(after); 

after = after.replace(oldName, newName);
console.log(after);

after = after.replace(oldName, newName);
console.log(after);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Write a program that uses the
 *    replace method to swap the
 *    string "Dax and Kandra" to
 *    "Kandra and Dax" one word at
 *    a time.
 *
 * 3) Write a function that does
 *    the work of task 2.
 *    i.e. it takes a string and
 *    swaps the position of two
 *    words within the string.
 *
 *    swap("Dax and Kandra", "Dax", "Kandra")
 *    gives "Kandra and Dax"
 *
 */
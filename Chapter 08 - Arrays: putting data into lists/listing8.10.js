/* Get Programming with JavaScript
 * Listing 8.10
 * Using the arguments passed by forEach - compact
 */

[ "Dax", "Jahver", "Kandra" ].forEach(function (item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
  wholeArray.shift();
});



/* Further Adventures
 *
 * 1) Add two more names to the players array.
 *
 * 2) Run the program.
 *
 * We can remove the first element in
 * an array with the shift method.
 *
 * 3) After the calls to console.log
 *    in the function passed to
 *    forEach, add a statement to
 *    remove the first item in
 *    the array.
 *
 *    wholeArray.shift();
 *
 * 4) Run the program.
 *
 * Is the output what you expected?
 *
 * It's best not to add or remove
 * elements in an array while
 * iterating over it. At least be
 * very careful!
 *
 */
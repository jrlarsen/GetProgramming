/* Get Programming with JavaScript
 * Listing 18.02
 * Chaining calls to replace
 */

var before = "Hello to Jason";

var after = before
              .replace("Hello", "Hi")
              .replace("Jason", "Stephen");

console.log(before);
console.log(after);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Change the string assigned to
 *    the before variable to
 *    "wassup wassup wassup"
 *
 * 3) Call replace three times to
 *    replace each wassup and
 *    set after equal to
 *    "First second third"
 *
 *    e.g. before.replace("wassup", "First")
 *    returns "Firts wassup wassup"
 *    the first time it is called.
 *
 */
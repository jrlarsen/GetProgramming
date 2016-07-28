/* Get Programming with JavaScript
 * Listing 19.02
 * Replacing one string with another
 */

var before = "<h3>{{title}}</h3>";

var after = before.replace("{{title}}", "Fitness App v1.0 Live!");

console.log(before);
console.log(after);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Declare a title variable and assign it
 *    a value;
 *
 * 3) Use before.replace to replace the {{title}}
 *    placeholder with the value of the title
 *    variable, rather than with a string literal.
 *
 * 4) Include a second placeholder in the
 *    original string.
 *
 * 5) Use the replace method to fill both your
 *    placeholder and {{title}} with a value.
 *
 */

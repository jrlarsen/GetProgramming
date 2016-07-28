/* Get Programming with JavaScript
 * Listing 19.03
 * Chaining calls to replace
 */

var data = {
  author : "Oskar",
  social : "@appOskar51"
};

var before = "Follow {{author}} {{social}}";

var after = before
                .replace("{{author}}", data.author)
                .replace("{{social}}", data.social);

console.log(before);
console.log(after);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Replace the author property in the data
 *    with two new properties: firstName
 *    and lastName.
 *
 * 3) Update the placeholders in the before
 *    string to use the new properties.
 *
 * 4) Update the calls to the replace method
 *    so all three placeholders are filled
 *    with data.
 *
 */

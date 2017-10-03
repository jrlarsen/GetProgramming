/* Get Programming with JavaScript
 * Listing 3.19
 * Assigning variables to matching properties
 */

const author = "Mark Twain";
const title = "The Adventures of Tom Sawyer";

const book = {
    author,
    title
};

console.log(book);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * The book object is displayed on the console.
 *
 * When a variable name matches a property name
 * you want to assign, you can use the shorthand
 * shown in the listing above.
 *
 * 2) Change the program to use the longer syntax.
 *
 * e.g. for just the author property:
 *
 * const book = {
 *   author: author
 * };
 *
 * Does it still work?
 *
 * 3) Add a third variable and matching property
 *    using the shorthand.
 *
 */
/* Get Programming with JavaScript
 * Listing 3.17
 * Using dot notation in templates
 */


const book = {
    title     : "The Hobbit",
    author    : "J. R. R. Tolkien",
    published : 1937
};

console.log(`${book.title} by ${book.author}`);



/* Further Adventures
 *
 * 1) Use a placeholder to include the published
 *    property in the template string.
 *
 * 2) Add a second book.
 *
 * 3) Log its details to the console using a template.
 *
 * The book variable is declared as a constant.
 *
 * 4) Try to update one of the properties.
 *    Does the program still work?
 *
 *    book.published = 1938;
 *
 */
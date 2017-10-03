/* Get Programming with JavaScript
 * Listing 3.18
 * Assigning properties to variables
 */


const book = {
    title     : "The Hobbit",
    author    : "J. R. R. Tolkien",
    published : 1937
};

// declare two variables whose names match
// properties of the object.
// assign the matching values to the variables

const { title, author } = book;

console.log(`${title} by ${author}`);



/* Further Adventures
 *
 * Using curly braces on the left of an assignment,
 *
 * { name1, name2 } = myObject;
 *
 * assigns property values of the object on the right
 * to variables with matching names.
 *
 * The process is called object destructuring
 *
 * 1) Assign the published property to a matching variable.
 *
 * 2) Include the new variable in the template.
 *
 * The destructured variables are declared as constants.
 *
 * 4) Add a second book and try the destructuring
 *    process again.
 *
 */
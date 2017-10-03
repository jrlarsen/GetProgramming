/* Get Programming with JavaScript
 * Listing 2.12
 * Using template literals when logging variables
 */


let playerLocation = "The Dungeon";
const playerName = "Kandra";

// use backticks and placeholders to display values
console.log(`${playerName} is in ${playerLocation}`);

playerLocation = "The Old Library";

console.log(`${playerName} is in ${playerLocation}`);



/* Further Adventures
 *
 * Place text between backticks to create a
 * template literal.
 *
 * 1) Change the location again and display the updated
 *    player info.
 *
 * Variable values can be included in the template
 * by using a placeholder:
 *
 * `${variableName}`
 *
 * The value of the variable will replace the placeholder.
 *
 * 2) Create a new variable (using let or const).
 *
 * 3) Display the variable's value by using a template.
 *
 */
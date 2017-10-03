/* Get Programming with JavaScript
 * Listing 2.11
 * Declaring and assigning a constant with const
 */


// declare a variable that may change
let playerLocation = "The Dungeon";

// declare a variable that won't change
const playerName = "Kandra";

console.log(playerName + " is in " + playerLocation);

// assign a new value
playerLocation = "The Old Library";

console.log(playerName + " is in " + playerLocation);



/* Further Adventures
 *
 * 1) Try assigning a new value to playerName.
 *
 * Variables declared with const must be assigned
 * a value when they are declared. They cannot
 * have a new value assigned to them later.
 *
 * 2) Try separating the declaration of playerName
 *    from its first assignment.
 *
 *    const playerName;
 *    playerName = "Kandra";
 *
 */
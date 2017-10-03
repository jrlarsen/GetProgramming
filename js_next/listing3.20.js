/* Get Programming with JavaScript
 * Listing 3.20
 * Updating objects assigned to constants
 */

const player1 = {
    name: "Max",
    attempted: 0,
    correct: 0
};

player1.attempted = 1;
player1.correct = 1;
player1.score = 50;

const playerInfo = `
 * ${player1.name}
 * has score
 * ${player1.score}
`;

console.log(playerInfo);



/* Further Adventures
 *
 * 1) Add more lines to the program to
 *    update the name and score.
 *
 * 2) Log the updated player info to the console.
 *
 * You can only assign a value once to a variable
 * declared with const. However, if you assign an
 * object to the variable, you can update the
 * variable's properties.
 *
 * 3) At the end of the program,
 *    try assigning a new object to player1:
 *
 *    player1 = { name: "Kandra" };
 *
 * 4) Play with the playerInfo template to make
 *    the info logged more interesting.
 *
 * Template strings can span multiple lines.
 *
 */
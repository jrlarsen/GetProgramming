/* Get Programming with JavaScript
 * Listing 4.17
 * A function to display player information
 */

let player;

const player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

const player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

const showPlayerInfo = () => {
    const { name, place, health } = player;
    console.log(`
${name}
------------------------------
${name} is in ${place}
${name} has health ${health}
------------------------------
`   );
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */
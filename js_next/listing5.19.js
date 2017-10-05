/* Get Programming with JavaScript
 * Listing 5.18
 * Displaying a player's information using properties
 */

const getPlayerName = playerName => playerName;
const getPlayerHealth = (playerName, playerHealth) => `${playerName} has health ${playerHealth}`;
const getPlayerPlace = (playerName, playerPlace) => `${playerName} is in ${playerPlace}`;

var showPlayerInfo = (playerName, playerPlace, playerHealth) => {
    const name = getPlayerName(playerName);
    const place = getPlayerPlace(playerName, playerPlace);
    const health = getPlayerHealth(playerName, playerHealth);

    console.log(`
${name}
----------------------------
${place}
${health}
----------------------------
`   );
};

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

showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);




/* Further Adventures
 *
 * 1) Define a showLine function with a parameter
 *    for the length of line.
 *    e.g. showLine(5) should output
 *    -----
 *    showLine(20) should output
 *    --------------------
 *
 *    Hints:
 *    a) In the function body declare a line variable
 *       and assign it a long string of dashes.
 *    b) Use the substring function to grab
 *       a line of the correct length.
 *       line.substring(0, 10) would have length 10.
 *
 * 2) Use your showLine function to display the
 *    player's name in a box.
 *    ----------
 *    - Kandra -
 *    __________
 *
 * 3) Update your showLine function to use
 *    asterisks rather than dashes.
 *    **********
 *    * Kandra *
 *    **********
 *
 */
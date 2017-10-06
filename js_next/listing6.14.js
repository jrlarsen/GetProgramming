/* Get Programming with JavaScript
 * Listing 6.14
 * Displaying player information using objects
 */

const getPlayerName = pName => pName;

const getPlayerHealth = (pName, pHealth) => `${pName} has health ${pHealth}`;

const getPlayerPlace = (pName, pPlace) =>`${pName} is in ${pPlace}`;

const getBorder = () => "================================";

const getPlayerInfo = (playerName, playerPlace, playerHealth) => {
    return `
${getPlayerName(playerName)}
${getBorder()}
${getPlayerPlace(playerName, playerPlace)}
${getPlayerHealth(playerName, playerHealth)}
${getBorder()}
`;
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

console.log(getPlayerInfo(player1.name, player1.place, player1.health));
console.log(getPlayerInfo(player2.name, player2.place, player2.health));



/* Further Adventures
 *
 * 1) Add an items property to both players.
 *    e.g. items: "a rusty key, a piece of cheese"
 *
 * 2) Create a getPlayerItems function to return
 *    a sensible string including the items.
 *
 * 3) Update the getPlayerInfo function to
 *    include a call to getPlayerItems.
 *
 * 4) Change the two calls to getPlayerInfo
 *    so they also pass the items property
 *    as an argument.
 *
 */
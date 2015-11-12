/* Get Programming with JavaScript
 * Listing 8.13
 * A player object
 */

var showPlayerInfo = function (player) {
    console.log("**********************");
    console.log(player.name + ":");
    console.log(" - Health: " + player.health);
    console.log(" – Items:");
    
    player.items.forEach(function (item) {
        console.log("   - " + item);
    });

    console.log("**********************");
};

var player1 = {
    name : "Kandra",
    health : 50,
    items : ["a trusty lamp"]
};

showPlayerInfo(player1);

player1.items.push("a rusty key");

showPlayerInfo(player1);



/* Further Adventures
 *
 * 1) Add and remove items at the prompt
 *    using push and pop. Notice what is displayed
 *    when push and pop are called.
 *
 * 2) Use the index argument for forEach
 *    to number the items displayed. Make
 *    the numbers start at 1.
 *
 * 3) Write a showItem function that accepts
 *    a player and an itemNumber as arguments
 *    and displays the specified player item.
 *
 * 4) Write an addItem function that accepts
 *    a player and an item title as arguments
 *    and adds the item title to the player's
 *    item array.
 *
 */

/* Adventures in JavaScript
 * Listing 5.09
 * Displaying a player's health
 */

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);



/* Further Adventures
 *
 * 1) Change the showPlayerHealth function
 *    so it shows information of the form:
 *    KANDRA: health 50.
 *
 * 2) Change the function so that it uses
 *    a variable called healthInfo that
 *    is the only thing logged to the console.
 *    i.e. console.log(healthInfo);   
 *
 */
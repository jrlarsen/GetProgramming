/* Get Programming with JavaScript
 * Listing 11.06
 * Global and local variables
 */

var mountain;
var show;

mountain = "Ben Nevis";

show = function () {
    var secretMountain = "Devils Tower";

    console.log(mountain);
    console.log(secretMountain);
};

show();

console.log(mountain);
console.log(secretMountain);                                           



/* Further Adventures
 *
 * 1) At the prompt, assign mountain a new value.
 *
 * 2) Call show at the prompt.
 *
 */
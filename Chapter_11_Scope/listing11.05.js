/* Get Programming with JavaScript
 * Listing 11.05
 * The variable is visible within the function
 */

var show = function () {
    var mountain = "Devils Tower";
    console.log(mountain);
};

show();


/* Further Adventures
 *
 * 1) Declare another variable called mountain,
 *    outside of the function, at the end
 *    of the program.
 *    e.g. var mountain = "Everest";
 *
 * 2) Run the program.
 *
 * 3) At the prompt, type 'mountain' and press enter.
 *
 * Within the show function, the local version
 * of mountain is used.
 *
 * Outside the show function, the global version
 * of mountain is used.
 *
 */
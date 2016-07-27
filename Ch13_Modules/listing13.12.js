// Get Programming with JavaScript
// Listing 13.12
// Kallie's formatting code in a namespace

var kalliesCode = {
  spreader: function (text, character) {
    return text.split("").join(character);
  },

  spacer: function (text) {
    return kalliesCode.spreader(text, " ");
  },

  dasher: function (text) {
    return kalliesCode.spreader(text, "-");
  }
};



/* Further Adventures
 * 
 * 1) Run the program.
 *
 * 2) Test out the three functions
 *    at the prompt.
 *
 *    > kalliesCode.spacer("Too high!")
 *      T o o   h i g h !
 *
 *    > kalliesCode.dasher("Too low!")
 *      T-o-o- -l-o-w-!
 *
 *    > kalliesCode.spreader("Well done!", "*")
 *      W*e*l*l* *d*o*n*e*!
 *
 * 3) Create a function called squasher
 *    that removes characters added by spreader.
 *
 *    > kalliesCode.squasher("T-o-o- -h-i-g-h-!", "-")
 *      Too high!
 *
 */

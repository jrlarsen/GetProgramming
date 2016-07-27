// Get Programming with JavaScript
// Listing 13.11
// Kallie's formatting code

var spreader = function (text, character) {
  return text.split("").join(character);
};

var spacer = function (text) {
  return spreader(text, " ");
};

var dasher = function (text) {
  return spreader(text, "-");
};



/* Further Adventures
 * 
 * 1) Run the program.
 *
 * 2) Test out the three functions
 *    at the prompt.
 *
 *    > spacer("Too high!")
 *      T o o   h i g h !
 *
 *    > dasher("Too low!")
 *      T-o-o- -l-o-w-!
 *
 *    > spreader("Well done!", "*")
 *      W*e*l*l* *d*o*n*e*!
 *
 */

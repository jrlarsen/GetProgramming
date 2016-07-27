/* Get Programming with JavaScript
 * Listings 13.09 and 13.10
 * Importing Kallie's code
 */

var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);

  return function (userNumber) {
    var msg;
    if (userNumber === secret) {
      msg = dasher("Well done!");
      return spacer.wrap(msg, msg.length + 4, "=");
    } else if (userNumber > secret) {
      msg = dasher("Too high!");
      return spacer.wrap(msg, msg.length + 4, "+");
    } else {
      msg = dasher("Too low!");
      return spacer.wrap(msg, msg.length + 4, "-");
    }
  };
};


var guess = getGuesser(5, 10);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Make a guess.
 *
 * !!! Where has spacer.wrap gone? !!!
 *
 */

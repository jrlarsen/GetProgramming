/* Get Programming with JavaScript
 * Listing 12.05
 * Higher or Lower
 */

var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      if (userNumber > secret) {
        return "Too high!";
      } else {
        return "Too low!";
      }
    }
  };
};

var guess = getGuesser();



/* Further Adventures
 *
 * 1) Run the program
 *
 * 2) Play the game a few times.
 *    e.g. guess(2)
 *
 * There are three blocks of code covering the
 * three outcomes for a guess:
 * too low, too high or correct.
 *
 * 3) Update the second condition to
 *    (userNumber < secret)
 *
 * 4) Update the messages to match the
 *    new condition.
 *
 * 5) Swap the first and second conditions so
 *    the second condition uses the strict
 *    inequality operator.
 *
 * 6) Update the messages to match the
 *    new condition.
 *
 */
// Get Programming with JavaScript
// Listings 13.05 and 13.06
// Using the number generator in the guessing game
// tixina

var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else if (userNumber > secret) {
      return "Too high!";
    } else {
      return "Too low!";
    }
  };
};

var guess = getGuesser(5, 10);



/* Further Adventures
 *
 * 1) Run the program and play the game.
 *
 * 2) Change the arguments to getGuesser so that
 *    the number to guess is in a bigger range.
 *
 * 3) Update the game so that it keeps track of
 *    the number of guesses a player takes to
 *    find the secret number.
 *
 *    > Well done! You took 6 guesses.
 *
 */

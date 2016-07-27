/* Get Programming with JavaScript
 * Listings 13.13 and 13.14
 * Importing Kallie's namespace code
 */

var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);

  return function (userNumber) {
    var msg;
    if (userNumber === secret) {
      msg = kalliesCode.dasher("Well done!");
      return spacer.wrap(msg, msg.length + 4, "=");
    } else if (userNumber > secret) {
      msg = kalliesCode.dasher("Too high!");
      return spacer.wrap(msg, msg.length + 4, "+");
    } else {
      msg = kalliesCode.dasher("Too low!");
      return spacer.wrap(msg, msg.length + 4, "-");
    }
  };
};


var guess = getGuesser(5, 10);



/* Further Adventures
 *
 * 1) Run the program and play the game.
 *
 * 2) Change the program to use spreader
 *    rather than dasher, using the same
 *    character throughout each message.
 *
 *    = W=e=l=l= =d=o=n=e=! =
 *
 * Challenge:
 * 3) Create your own private wrap function,
 *    within the scope of getGuesser. It 
 *    should use spreader and wrap to create
 *    a formatted message.
 *
 *    wrap("Too high!", "+")
 *    + T+o+o+ +h+i+g+h+! +
 *
 * 4) Update the function returned from
 *    getGuesser to use your wrap function.
 *
 */

/* Get Programming with JavaScript
 * Listing 13.10
 * Using an extra variable rather than an IIFE
 */

var getSecretInterface = function () {
    var message = "Who let you in here?";

    return {
        share: function () {
            console.log(message);
        }
    };
};

var secret = getSecretInterface();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Call the share method at
 *    the prompt.
 *
 *    > secret.share()
 *
 * The share method is executed,
 * logging the message.
 *
 * When functions are called from
 * the prompt, their code is executed
 * and then their return value
 * is displayed.
 *
 * The share method does not have
 * a return statement so it
 * returns 'undefined'.
 *
 * 3) Update the share method so
 *    it returns a value.
 *
 *    share: function () {
 *        console.log(message);
 *        return "Did you log this?";
 *    }
 *
 * 4) Run the program.
 *
 * 5) Call the share method at
 *    the prompt.
 *
 */

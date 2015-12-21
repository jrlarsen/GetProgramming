/* Get Programming with JavaScript
 * Listing 13.09
 * Returning an interface from an IIFE
 */

var secret = (function () {
    var message = "Who let you in here?";

    return {
        share: function () {
            console.log(message);
        }
    };
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The function expression is executed.
 * It returns an object that is
 * assigned to secret. The object
 * includes a share method.
 *
 * 2) Call the share method.
 *
 *    > secret.share()
 *
 * Because the share method was defined
 * inside the function expression, it
 * has access to the message variable.
 *
 * 3) Declare a second variable inside
 *    the function expression and assign
 *    it a value.
 *
 * 4) Add a second method to the object
 *    returned by the function expression.
 *    It should log a combination of
 *    the two variables.
 *
 * 5) Run the program and test your
 *    method at the prompt.
 *
 */
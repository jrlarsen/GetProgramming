/* Adventures in JavaScript
 * Listing 7.06
 * Using Math.min and Math.max to constrain an argument
 */

var Spacer = {
    line: function (lineLength) {
        var line = "========================================";
        lineLength = Math.max(0, lineLength);
        lineLength = Math.min(40, lineLength);
        return line.substr(0, lineLength);
    }
};

console.log(Spacer.line(30));
console.log(Spacer.line(40));
console.log(Spacer.line(50));



/* Further Adventures
 *
 * 1) Test line lengths from -20 to 60
 *    in steps of 10.
 *
 * 2) Add an emptyBox function to the Spacer
 *    object that draws an empty box of specified
 *    width and height 5.
 *
 *    Spacer.emptyBox(12);
 *
 *    > ============
 *    > =          =
 *    > =          =
 *    > =          =
 *    > ============
 *
 */
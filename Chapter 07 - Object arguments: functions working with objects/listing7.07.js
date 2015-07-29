/* Adventures in JavaScript
 * Listing 7.07
 * Organizing functions as object properties
 */

var Spacer = {
    line: function (length) {
        var line = "========================================";
        length = Math.max(0, length);
        length = Math.min(40, length);
        return line.substr(0, length);
    },

    title: function (text, pad) {
        return Spacer.line(pad) + " " + text + " " + Spacer.line(pad);
    },

    box: function (text) {
        var boxText = "\n" + Spacer.line(text.length + 4) + "\n";
        boxText += Spacer.title(text, 1) + "\n";
        boxText += Spacer.line(text.length + 4) + "\n";
        return boxText;
    }
};

console.log(Spacer.box("Mercury"));
console.log(Spacer.box("Mars"));



/* Further Adventures
 *
 * 1) Change the Spacer.box function so that
 *    the box is 5 lines high.
 *
 *    Spacer.box("Earth");
 *
 *    > =========
 *    > =       =
 *    > = Earth =
 *    > =       =
 *    > =========
 *
 */
/* Get Programming with JavaScript
 * Listing 7.15
 * Shorthand object methods and padding
 */

var spacer = {
    blank() {
        return "";
    },

    newLine() {
        return "\n";
    },

    line(length, character) {
        return ''.padStart(length, character);
    },

    wrap(text, length, character) {
        return (character + " " + text).padEnd(length - 1) + character;
    },

    box(text, length, character) {
        const border = spacer.line(length, character);
        const wrapText = spacer.wrap(text, length, character);

        return `
${border}
${wrapText}
${border}
`;
    }
};

console.log(spacer.box("Mercury", 11, "="));
console.log(spacer.box("Mars", 11, "*"));



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
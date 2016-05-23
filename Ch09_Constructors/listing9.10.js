/* Get Programming with JavaScript
 * Listing 9.10
 * A Place constructor part 2
 */

// The spacer namespace

var spacer = {
    blank: function () {
        return "";
    },

    newLine: function () {
        return "\n";
    },

    line: function (length, character) {
        var longString = "****************************************";
        longString += "----------------------------------------";
        longString += "========================================";
        longString += "++++++++++++++++++++++++++++++++++++++++";
        longString += "                                        ";

        length = Math.max(0, length);
        length = Math.min(40, length);
        return longString.substr(longString.indexOf(character), length);
    },

    wrap : function (text, length, character) {
        var padLength = length - text.length - 3;
        var wrapText = character + " " + text;
        wrapText += spacer.line(padLength, " ");
        wrapText += character;
        return wrapText;
    },

    box: function (text, length, character) {
        var boxText = spacer.newLine();
        boxText += spacer.line(length, character) + spacer.newLine();
        boxText += spacer.wrap(text, length, character) + spacer.newLine();
        boxText += spacer.line(length, character) + spacer.newLine();
        return boxText;
    }
};


// The Place constructor

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];

    this.getItemsInfo = function () {
        var itemsString = "Items: " + spacer.newLine();

        this.items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += spacer.newLine();
        });

        return itemsString;
    };

    this.getInfo = function () {
        var infoString = spacer.box(this.title, this.title.length + 4, "=");
        infoString += this.description;
        infoString += spacer.newLine();
        infoString += this.getItemsInfo();
        infoString += spacer.line(40, "=") + spacer.newLine();
        return infoString;
    };

    this.addItem = function (item) {
        this.items.push(item);
    };
};

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

library.addItem("a rusty key");

console.log(library.getInfo());




/* Further Adventures
 *
 * 1) Add a second place and some items.
 *
 * 2) Call the getInfo method on your
 *    new place.
 *
 * The indexOf array method returns the index
 * of an item in an array.
 * this.items.indexOf("a rusty key");
 *
 * 3) Test indexOf on the console with
 *    library.items.indexOf("a rusty key");
 *
 * An item can be removed from an array with
 * the splice method.
 * this.items.splice(indexOfItem, 1);
 *
 * 4) Test splice on the console with
 *    library.items.splice(0, 1);
 *    library.getInfo();
 *
 * 5) Add a removeItem method to the constructor
 *    function that removes a specified item.
 *    e.g. library.removeItem("a rusty key");
 *
 */
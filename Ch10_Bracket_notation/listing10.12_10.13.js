/* Get Programming with JavaScript
 * Listings 10.12 and 10.13
 * A Place constructor function
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
    var newLine = spacer.newLine();

    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = {};

    this.getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        this.items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };

    this.getExitsInfo = function () {
        var exitsString = "Exits from " + this.title;
        exitsString += ":" + newLine;

        Object.keys(this.exits).forEach(function (key) {
            exitsString += "   - " + key;
            exitsString += newLine;
        });

        return exitsString;
    };

    this.getTitleInfo = function () {
        return spacer.box(
            this.title,
            this.title.length + 4,
            "="
        );
    };

    this.getInfo = function () {
        var infoString = this.getTitleInfo();
        infoString += this.description;
        infoString += newLine + newLine;
        infoString += this.getItemsInfo() + newLine;
        infoString += this.getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };


    this.showInfo = function () {
        console.log(this.getInfo());
    };

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.addExit = function (direction, exit) {
        this.exits[direction] = exit;
    };
};


// Map

var kitchen = new Place(
    "The Kitchen",
    "You are in a kitchen. There is a disturbing smell."
);
var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);
var garden = new Place(
    "The Kitchen Garden",
    "You are in a small, walled garden."
);
var cupboard = new Place(
    "The Kitchen Cupboard",
    "You are in a cupboard. It's surprisingly roomy."
);

kitchen.addItem("a piece of cheese");
library.addItem("a rusty key");
cupboard.addItem("a tin of spam");

kitchen.addExit("south", library);
kitchen.addExit("west", garden);
kitchen.addExit("east", cupboard);

library.addExit("north", kitchen);
garden.addExit("east", kitchen);
cupboard.addExit("west", kitchen);


// Test

kitchen.showInfo();



/* Further Adventures
 *
 * 1) Create an array of the four places.
 *
 * 2) Use forEach with the array to call
 *    showInfo for each place.
 *
 */
/* Adventures in JavaScript
 * Listing 7.06
 * Creating multiple Places with our constructor
 */

var library, kitchen, dungeon;

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];

    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
        console.log("Items: " + this.items.join(', ') + ".");
    };

    this.addItem = function (item) {
        this.items.unshift(item);
    };
};

library = new Place(
    "The Old Library",
    "You are in an ancient library. Dusty books line the walls."
);
library.addItem("a zombie");
library.addItem("a faded map");

kitchen = new Place(
    "The Kitchen",
    "You are in the kitchen. There is a disturbing smell."
);
kitchen.addItem("a piece of cheese");

dungeon = new Place(
    "The Dungeon",
    "You are in the dungeon. It is dark. And dank. And deep."
);

[ library, kitchen, dungeon ].forEach(function (place) {
    place.showInfo();
});



/* Further Adventures
 *
 * 1) Add a new item to each place.
 *
 * 2) Call showInfo for each place.
 *
 * unshift is an array method that adds a
 * new element at the start of the array.
 * shift is an array method that removes
 * an item from the start of an array.
 *
 * 3) Create a removeItem method that
 *    removes and item from the start
 *    of the items array.
 *
 */
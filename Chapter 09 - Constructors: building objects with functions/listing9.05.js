/* Adventures in JavaScript
 * Listing 7.05
 * Including an items array in our Place constructor
 */

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
        this.items.push(item);
    };
};

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

library.addItem("a zombie");
library.addItem("a faded map");

library.showInfo();



/* Further Adventures
 *
 * 1) Create a second place.
 *
 * 2) Add three items to the second place.
 *
 * 3) Call the showInfo method
 *    on the second place.
 *
 * 4) Add a removeItem method
 *    that removes the last item
 *    from the items array.
 *
 */
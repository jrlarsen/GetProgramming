/* Get Programming with JavaScript
 * Listing 9.10
 * A Place constructor part 2
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
  
    this.showItems = function () {
        console.log("Items: ");
        this.items.forEach(function (item, i) {
            console.log("(" + i + ") " + item);
        });        
    };

    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
        this.showItems();
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

library.showInfo();



/* Further Adventures
 *
 * 1) Add a second place and some items.
 *
 * 2) Call the showInfo method on your
 *    new place event.
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
 *    library.showInfo();
 *
 * 5) Add a removeItem method to the constructor
 *    function that removes a specified item.
 *    e.g. library.removeItem("a rusty key");
 *
 */

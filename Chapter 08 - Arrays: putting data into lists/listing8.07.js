/* Adventures in JavaScript
 * Listing 8.07
 * Iterating over an array with forEach
 */

var items,
    showInfo;

items = [ "a rusty key", "a piece of cheese", "the sword of doom" ];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);



/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */
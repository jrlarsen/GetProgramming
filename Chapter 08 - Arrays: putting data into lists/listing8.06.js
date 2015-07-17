/* Adventures in JavaScript
 * Listing 8.06
 * Manipulating arrays with push, pop and join
 */

var items = [];
var item = "a rusty key";
var removed;

items.push(item);
items.push("a piece of cheese");
items.push("the sword of doom");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));



/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "some honey"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */
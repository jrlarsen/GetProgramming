/* Adventures in JavaScript
 * Listing 8.03
 * Using a function to add ages
 */

var ages = {};

var addAge = function (name, age) {
    ages[name] = age;
};

addAge("Kandra Smith", 56);
addAge("Dax Aniaku", 21);

console.log(ages["Kandra Smith"]);
console.log(ages["Dax Aniaku"]);



/* Further Adventures
 *
 * 1) Use the addAge function to add a couple
 *    more people and their ages.
 *
 * 2) Log the new info to the console.
 *
 * 3) At the console prompt,
 *    type in 'ages' and press Enter.
 *    The ages object should be displayed.
 *
 * 4) Still at the console,
 *    use the addAge function to add new info.
 *    e.g. > addAge("Bob", 99);
 *
 * 5) Type 'ages' again to see the updated
 *    ages object.
 *
 */
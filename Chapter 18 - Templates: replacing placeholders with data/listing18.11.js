/* Get Programming with JavaScript
 * Listing 18.11
 * Using map to create a new array
 */

var add10 = function (num) {
    return num + 10;
};

var oldNums = [ 3, 8, 32, -5 ];

var newNums = oldNums.map(add10);

console.log(oldNums);
console.log(newNums);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a square function that
 *    multiplies its argument by itself.
 *
 * 3) Pass the square function to map
 *    in place of add10.
 *
 * 4) Run the program.
 *
 * 5) Create a biggerThan5 function
 *    that returns true for numbers
 *    greater than 5 and false otherwise.
 *
 * 6) Pass the biggerThan5 function to
 *    map in place of square.
 *
 * 7) Run the program.
 *
 */
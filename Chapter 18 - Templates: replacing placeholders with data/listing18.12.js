/* Get Programming with JavaScript
 * Listing 18.12
 * Calling map without variables
 */

console.log([ 3, 8, 32, -5 ]);

console.log(
  [ 3, 8, 32, -5 ].map(function (num) {
    return num + 10;
  })
);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Add an extra number to both arrays.
 *
 * To find the positive square root of
 * a number use Math.sqrt(num).
 *
 * 3) Change the function passed to map
 *    so it finds the square root of
 *    each element.
 *
 * 4) Run the program.
 *
 */
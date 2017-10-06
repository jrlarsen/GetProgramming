/* Get Programming with JavaScript
 * Listing 5.17
 * Using the square function
 */

const square = numberToSquare => {
    const result = numberToSquare ** 2;
    console.log(`${numberToSquare} * ${numberToSquare} = ${result}`);
};

square(10);
square(-2);
square(1111);
square(0.5);



/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Test your cube function
 *    four times with different arguments.
 *
 * Math.sqrt is a built-in function to find
 * the positive square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */
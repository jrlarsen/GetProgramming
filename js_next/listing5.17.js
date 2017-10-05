/* Get Programming with JavaScript
 * Listing 5.16
 * Using the square function
 */

const square = x => x ** 2;

const showSquare = numberToSquare => {
    const result = square(numberToSquare);
    console.log(`${numberToSquare} * ${numberToSquare} = ${result}`);
};

showSquare(10);
showSquare(-2);
showSquare(1111);
showSquare(0.5);



/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Define a showCube function and test it
 *    four times with different arguments.
 *
 * Math.sqrt is a built-in function to find
 * the positive square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a showSquareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */
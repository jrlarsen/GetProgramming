/* Get Programming with JavaScript
 * Listing 7.14
 * Renaming properties when object destructuring
 */

const move = ({x, y}, {x: dx, y: dy}) => ({x: x + dx, y: y + dy});

const showPoint = ({x, y}) => console.log(`( ${x} , ${y} )`);

const point1 = { x : 2, y : 5 };

const point2 = move(point1, { x : 4, y : -2 });

showPoint(point1);
console.log("Move 4 across and 2 down");
showPoint(point2);



/* Further Adventures
 *
 * 1) Change the amount by which the point is moved
 *    by altering the x and y properties of
 *    the object literal passed to the move function.
 *
 * 2) Write a reflectX function that reflects
 *    a point in the x-axis, returning the new point.
 *
 * 3) How about a rotate90 function that rotates
 *    the point by 90 degrees anticlockwise
 *    around ( 0 , 0 )?
 *
 */
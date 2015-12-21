/* Get Programming with JavaScript
 * Listing 11.09
 * Multiple counters
 */

var getCounter = function () {
  var counter = 0;
  
  return function () {
    counter = counter + 1;
    return counter;
  };
};

var peakCount = getCounter();
var climbCount = getCounter();



/* Further Adventures
 *
 * 1) At the prompt, type these commands:
 *
 *    > peakCount()
 *    > peakCount()
 *    > peakCount()
 *    > climbCount()
 *    > peakCount()
 *
 * Each count function gets its own counter variable.
 * They do not interfere with each other.
 *
 * 2) Call getCounter a third time and assign the
 *    function returned to a new variable.
 *
 * 3) Use the new variable to count up.
 *
 */
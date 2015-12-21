/* Get Programming with JavaScript
 * Listing 11.10
 * A Counter constructor
 */

var Counter = function () {
  var counter = 0;
  
  this.count = function () {
    counter = counter + 1;
    return counter;
  };
};

var peaks = new Counter();
var climbs = new Counter();



/* Further Adventures
 *
 * 1) At the console prompt,
 *    call peaks.count and climbs.count
 *    a number of times.
 *
 * 2) Add a countDown method to the
 *    Counter constructor.
 *    The method should decrease the counter
 *    by 1 each time it is called.
 *
 * 3) Add a countUpBy method that counts up
 *    by a specified amont.
 *    e.g.
 *    > peaks.count()
 *      1
 *    > peaks.countUpBy(5)
 *      6
 *    > peaks.countDown()
 *      5
 *
 */
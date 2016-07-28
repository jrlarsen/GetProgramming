/* Get Programming with JavaScript
 * Listings 19.11 and 19.12
 * A modular news page
 */

(function () {
  "use strict";
  
  var templateScript = document.getElementById("newsItemTemplate");
  var templateString = templateScript.innerHTML;
  var newsContainer = document.getElementById("news");
  
  
  var newsData = fitnessApp.news.getItems(3);
  
  newsContainer.innerHTML = gpwj.templates.fillList(templateString, newsData);
  
})();



/* Further Adventures
 *
 * 1) Create a showItems function that
 *    displays a specified number of
 *    news items on the page.
 *
 *    e.g. showItems(3)
 *
 * 2) Add a drop-down list to the page
 *    so the reader can choose the number
 *    of items to display.
 *
 * 3) Create an update function that reads
 *    the number of items to display from
 *    the drop-down list and then calls
 *    showItems with the specified number.
 *
 * 4) Add a 'show' button that calls the
 *    update function when clicked.
 *
 */

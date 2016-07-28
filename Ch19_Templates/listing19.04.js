/* Get Programming with JavaScript
 * Listing 19.04
 * Calling replace once for each property
 */

(function () {
  "use strict";
  
  var data = {
    title: "Fitness App v1.0 Live!",
    body: "Yes, version 1 is here...",
    posted: "October 3rd, 2016",
    author: "Oskar",
    social: "@appOskar51"
  };
  
  
  var templateScript = document.getElementById("newsItemTemplate");
  var templateString = templateScript.innerHTML;
  
  var newsItemHTML = templateString
      .replace("{{title}}", data.title)
      .replace("{{author}}", data.author)
      .replace("{{posted}}", data.posted)
      .replace("{{body}}", data.body)
      .replace("{{social}}", data.social);
  
  var newsContainer = document.getElementById("news");
  
  newsContainer.innerHTML = newsItemHTML;
  
})();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * Notice on the Output panel that the second
 * {{author}} placeholder (bottom right) has
 * not been replaced.
 *
 * 2) Add another call to the replace method
 *    to fix the problem.
 *
 * 3) Does rearranging the order of the calls
 *    to replace make any difference to the
 *    output?
 *
 */

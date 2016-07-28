// Get Programming with JavaScript
// Listing 18.04
// My Movie Ratings with a drop-down list

(function () {
  "use strict";
  
  var rateButton = document.getElementById("rate");
  var ratingList = document.getElementById("rating");
  var movie = document.getElementById("movie");
  
  function rateMovie () {
    var rating = ratingList.value;
    var movieTitle = movie.innerHTML;
    alert("You gave " + movieTitle + " " + rating + " stars!");
  } 
  
  rateButton.addEventListener("click", rateMovie);
  
})();



/* Further Adventures
 *
 * 1) Run the program and rate the movie.
 *
 * 2) Change which rating is automatically
 *    selected in the drop-down list.
 *
 * 3) Add a paragraph element just before
 *    the closing body tag.
 *
 * 4) Change the program so that your rating
 *    is shown in the paragraph rather than
 *    as a pop-up alert.
 *
 */

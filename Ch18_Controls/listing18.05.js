// Get Programming with JavaScript
// Listings 18.05 and 18.06
// Movies, comments and a random greeting

(function () {
  "use strict";
  
  function getById (id) {
    return document.getElementById(id);
  }
  
  var rateButton = getById("rate");
  var ratingList = getById("rating");
  var movie = getById("movie");
  
  var commentsList = getById("comments");
  var commentBox = getById("txtComment");
  
  function rateMovie () {
    var rating = ratingList.value;
    var movieTitle = movie.innerHTML;
    
    var comments = commentsList.innerHTML;
    var comment = commentBox.value;
    
    comments += "<li>" + comment + " (" + rating + " stars)</li>";
    
    commentsList.innerHTML = comments;
    
    commentBox.value = "";
  } 
  
  rateButton.addEventListener("click", rateMovie);
  
})();


// Add a random greeting
(function () {
  
  function getGreeting () {
    var hellos = [
      "Nanu nanu!",
      "Wassup!",
      "Yo!",
      "Hello movie lover!",
      "Ay up me duck!",
      "Hola!"
    ];
  
    var index = Math.floor(Math.random() * hellos.length);
    
    return hellos[index];
  }
  
  function updateGreeting () {
    para.innerHTML = getGreeting();
  }
  
  var para = document.getElementById("greeting");
  
  updateGreeting();
  
})();


/* Further Adventures
 *
 * 1) Add a second text box for the
 *    rater's name.
 *
 * 2) Ammend the comment code so the
 *    rater's name is included:
 *
 *    Great! (4 stars) - Melvin
 *
 */

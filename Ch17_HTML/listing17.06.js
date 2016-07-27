/* Get Programming with JavaScript
 * Listings 17.05 and 17.06
 * Building HTML with JavaScript
 */

var moviesData = [
    {
        "title" : "Inside Out",
        "summary" : "An emotional adventure inside the head of a young girl."
    },
    {
        "title" : "Tomorrowland",
        "summary" : "Recreating the hope and wonder of previous generations."
    },
    {
        "title" : "The Wizard of Oz",
        "summary" : "Strangers find friendship and strength on a long walk."
    }
];

function getMovieHTML (movie) {
  var html = "<h3>" + movie.title + "</h3>";
  html += "<p>" + movie.summary + "</p>";
  return html;
}

function getMoviesHTML (movies) {
  var html = "";
  
  movies.forEach(function (movie) {
    html += "<li>" + getMovieHTML(movie) + "</li>";
  });
  
  return "<ul>" + html + "</ul>";
}

function render (movies) {
  var moviesDiv = document.getElementById("movies");
  moviesDiv.innerHTML = getMoviesHTML(movies);
}

render(moviesData);

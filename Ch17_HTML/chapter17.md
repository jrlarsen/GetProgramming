# Chapter 17 - HTML: building web pages

### My Movie Ratings - headings and paragraphs (HTML)
[JS Bin Listing 17.01](http://jsbin.com/nosiwi/edit?html,output) - nosiwi 
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Listing 17.01</title>
</head>
<body>

  <h1>My Movie Ratings</h1>
  
  <p>Brief info about my favorite movies.</p>
  
  <h2>Movies</h2>
  
  <h3>Inside Out</h3>

  <p>An emotional adventure inside the head of a young girl.</p>
 
</body>
</html>


<!-- Further Adventures

     1) Have a play! Edit the HTML above
        and see how the output is affected.

     2) Add second and third movies.

     3) Try adding text that is not
        between opening and closing tags.

-->


<!-- Yes, these are HTML comments! -->
```


### Ordered and unordered lists (HTML)
[JS Bin Listing 17.02](http://jsbin.com/vegahe/edit?html,output) - vegahe 
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Listing 17.02</title>
</head>
<body>

  <h1>My Movie Ratings</h1>
  <p>Brief info about my favorite movies.</p>
  
  <h2>Movies</h2>
  
  <h3>Inside Out</h3>
  <p>An emotional adventure inside the head of a young girl.</p>
  
  <h4>Actors</h4>
  <ul>
    <li>Amy Poehler</li>
    <li>Bill Hader</li>
  </ul>
  
  <h4>Directors</h4>
  <ol>
    <li>Pete Doctor</li>
    <li>Ronnie del Carmen</li>
  </ol>
  
</body>
</html>


<!-- Further Adventures

     1) Add two more questions.
        Be careful to match opening and closing tags.
        Editing HTML can be quite fiddly.
        Don't forget the forward slash
        for the closing tags.

     2) The list of questions is between ol tags.
        Change the ol tags to ul tags.
        What happens to the output?

     3) Change just the opening ul tag
        back to an ol tag so the tags
        don't match.

        <ol> ... list ... </ul>

        The browser will do its best to make
        sense of the tags and display something
        reasonable. However, the unmatched
        tags are malformed HTML and should
        not be left in such a state.

     4) Fix the opening and closing list tags
        so they match.

-->
```


### Adding content to a paragraph with JavaScript (HTML)
[JS Bin listing 17.03](http://jsbin.com/mikura/edit?html,js,output) - mikura 
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>My Movie Ratings</title>
</head>
<body>
  
  <p id="greeting">Welcome!</p>
  
</body>
</html>
```


### Adding content to a paragraph with JavaScript
[JS Bin listing 17.04](http://jsbin.com/mikura/edit?html,js,output) - mikura 
```javascript
// Get Programming with JavaScript
// Listings 17.03 and 17.04
// Adding content to a paragraph with JavaScript

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
 * 1) Add a heading to the HTML,
 *    before the paragraph.
 *
 * 2) Give the heading an id attribute.
 *
 * 3) Use JavaScript to update the heading.
 *
 */
```


### Building HTML with JavaScript (HTML)
[JS Bin Listing 17.05](http://jsbin.com/jakowat/edit?html,js,output) - jakowat 
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Listings 17.05 and 17.06</title>
</head>
<body>

  <h1>My Movie Ratings</h1>
  
  <div id="movies"></div>
  
</body>
</html>



<!-- Further Adventures

     1) Add a paragraph element to
        the page.

     2) Give the paragraph an
        id attribute.

     3) Use JavaScript to display a
        message in the paragraph with
        the number of movies.

-->
```



### Building HTML with JavaScript
[JS Bin Listing 17.06](http://jsbin.com/jakowat/edit?html,js,output) - jakowat 
```javascript
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
```


### A web-based player view
[JS Bin Listing 17.07]() - 
```javascript
/* Get Programming with JavaScript
 * Listing 17.07
 * A web-based player view
 */

(function () {
  "use strict";

  function getNameInfo (playerData) {
    return playerData.name;
  }

  function getHealthInfo (playerData) {
    return "(" + playerData.health + ")";
  }
  
  function getItemsInfo (playerData) {
    var itemsString = "Items:" + spacer.newLine();
       
    playerData.items.forEach(function (item, i) {
      itemsString += "   - " + item + spacer.newLine();
    });

    return itemsString;
  }
  
  function getTitleInfo (playerData) {
    return getNameInfo(playerData) + " " + getHealthInfo(playerData);
  }

  function getInfo (playerData) {
    var info = spacer.box(getTitleInfo(playerData), 40, "*");
    info += "  " + getItemsInfo(playerData);
    info += spacer.line(40, "*");
    info += spacer.newLine();

    return info;
  }
  
  function render (player) {
    var playerDiv = document.getElementById("player");
    playerDiv.innerHTML = getInfo(player.getData());
  }
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.playerView = {
    render: render
  };
  
})();
```





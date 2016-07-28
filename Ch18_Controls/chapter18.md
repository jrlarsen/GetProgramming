# Chapter 18 - Controls: getting user input


### My Movie Ratings greetings with button (HTML)
[JS Bin Listing 18.01](http://jsbin.com/josoqik/edit?html,output) - josoqik 
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>My Movie Ratings</title>
</head>
<body>
  
  <button id="btnGreeting">Say Hi</button>
  
  <p id="greeting">Welcome!</p>
  
</body>
</html>
````


### My Movie Ratings greetings with button
[JS Bin Listing 18.02](http://jsbin.com/josoqik/edit?js,output) - josoqik 
```javascript
// Get Programming with JavaScript
// Listing 18.02
// My Movie Ratings greetings with button

(function () {
  "use strict";
  
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
  
  var btn = document.getElementById("btnGreeting");
  var para = document.getElementById("greeting");
  
  btn.addEventListener("click", updateGreeting);
  
  updateGreeting();
  
})();


/* Further Adventures
 *
 * 1) Run the program and click the
 *    button a few times.
 *
 * 2) Add a second button to the HTML
 *    with the caption "Say Bye"
 *
 * 3) Add a getBye function to the code
 *    that returns a random goodbye message.
 *
 * 4) Add an updateBye function and make it
 *    so that clicking your button displays
 *    the message on the web page.
 *
 */
```


### My Movie Ratings with a drop-down list (HTML)
[JS Bin Listing 18.03]() - 
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>My Movie Ratings</title>
</head>
<body>

  <h1>My Movie Ratings</h1>
  
  <p>Brief info about my favorite movies.</p>
  
  <h2>Movies</h2>
  
  <div id="movieBox">
      <h3 id="movie">Inside Out</h3>
    <p>An emotional adventure inside the head of a young girl.</p>
      <h4>Actors</h4>
      <ul>
        <li>Amy Poehler</li>
        <li>Bill Hader</li>
      </ul>
      <h4>Directors</h4>
      <ul>
        <li>Pete Doctor</li>
        <li>Ronnie del Carmen</li>
      </ul>
      <div class="controls">
        <select id="rating">
          <option>1</option>
          <option>2</option>
          <option selected>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button id="rate">Rate</button>
      </div>
  </div>
  
</body>
</html>
```


### My Movie Ratings with a drop-down list
[JS Bin Listing 18.04]() - 
```javascript
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
```


### Movies, comments and a random greeting
[JS Bin Listing 18.05](http://jsbin.com/nevaxit/edit?js,output) - nevaxit 
```javascript
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
```


### Movies, comments and a random greeting (HTML)
[JS Bin Listing 18.05](http://jsbin.com/nevaxit/edit?html,output) - nevaxit 
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>My Movie Ratings</title>
</head>
<body>

  <h1>My Movie Ratings</h1>
  
  <p>Brief info about my favorite movies. <span id="greeting">Welcome!</span></p>
  
  <h2>Movies</h2>
  
  <div id="movieBox">
      <h3 id="movie">Inside Out</h3>
    <p>An emotional adventure inside the head of a young girl.</p>
    
    <h4>Actors</h4>
    <ul>
      <li>Amy Poehler</li>
      <li>Bill Hader</li>
    </ul>
    
    <h4>Directors</h4>
    <ul>
      <li>Pete Doctor</li>
      <li>Ronnie del Carmen</li>
    </ul>
    
    <h4>Comments</h4>
    <ul id="comments"></ul>
    
      <div class="controls">
        
        <input type="text" id="txtComment" />
        
        <select id="rating">
          <option>1</option>
          <option>2</option>
          <option selected>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        
        <button id="rate">Rate</button>
        
      </div>
  </div>
  
</body>
</html>
```



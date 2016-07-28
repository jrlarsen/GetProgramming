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



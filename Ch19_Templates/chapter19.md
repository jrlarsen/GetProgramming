# Chapter 19 - Templates: filling placeholders with data


### Fitness app news (HTML)
[JS Bin Listing 19.01](http://jsbin.com/viyuyo/edit?html,output) - viyuyo 
```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Fitness App News</title>
</head>
<body>

  <h1>Fitness App News</h1>
  
  <div id="news"></news>
  
  
  <script type="text/template" id="newsItemTemplate">
    <div class="newsItem">
      <h3>{{title}}<span> - by {{author}}</span></h3>
      <p>{{body}}</p>
      <p class="posted"><em>Posted: {{posted}}</em></p>
      <p class="follow">Follow {{author}} {{social}}</p>
    </div>
  </script>
  
</body>
</html>


<!-- Further Adventures

1) Run the program to see the output generated
   when the placeholders are filled with data.

2) Move the first {{author}} placeholder into
   its own paragraph and run the program again.

3) Look at the post data in the JavaScript panel.
   Notice how the property names (the keys) match
   the placeholders.

4) Add a fifth post to the posts array and run
   the program again.


-->
```


### Replacing one string with another
[JS Bin Listing 19.02](http://jsbin.com/jeyohu/edit?js,console) - jeyohu 
```javascript
/* Get Programming with JavaScript
 * Listing 19.02
 * Replacing one string with another
 */

var before = "<h3>{{title}}</h3>";

var after = before.replace("{{title}}", "Fitness App v1.0 Live!");

console.log(before);
console.log(after);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Declare a title variable and assign it
 *    a value;
 *
 * 3) Use before.replace to replace the {{title}}
 *    placeholder with the value of the title
 *    variable, rather than with a string literal.
 *
 * 4) Include a second placeholder in the
 *    original string.
 *
 * 5) Use the replace method to fill both your
 *    placeholder and {{title}} with a value.
 *
 */
```


### Chaining calls to replace
[JS Bin Listing 19.03](http://jsbin.com/rebugu/edit?js,console) - rebugu 
```javascript
/* Get Programming with JavaScript
 * Listing 19.03
 * Chaining calls to replace
 */

var data = {
  author : "Oskar",
  social : "@appOskar51"
};

var before = "Follow {{author}} {{social}}";

var after = before
                .replace("{{author}}", data.author)
                .replace("{{social}}", data.social);

console.log(before);
console.log(after);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Replace the author property in the data
 *    with two new properties: firstName
 *    and lastName.
 *
 * 3) Update the placeholders in the before
 *    string to use the new properties.
 *
 * 4) Update the calls to the replace method
 *    so all three placeholders are filled
 *    with data.
 *
 */
```


### Calling replace once for each property
[JS Bin Listing 19.04](http://jsbin.com/quroha/edit?js,html,output) - quroha 
```javascript
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
```



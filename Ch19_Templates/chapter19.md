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




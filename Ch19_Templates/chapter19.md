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


### Using a while loop to count
[JS Bin Listing 19.05](http://jsbin.com/quroga/edit?js,console) - quroga 
```javascript
// Get Programming with JavaScript
// Listing 19.05
// Using a while loop to count

var count = 1;

while (count < 11) {
    console.log(count);
    count++;
}



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Change the program so it
 *    counts down from 10 to 1.
 *
 * 3) Change it so it shows all
 *    the odd numbers from 1 to 100.
 *
 * 4) Create an array of numbers and
 *    assign it to a variable.
 *
 *    e.g. var nums = [2, 7, 1, 9];
 *
 * 5) Use a while loop to display
 *    the elements of the array.
 *
 *    Hint: console.log(nums[count])
 *
 */
```

### Using a while loop with replace
[JS Bin Listing 19.06](http://jsbin.com/cabaju/edit?js,console) - cabaju 
```javascript
// Get Programming with JavaScript
// Listing 19.06
// Using a while loop with replace

var template = "{{title}} by {{author}}. Follow {{author}} {{social}}";

var filled = template;

console.log("Starting replacement...");

while (filled.indexOf("{{author}}") !== -1) {
    filled = filled.replace("{{author}}", "Oskar");
    console.log(filled);
}

console.log("...replacement finished.");




/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create your own replace function. Move
 *    the while loop into your function. The
 *    function should accept three arguments:
 *    template, placeholder and data.
 *
 *    Declaration:
 *    function replace (template, placeholder, data) {
 *        // use a while loop to replace
 *        // the placeholder in the template
 *        // with its data
 *    }
 *
 *    Invocation:
 *    var filled = replace(myTemplate, "{{title}}", "My Title")
 *
 */
```


### A function to fill templates with data
[JS Bin Listing 19.07](http://jsbin.com/bazika/edit?js,output) - bazika 
```javascript
// Get Programming with JavaScript
// Listing 19.07
// A function to fill templates with data

function fill (template, data) {

  Object.keys(data).forEach(function (key) {
    var placeholder = "{{" + key + "}}";
    var value = data[key];

    while (template.indexOf(placeholder) !== -1) {
      template = template.replace(placeholder, value);
    }
  });

  return template;
}
  
  
// Test the fill function

var data = {
    title: "Fitness App v1.0 Live!",
    body: "Yes, version 1 is here...",
    posted: "October 3rd, 2016",
    author: "Oskar",
    social: "@appOskar51"
};
  
var templateScript = document.getElementById("newsItemTemplate");
var templateString = templateScript.innerHTML;
var newsContainer = document.getElementById("news");
  
newsContainer.innerHTML = fill(templateString, data);


/* Further Adventures
 *
 * 1) Replace the author property with
 *    firstName and lastName properties.
 *
 * 2) On the HTML panel, update the template
 *    to use the new properties.
 *
 * 3) Run the program and check that the
 *    new placeholders are automatically
 *    filled with the correct values.
 *
 */
```


### Building a list using a template
[JS Bin Listing 19.08](http://jsbin.com/hilecu/edit?js,output) - hilecu 
```javascript
// Get Programming with JavaScript
// Listing 19.08
// Building a list using a template

function fill (template, data) {

  Object.keys(data).forEach(function (key) {
    var placeholder = "{{" + key + "}}";
    var value = data[key];

    while (template.indexOf(placeholder) !== -1) {
      template = template.replace(placeholder, value);
    }
  });

  return template;
}
  
function fillList (template, dataArray) {
  var listString = "";
    
  dataArray.forEach(function (data) {
    listString += fill(template, data);
  });
    
  return listString;
}
  
  
// Test the function
  
var posts = [
  {
    title: "Fitness App v1.0 Live!",
    body: "Yes, version 1 is here...",
    posted: "October 3rd, 2016",
    author: "Oskar",
    social: "@appOskar51"
  },
  {
    title: "Improved Formatting",
    body: "The app's looking better than ever...",
    posted: "October 8th, 2016",
    author: "Kallie",
    social: "@kal5tar"
  },
  {
    title: "We've Gone Modular",
    body: "Wow, it's so much easier to work this way...",
    posted: "October 12th, 2016",
    author: "Oskar",
    social: "@appOskar51"
  },
  {
    title: "Positive Feedback!",
    body: "It seems the testers are really loving the app...",
    posted: "October 13th, 2016",
    author: "Mahesha",
    social: "@MaheshaMash"
  }
];
  
var templateScript = document.getElementById("newsItemTemplate");
var templateString = templateScript.innerHTML;
var newsContainer = document.getElementById("news");
  
newsContainer.innerHTML = fillList(templateString, posts);


/* Further Adventures
 *
 * 1) Update the app so that it uses three buttons:
 *    Previous, Next and All.
 *
 *    Previous and Next show one post at a time.
 *
 *    All displays all of the posts at once.
 *
 */
```


### The templates module
[JS Bin Listing 19.09](http://jsbin.com/pugase/edit?js,console) - pugase 
```javascript
// Get Programming with JavaScript
// Listing 19.09
// The templates module

(function () {
  "use strict";

  function fill (template, data) {
    Object.keys(data).forEach(function (key) {
      var placeholder = "{{" + key + "}}";
      var value = data[key];

      while (template.indexOf(placeholder) !== -1) {
        template = template.replace(placeholder, value);
      }
    });

    return template;
  }
  
  function fillList (template, dataArray) {
    var listString = "";
    
    dataArray.forEach(function (data) {
      listString += fill(template, data);
    });
    
    return listString;
  }
  
  if (window.gpwj === undefined) {
    window.gpwj = {};
  }
  
  gpwj.templates = {
    fill: fill,
    fillList: fillList
  };

})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt,
 *    test the fill method:
 *
 *    > var tmpl = "Message: {{msg}}\n"
 *    > var data = { msg: "Hi" }
 *    > gpwj.templates.fill(tmpl, data)
 *
 * 3) Test the fillList method:
 *
 *    > var data = [{msg:"Hi"}, {msg:"Bye"}]
 *    > gpwj.templates.fillList(tmpl, data)
 *
 */
```


### A news page data module
[JS Bin Listing 19.10](http://jsbin.com/fupiki/edit?js,console) - fupiki 
```javascript
// Get Programming with JavaScript
// Listing 19.10
// A news page data module

(function () {
  "use strict";
  
  var posts = [
    {
      title: "Fitness App v1.0 Live!",
      body: "Yes, version 1 is here...",
      posted: "October 3rd, 2016",
      author: "Oskar",
      social: "@appOskar51"
    },
    {
      title: "Improved Formatting",
      body: "The app's looking better than ever...",
      posted: "October 8th, 2016",
      author: "Kallie",
      social: "@kal5tar"
    },
    {
      title: "We've Gone Modular",
      body: "Wow, it's so much easier to work this way...",
      posted: "October 12th, 2016",
      author: "Oskar",
      social: "@appOskar51"
    },
    {
      title: "Positive Feedback!",
      body: "It seems the testers are really loving the app...",
      posted: "October 13th, 2016",
      author: "Mahesha",
      social: "@MaheshaMash"
    }
  ];
  
  function getNews (numItems) {
    return posts.slice(0, numItems);
  }
  
  if (window.fitnessApp === undefined) {
    window.fitnessApp = {};
  }
  
  fitnessApp.news = {
    getItems: getNews
  };
  
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Test the getItems method:
 *
 *    > fitnessApp.news.getItems(2)
 *    > fitnessApp.news.getItems(0)
 *    > fitnessApp.news.getItems(10)
 *    > fitnessApp.news.getItems(-3)
 *
 */
```



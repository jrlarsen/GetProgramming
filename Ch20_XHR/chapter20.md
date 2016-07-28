# Chapter 20 - XHR: loading data


### Using an XHR object to load user data
[JS Bin Listing 20.01](http://jsbin.com/qakofo/edit?js,console) - qakofo 
```javascript
// Get Programming with JavaScript
// Listing 20.01
// Using an XHR object to load user data

var xhr = new XMLHttpRequest();
var url = "http://output.jsbin.com/qiwizo.json";

xhr.addEventListener("load", function () {
  console.log(xhr.responseText);
});

xhr.open("GET", url);
xhr.send();



/* Further Adventures
 *
 * 1) Run the program to see the data load.
 *
 * 2) Change the URL to pobapa.json
 *    instead of qiwizo.json and
 *    run the program again.
 *
 */
```


### Parsing JSON text to obtain a JavaScript object
[JS Bin Listing 20.02](http://jsBin.com/rexolo/edit?js,console) - rexolo 
```javascript
// Get Programming with JavaScript
// Listing 20.02
// Parsing JSON text to obtain a JavaScript object

var xhr = new XMLHttpRequest();
var url = "http://output.jsbin.com/qiwizo.json";

xhr.addEventListener("load", function () {
  var data = JSON.parse(xhr.responseText);
  console.log(data);
});

xhr.open("GET", url);
xhr.send();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * Once loaded, the data is converted
 * into a JavaScript object you can use.
 *
 * 2) Add more console.log lines inside
 *    the event listener function:
 *
 *    console.log(data.name);
 *    console.log(data.duration);
 *    console.log(data.sessions[0]);
 *
 * 3) At the console prompt,
 *    try to access the data variable:
 *
 *    > data
 *
 *    Why is there an error?
 *
 */
```



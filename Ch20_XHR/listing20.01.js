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

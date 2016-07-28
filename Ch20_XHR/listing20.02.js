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

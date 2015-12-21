/* Get Programming with JavaScript
 * Listing 19.01
 * Retrieving calendar events with xhr
 */

var xhr = new XMLHttpRequest();

function showResponse () {
  window.alert(xhr.responseText);
}

xhr.addEventListener("load", showResponse);

xhr.open("GET", "http://output.jsbin.com/bomiri.json");

xhr.send();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a logResponse function that
 *    logs the returned data to the
 *    console.
 *
 * 3) Add the logResponse function as
 *    an event listener for the
 *    xhr load event.
 *
 * 4) Run the program.
 *
 * 5) Notice in the loaded data that
 *    there is a property called 'next'
 *    with a value of 'siwusi'.
 *
 *    Change the url in the call to
 *    xhr.open so that the data at
 *    siwusi.json is loaded.
 *
 * 6) Run the program.
 *
 */
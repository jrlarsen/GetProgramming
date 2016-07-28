// Get Programming with JavaScript
// Listing 20.03
// A module for loading JS Bin data

(function () {
  "use strict";
  
  function loadData (bin, callback) {
    var xhr = new XMLHttpRequest();
    var url = "http://output.jsbin.com/" + bin + ".json";

    xhr.addEventListener("load", function () {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    });

    xhr.open("GET", url);
    xhr.send();
  }
  
  if (window.gpwj === undefined) {
    window.gpwj = {};
  }
  
  gpwj.data = {
    load: loadData
  };
  
})();

gpwj.data.load("qiwizo", console.log);


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Change the bin code to "pobapa"
 *    and run the program again.
 *
 * 3) Declare a new function, outside
 *    the IIFE, called numSessions.
 *
 * 4) Add statements to the function to
 *    display the number of sessions for
 *    the loaded user:
 *
 *    "Mahesha has logged 3 sessions."
 *
 * 5) Replace console.log with numSessions
 *    as the callback for the load function.
 *
 * 6) Run the program.
 *
 */

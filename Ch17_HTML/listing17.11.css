/* Get Programming with JavaScript
 * Listing 17.11
 * A web-based message view
 */

(function () {
  "use strict";

  function renderMessage (message) {
    return "*** " + message + " ***";
  }
  
  function render (message) {
    var messageDiv = document.getElementById("messages");
    messageDiv.innerHTML = renderMessage(message);
  }

  function clear () {
    var messageDiv = document.getElementById("messages");
    messageDiv.innerHTML = "";        
  }

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.messageView = {
    render: render,
    clear: clear
  };

})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Display a message on the
 *    output panel.
 *
 *    > theCrypt.messageView.render("Hello")
 *
 */

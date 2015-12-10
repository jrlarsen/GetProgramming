/* Get Programming with JavaScript
 * Listing 17.09
 * A web based message view
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.messageView = (function () {
    var renderMessage = function (message) {
      return "*** " + message + " ***";
    };
  
    var render = function (message) {
      var messageDiv = document.getElementById("messages");
      messageDiv.innerHTML = renderMessage(message);
    };
  
    return {
      render: render
    };
  })();

})();
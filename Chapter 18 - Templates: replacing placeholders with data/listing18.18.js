/* Get Programming with JavaScript
 * Listing 18.18
 * A message view using templates
 * Must come after theCrypt.Template
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.messageView = (function () {
  
    var messageDiv = document.getElementById("messages");
    var templateScript = document.getElementById("messageTemplate");
    var template = new theCrypt.Template(templateScript.innerHTML);
  
    var render = function (message) {    
      messageDiv.innerHTML = template.fill({ message: message });
    };
  
    return {
      render: render
    };
  
  })();
  
})();
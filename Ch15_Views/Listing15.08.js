/* Get Programming with JavaScript
 * Listing 15.08
 * A message view
 */

(function () {

  var getMessageInfo = function (messageData) {
    return "*** " + messageData + " ***";
  };
  
  var render = function (message) {
    console.error(getMessageInfo(message));
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
    
  theCrypt.messageView = {
    render: render
  };
  
})();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a shortcut variable
 *    for the message view.
 *
 *    > var mv = theCrypt.messageView
 *
 * 3) Display some messages.
 *
 *    > mv.render("Hello")
 *    > mv.render("wassup wassup wassup")
 *
 * 4) Change the program to display
 *    messages like this:
 *
 *    > mv.render("Hello")
 *      The message is: Hello
 *
 * 5) Change the program to display
 *    messages in upper case.
 *
 *    > mv.render("Hello")
 *      HELLO
 *
 */

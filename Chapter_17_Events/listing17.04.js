/* Get Programming with JavaScript
 * Listing 17.04
 * Using a text box to get user input
 */

var displayMessage = function () {
  var txtBox = document.getElementById("userMessage");
  var messageDiv = document.getElementById("message");
  messageDiv.innerHTML = "Message: " + txtBox.value;
};

var btn = document.getElementById("showMessage");

btn.addEventListener("click", displayMessage);



/* Further Adventures
 *
 * 1) Run the program, enter a
 *    message in the text box
 *    and click the button.
 *
 * 2) Add a second text box element
 *    to the HTML and give it a
 *    unique id.
 *
 * 3) Update the displayMessage function
 *    so it uses the values from
 *    both text boxes.
 *
 *    For example, one text box could
 *    be for the user's name and the
 *    other for their message.
 *
 *    "Dax says: where's my duster?"
 *
 */
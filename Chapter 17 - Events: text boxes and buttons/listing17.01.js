/* Get Programming with JavaScript
 * Listings 17.01 and 17.02
 * Displaying a message when a button is clicked
 */

var displayMessage = function () {
  var messageDiv = document.getElementById("message");
  messageDiv.innerHTML = "I'm going on an adventure!";
};

var btn = document.getElementById("showMessage");

btn.addEventListener("click", displayMessage);



/* Further Adventures
 *
 * 1) Run the program and
 *    click the button.
 *
 * 2) Declare a counter variable
 *    before the displayMessage function
 *    and assign it the value 1.
 *
 * 3) Update the displayMessage function
 *    so it includes the counter value
 *    at the end.
 *
 *    I'm going on an adventure! (1)
 *
 * 4) Increment the counter each time
 *    the button is clicked.
 *
 * 5) Run the program and click the
 *    button a few times.
 *
 *    I'm going on an adventure! (1)
 *    I'm going on an adventure! (2)
 *    I'm going on an adventure! (3)
 *
 */
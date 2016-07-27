// Get Programming with JavaScript
// Listings 15.02 and 15.03
// Testing two user views

var user = new fitnessApp.User("Mahesha");

user.addSession("2017-02-05", 35);
user.addSession("2017-02-06", 45);

fitnessApp.userView.render(user);
fitnessApp.userViewEnhanced.render(user);



/* Further Adventures
 *
 * 1) Add a couple more sessions
 *    for the user and run the
 *    program again.
 *
 * 2) Take a look at the code for
 *    the enhanced view (it's imported
 *    on the HTML panel).
 *    Can you follow it?
 *
 */

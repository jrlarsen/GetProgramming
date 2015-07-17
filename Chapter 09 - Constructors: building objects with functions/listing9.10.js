/* Adventures in JavaScript
 * Listing 7.10
 * Updating a property on the prototype
 */

var GuardPost = function (postName) {
    this.postName = postName;
};

GuardPost.prototype.status = "All clear";

GuardPost.prototype.tripAlarm = function () {
    console.log(this.postName + ": Intruder Alert!");
    GuardPost.prototype.status = "I am on the look out!";
};

var posts = [
    new GuardPost("The Main Gate"),
    new GuardPost("The Stables"),
    new GuardPost("The Patio")
];

posts.forEach(function (post) {
    console.log(post.postName + ": " + post.status);
});

posts[0].tripAlarm();

posts.forEach(function (post) {
    console.log(post.postName + ": " + post.status);
});



/* Further Adventures
 *
 * 1) Add a couple more guardposts.
 *
 * 2) Add a clearAlarm method to
 *    GuardPost.prototype that
 *    resets the status to "All clear"
 *
 * 3) Test out your clearAlarm method.
 *    One guard should trip the alarm and
 *    another should clear it.
 *
 */
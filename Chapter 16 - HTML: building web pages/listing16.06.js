/* Get Programming with JavaScript
 * Listings 16.05 and 16.06
 * Building HTML with JavaScript
 */

var postsData = [
    {
        "title" : "My Adventure",
        "post" : "You’ll never guess where I woke up. On a comet!"
    },
    {
        "title" : "That Dog",
        "post" : "I’m not sure the dog even knows what cheese is."
    },
    {
        "title" : "Cruise Tickets",
        "post" : "Woohoo! My tickets for the cruise have arrived."
    }
];

var renderPost = function (post) {
  var postHTML = "<h3>" + post.title + "</h3>";
  postHTML += "<p>" + post.post + "</p>";
  return postHTML;
};

var renderPosts = function (posts) {
  var postsHTML = "";
  
  posts.forEach(function (post) {
    postsHTML += "<li>" + renderPost(post) + "</li>";
  });
  
  return "<ul>" + postsHTML + "</ul>";
};

var render = function (posts) {
  var postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = renderPosts(postsData);
};

render(postsData);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Add another post to postsData.
 *
 * 3) Run the program again.
 *
 * 4) See tasks in the HTML panel.
 *
 */
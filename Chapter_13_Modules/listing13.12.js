/* Get Programming with JavaScript
 * Listing 13.12
 * The view code for posts
 */

var view = (function () {
  var getPostString = function (post) {
    var postString = "";
    
    postString += post.user + " says...\n";
    postString += post.message;
    
    return postString;
  };
  
  var getPostsString = function (posts) {
    var postsString = "\n";
    
    posts.forEach(function (post) {
      postsString += getPostString(post) + "\n\n";
    });
    
    return postsString;
  };
  
  return {
    render: function (posts) {
      console.log(getPostsString(posts));
    }
  };
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The render method expects to be
 * passed an array of posts.
 *
 * 2) At the prompt, declare a
 *    myPosts variable and assign
 *    it an empty array.
 *
 *    > var myPosts = []
 *
 * Commands at the prompt can span
 * multiple lines.
 * Type shift + Enter to move
 * to a new line without executing.
 *
 * 3) Add a post to myPosts.
 *
 *    > myPosts.push({
 *        message: "This is my crypt",
 *        user: "Jahver"
 *      })
 *
 * 4) Call the render method with
 *    myPosts as an argument.
 *
 *    > view.render(myPosts)
 *
 * 5) Add a couple more posts and
 *    display them.
 *
 */
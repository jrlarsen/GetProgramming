/* Get Programming with JavaScript
 * Listing 13.15
 * Another view for posts
 */

var view = (function () {
  var getPostString = function (post) {
    var postString = spacer.blank();
    
    postString += spacer.box(post.user, post.user.length + 4, "+");
    postString += post.message + spacer.newLine();
    
    postString += spacer.line(40, "=") + spacer.newLine();
    
    return postString;
  };
  
  var getPostsString = function (posts) {
    var postsString = spacer.blank();
    
    posts.forEach(function (post) {
      postsString += getPostString(post);
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
 * 1) In the HTML panel,
 *    remove the current HTML.
 *
 * 2) Add a script tag to import data
 *    from nocifi.js
 *
 * 3) Add a script tag to import the
 *    spacer namespace from juneqo.js
 *
 * 4) Run the program.
 *
 * 5) At the prompt, call the render
 *    method with the imported data.
 *
 *    > view.render(postsData);
 *
 */
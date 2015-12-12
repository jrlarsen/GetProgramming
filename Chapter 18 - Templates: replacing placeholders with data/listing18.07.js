/* Get Programming with JavaScript
 * Listing 18.07
 * Filling a template with object properties
 */

var template = "<h3>{{title}}</h3><p>{{body}}</p>";
var filled = template;

var post = {
    title: "That dog",
    body: "That dog doesn’t know what cheese is"
};

Object.keys(post).forEach(function (key) {
    var placeholder = "{{" + key + "}}";
    filled = filled.replace(placeholder, post[key]);
});

console.log(filled);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * Let's take a look at the array
 * of property names created by
 * Object.keys.
 *
 * 2) At the console prompt, type
 *    > Object.keys(post)
 *
 * 3) Add a third placeholder to
 *    the template in the program.
 *
 * 4) Add a corresponding property
 *    to the post object.
 *
 * 5) Run the program.
 *
 */
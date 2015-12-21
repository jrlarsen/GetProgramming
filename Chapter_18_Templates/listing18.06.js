/* Get Programming with JavaScript
 * Listing 18.06
 * Filling a template to produce HTML
 */

var template = "<h3>{{title}}</h3><p>{{post}}</p>";
var filled = template;

filled = filled
             .replace("{{title}}", "That dog")
             .replace("{{post}}", "That dog doesn’t know what cheese is");

console.log(filled);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Add another paragraph to the template
 *    with a {{by}} placeholder.
 *
 * 3) Add a third call to replace to 
 *    fill the {{by}} placeholder with
 *    the string "Tiarnan".
 *
 * 4) Create a fillPost function to
 *    fill the post template with
 *    values passed as arguments.
 *
 *    fillPost = function (title, post, by) {
 *      // TODO
 *    };
 *
 *    var filled = fillPost("That Dog", "That dog...", "Tiarnan");
 *
 */
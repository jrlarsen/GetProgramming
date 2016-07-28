// Get Programming with JavaScript
// Listing 19.06
// Using a while loop with replace

var template = "{{title}} by {{author}}. Follow {{author}} {{social}}";

var filled = template;

console.log("Starting replacement...");

while (filled.indexOf("{{author}}") !== -1) {
    filled = filled.replace("{{author}}", "Oskar");
    console.log(filled);
}

console.log("...replacement finished.");




/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create your own replace function. Move
 *    the while loop into your function. The
 *    function should accept three arguments:
 *    template, placeholder and data.
 *
 *    Declaration:
 *    function replace (template, placeholder, data) {
 *        // use a while loop to replace
 *        // the placeholder in the template
 *        // with its data
 *    }
 *
 *    Invocation:
 *    var filled = replace(myTemplate, "{{title}}", "My Title")
 *
 */

/* Get Programming with JavaScript
 * Listing 18.09
 * Using a Template constructor function
 */

var Template = function (template) {
  this.template = template;

  this.fill = function (data) {
    var filled = this.template;

    Object.keys(data).forEach(function (key) {
      var placeholder = "{{" + key + "}}";

      while (filled.indexOf(placeholder) !== -1) {
        filled = filled.replace(placeholder, data[key]);
      }
    });

    return filled;
  };
};

var planet1 = { name: "Earth", position: 3 };
var planet2 = { name: "Saturn", position: 6 };
var post = {
  title: "Out of Office",
  body: "I'm going on an adventure!"
};

var planetTemplate = new Template("Planet number {{position}} is {{name}}");
var postTemplate = new Template("<h3>{{title}}</h3><p>{{body}}</p>");

console.log(planetTemplate.fill(planet1));
console.log(planetTemplate.fill(planet2));
console.log(postTemplate.fill(post));



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create a second post object.
 *
 * 3) Fill the postTemplate with the
 *    data from the second post object
 *    and log the result on the console.
 *
 * 4) Open the HTML panel and find the
 *    id of the div element.
 *
 * 5) Change the program so that the
 *    filled post templates are added
 *    to the web page rather than
 *    the console. Open the Output
 *    panel and run the program to
 *    check your work.
 *
 */
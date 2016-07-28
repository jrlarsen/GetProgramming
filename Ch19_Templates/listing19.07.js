// Get Programming with JavaScript
// Listing 19.07
// A function to fill templates with data

function fill (template, data) {

  Object.keys(data).forEach(function (key) {
    var placeholder = "{{" + key + "}}";
    var value = data[key];

    while (template.indexOf(placeholder) !== -1) {
      template = template.replace(placeholder, value);
    }
  });

  return template;
}
  
  
// Test the fill function

var data = {
    title: "Fitness App v1.0 Live!",
    body: "Yes, version 1 is here...",
    posted: "October 3rd, 2016",
    author: "Oskar",
    social: "@appOskar51"
};
  
var templateScript = document.getElementById("newsItemTemplate");
var templateString = templateScript.innerHTML;
var newsContainer = document.getElementById("news");
  
newsContainer.innerHTML = fill(templateString, data);


/* Further Adventures
 *
 * 1) Replace the author property with
 *    firstName and lastName properties.
 *
 * 2) On the HTML panel, update the template
 *    to use the new properties.
 *
 * 3) Run the program and check that the
 *    new placeholders are automatically
 *    filled with the correct values.
 *
 */

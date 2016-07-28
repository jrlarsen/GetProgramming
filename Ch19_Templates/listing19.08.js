// Get Programming with JavaScript
// Listing 19.08
// Building a list using a template

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
  
function fillList (template, dataArray) {
  var listString = "";
    
  dataArray.forEach(function (data) {
    listString += fill(template, data);
  });
    
  return listString;
}
  
  
// Test the function
  
var posts = [
  {
    title: "Fitness App v1.0 Live!",
    body: "Yes, version 1 is here...",
    posted: "October 3rd, 2016",
    author: "Oskar",
    social: "@appOskar51"
  },
  {
    title: "Improved Formatting",
    body: "The app's looking better than ever...",
    posted: "October 8th, 2016",
    author: "Kallie",
    social: "@kal5tar"
  },
  {
    title: "We've Gone Modular",
    body: "Wow, it's so much easier to work this way...",
    posted: "October 12th, 2016",
    author: "Oskar",
    social: "@appOskar51"
  },
  {
    title: "Positive Feedback!",
    body: "It seems the testers are really loving the app...",
    posted: "October 13th, 2016",
    author: "Mahesha",
    social: "@MaheshaMash"
  }
];
  
var templateScript = document.getElementById("newsItemTemplate");
var templateString = templateScript.innerHTML;
var newsContainer = document.getElementById("news");
  
newsContainer.innerHTML = fillList(templateString, posts);


/* Further Adventures
 *
 * 1) Update the app so that it uses three buttons:
 *    Previous, Next and All.
 *
 *    Previous and Next show one post at a time.
 *
 *    All displays all of the posts at once.
 *
 */

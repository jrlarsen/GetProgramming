/* Get Programming with JavaScript
 * Listing 18.10
 * Using templates to build a list
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
  
  this.fillList = function (dataArray) {
    var listString = "";
    var i;
    var l = dataArray.length;
    
    for (i = 0; i < l; i++) {
      listString += this.fill(dataArray[i]);
    }
    
    return listString;
  };
};

var planets = [
  { name: "Mercury", position: 1 },
  { name: "Venus",   position: 2 },
  { name: "Earth",   position: 3 },
  { name: "Mars",    position: 4 },
  { name: "Jupiter", position: 5 }
];

var planetTemplate = new Template("Planet {{position}} is {{name}}\n");

console.log(planetTemplate.fillList(planets));


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Add a sixth planet and run
 *    the program again.
 *
 * 3) Update the template so that
 *    the string it creates is a
 *    list item, i.e. within
 *    an li element.
 *
 * 4) Open the HTML panel and find
 *    the id of the ol element.
 *
 * 5) Change the code above to
 *    display the list on the
 *    web page.
 *
 */
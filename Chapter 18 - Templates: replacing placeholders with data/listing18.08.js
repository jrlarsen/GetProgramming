/* Get Programming with JavaScript
 * Listing 18.08
 * Filling a template with repeated placeholders
 */

var template = "<h3>{{name}}</h3><p>{{name}} has health {{health}}</p>";
template += "<p>{{name}} is in {{place}}</p>";

var filled = template;
var playerData = {
    name: "Jahver",
    health: 80,
    place: "The Crypt"
};

Object.keys(playerData).forEach(function (key) {
    var placeholder = "{{" + key + "}}";                               
    while (filled.indexOf(placeholder) !== -1) {
        filled = filled.replace(placeholder, playerData[key]);
    }
});

document.getElementById("player").innerHTML = filled;



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Add an item property to playerData.
 *
 * 3) Add another paragraph to the template
 *    to show the item. The output should
 *    be something like:
 *
 *    Jahver has The Sword of Doom
 *
 */
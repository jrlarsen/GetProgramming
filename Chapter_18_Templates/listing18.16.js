/* Get Programming with JavaScript
 * Listing 18.16
 * The Template constructor module
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.Template = function (template) {
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

})();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, create
 *    a player object.
 *
 *    > var p = {}
 *    > p.name = "Dax"
 *    > p.health = 50
 *
 * 3) Create a template.
 *
 *    > var tString = "{{name}} has health {{health}}"
 *    > var t = new theCrypt.Template(tString)
 *
 * 4) Fill the template with the player data.
 *
 *    > t.fill(p)
 *
 */
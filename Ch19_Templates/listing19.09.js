// Get Programming with JavaScript
// Listing 19.09
// The templates module

(function () {
  "use strict";

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
  
  if (window.gpwj === undefined) {
    window.gpwj = {};
  }
  
  gpwj.templates = {
    fill: fill,
    fillList: fillList
  };

})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt,
 *    test the fill method:
 *
 *    > var tmpl = "Message: {{msg}}\n"
 *    > var data = { msg: "Hi" }
 *    > gpwj.templates.fill(tmpl, data)
 *
 * 3) Test the fillList method:
 *
 *    > var data = [{msg:"Hi"}, {msg:"Bye"}]
 *    > gpwj.templates.fillList(tmpl, data)
 *
 */









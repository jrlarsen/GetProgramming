// Get Programming with JavaScript
// Chapter 21
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








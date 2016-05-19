/* Get Programming with JavaScript
 * Listing 19.03
 * Loading calendar data with xhr
 */

(function () {
  
  var templateString = document.getElementById("calTemplate").innerHTML;
  var calTemplate = new gpwjs.Template(templateString);
  var calendarList = document.getElementById("calEvents");
  var calNext = document.getElementById("loadEvents");
  
  function getCalEvents (code) {
    var xhr = new XMLHttpRequest();
    var url = "http://output.jsbin.com/" + code + ".json";
    
    xhr.addEventListener("load", function () {
      var eventsData = JSON.parse(xhr.responseText);
      calendarList.innerHTML = calTemplate.fillList(eventsData.calEvents);
      calendarList.className = "";
      calNext.setAttribute("data-code", eventsData.next);
    });
    
    xhr.open("GET", url);
    xhr.send();
  }
  
  function loadCalendarEvents (e) {
    var code = calNext.getAttribute("data-code");
    e.preventDefault();
    calendarList.className = "loading";
    getCalEvents(code);
  }
  
  calNext.addEventListener("click", loadCalendarEvents);
  
})();
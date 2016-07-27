// Get Programming with JavaScript
// Listings 17.03 and 17.04
// Random greetings

(function () {
  
  function getGreeting () {
    var hellos = [
      "Nanu nanu!",
      "Wassup!",
      "Yo!",
      "Hello movie lover!",
      "Ay up me duck!",
      "Hola!"
    ];
  
    var index = Math.floor(Math.random() * hellos.length);
    
    return hellos[index];
  }
  
  function updateGreeting () {
    para.innerHTML = getGreeting();
  }

  var para = document.getElementById("greeting");
  
  updateGreeting();
  
})();



/* Further Adventures
 *
 * 1) Add a heading to the HTML,
 *    before the paragraph.
 *
 * 2) Give the heading an id attribute.
 *
 * 3) Use JavaScript to update the heading.
 *
 */

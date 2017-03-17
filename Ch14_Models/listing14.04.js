/* Get Programming with JavaScript
 * Listing 14.04
 * Map data (Kitchen example)
 */

(function () {
  
  var mapData = {
    "title" : "The Dark House",
    "firstPlace" : "The Kitchen",
  
    "places" : [
      {
        "title" : "The Kitchen",
        "description" : "You are in a kitchen. There is a disturbing smell.",
        "items" : [ "a piece of cheese" ],
        "exits" : [
          { "direction": "south", "to": "The Old Library" },
          { "direction": "west",  "to": "The Kitchen Garden" },
          { "direction": "east",  "to": "The Kitchen Cupboard" }
        ]
      },
      {
        "title" : "The Old Library",
        "description" : "You are in a library. Dusty books line the walls.",
        "items" : [ "a rusty key" ],
        "exits" : [
          { "direction" : "north", "to" : "The Kitchen" }
        ]
      },
      {
        "title" : "The Kitchen Garden",
        "description" : "You are in a small, walled garden.",
        "exits" : [
          { "direction" : "east", "to" : "The Kitchen" }
        ]
      },
      {
        "title" : "The Kitchen Cupboard",
        "description" : "You are in a cupboard. It's surprisingly roomy.",
        "items" : [ "a tin of Spam" ],
        "exits" : [
          { "direction" : "west", "to" : "The Kitchen" }
        ]
      }
    ]
  };

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.mapData = mapData;
  
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, type the following,
 *    pressing Enter after each one:
 *
 *    > var mapData = theCrypt.mapData
 *    > mapData
 *    > mapData.title
 *    > mapData.places
 *    > mapData.places[0]
 *    > mapData.places[0].description
 *
 * 3) Create a new empty place and assign it
 *    to a variable.
 *
 *    > var place = {}
 *
 * 4) Add title and description properties
 *    to the place.
 *
 *    > place.title = "The Games Room"
 *
 * 5) Add the place to the mapData places array.
 *
 *    > mapData.places.push(place)
 *
 */

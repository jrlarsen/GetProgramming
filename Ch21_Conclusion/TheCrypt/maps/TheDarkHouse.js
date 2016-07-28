/* Get Programming with JavaScript
 * Chapter 21
 * Map data (Kitchen example with exit)
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
          { "direction": "south",
            "to": "The Old Library",
            "challenge" : {
              "message" : "A zombie sinks its teeth into your neck.",
              "success" : "The zombie disintegrates into a puddle of goo.",
              "failure" : "The zombie is strangely resilient.",
              "requires" : "holy water",
              "itemConsumed" : true,
              "damage" : 20
            }
          },
          { "direction": "west",  "to": "The Kitchen Garden" },
          { "direction": "east",  "to": "The Kitchen Cupboard" },
          {
            "direction": "north",
            "to": "Outside",
            "challenge" : {
              "message" : "The way north is blocked by a locked door.",
              "success" : "The key turns smoothly in the lock.",
              "failure" : "That just doesn't work. The door won't open.",
              "requires" : "a rusty key",
              "itemConsumed" : false
            }
          }
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
        "items" : [ "holy water" ],
        "exits" : [
          { "direction" : "east", "to" : "The Kitchen" }
        ]
      },
      {
        "title" : "The Kitchen Cupboard",
        "description" : "You are in a cupboard. It's surprisingly roomy.",
        "items" : [ "a tin of spam" ],
        "exits" : [
          { "direction" : "west", "to" : "The Kitchen" }
        ]
      },
      {
        "title" : "Outside",
        "description" : "You are outside. Congratulations, you have finished the game!",
        "items" : [ "a sense of pride" ]
      }
    ]
  };

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.mapData = mapData;
  
})();

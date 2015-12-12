(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.mapData = {
    "title" : "The Dark House",
    "firstPlace" : "The Kitchen",
  
    "places" : [
      {
        "title" : "The Kitchen",
        "description" : "You are in a kitchen. There is a disturbing smell. There is a zombie to the south.",
        "items" : [ "a piece of cheese" ],
        "exits" : [
          {
            "direction": "south",
            "to": "The Old Library",
            "challenge" : {
              "message" : "The zombie sinks its teeth into your neck.",
              "success" : "The zombie disintegrates into a puddle of goo.",
              "failure" : "The zombie is strangely resilient.",
              "requires" : "holy water",
              "itemConsumed" : true,
              "damage" : 20
            }
          },
          {
            "direction": "west",
            "to": "The Kitchen Garden",
            "challenge" : {
              "message" : "The door is too stiff to open.",
              "success" : "The oil seeps into the hinges - they're just like new!",
              "failure" : "The door still won't budge",
              "requires" : "olive oil"
            }
          },
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
        "description" : "You are in a small, walled garden. There is a door and a dog.",
        "items" : [ "holy water"],
        "exits" : [
          {
            "direction" : "east",
            "to" : "The Kitchen",
            "challenge" : {
              "message" : "The dog is hungry. You might be dinner!",
              "success" : "The dog is confused by the pungent cheese.",
              "failure" : "It may take something stronger.",
              "requires" : "a piece of cheese",
              "itemConsumed" : true,
              "damage" : 10
            }
          },
          {
            "direction" : "west",
            "to" : "The Outside World",
            "challenge" : {
              "message" : "The door is locked.",
              "success" : "With a satisfying clunk, the key turns in the lock.",
              "failure" : "This is one sturdy, stubborn door.",
              "requires" : "a rusty key",
              "itemConsumed" : true
            }
          }
        ]
      },
      {
        "title" : "The Kitchen Cupboard",
        "description" : "You are in a cupboard. It's surprisingly roomy.",
        "items" : [ "olive oil" ],
        "exits" : [
          { "direction" : "west", "to" : "The Kitchen" }
        ]
      },
      {
        "title" : "The Outside World",
        "description" : "Congratulations, you made it out!\n\nThe adventure is over.",
        "gameOver" : true
      }
    ]
  };

})();
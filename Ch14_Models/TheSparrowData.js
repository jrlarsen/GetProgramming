
// Get Programming with JavaScript
// Chapter 14
// Map data for The Sparrow

(function () {
  
  mapData = {
    "title": "The Sparrow",
    "firstPlace": "The Entrance",
    "places": [
      
      {
        "title": "The Entrance",
        "description": "You are on the access ramp of a small space-freighter, The Sparrow. The entrance is open and the ramp leads inside.\n\nUse game.get() to pick up items.\n\nUse, for example, game.go('up') to move",
        "exits": [
          { "direction" : "up", "to" : "The Corridor" }
        ]
      },
      
      {
        "title": "The Corridor",
        "description": "You are in a corridor on the ship. The floor looks solid enough...",
        "exits": [
          { "direction" : "fore", "to" : "The Hub" },
          { "direction" : "under", "to" : "The Smugglers' Hold" }
        ]
      },

      {
        "title": "The Hub",
        "description": "You are in a spacious, circular room. It looks like a nice place to hang out.",
        "items": [ "a ball droid" ],
        "exits": [
          { "direction" : "aft", "to" : "The Corridor" },
          { "direction" : "pit", "to" : "The Maintenance Pit" },
          { "direction" : "sit", "to" : "The Games Area" },
          { "direction" : "fore", "to" : "The Cockpit Approach" }
        ]
      },
        
      {
        "title": "The Smugglers' Hold",
        "description": "You are in a secret hold under the floor panel. It's dark and gloomy. And there's an unsettling smell of damp fur.",
        "items": [ "a walking carpet" ],
        "exits": [
          { "direction" : "up", "to" : "The Corridor" },
          { "direction" : "fore", "to" : "The Maintenance Pit" }
        ]
      },
      
      {
        "title": "The Maintenance Pit",
        "description": "You are in a pit for ship repairs. Whoever's been looking after this ship hasn't been looking after this ship!",
        "items": [ "a hunk of junk" ],
        "exits": [
          { "direction" : "up", "to" : "The Hub" },
          { "direction" : "aft", "to" : "The Smugglers' Hold" }
        ]
      },
  
      {
        "title": "The Games Area",
        "description": "You are in the games area of The Hub. There's a game of holo-chess in progress. One creature holds another above its head before slamming it to the ground.",
        "items": [ "a droid's arm" ],
        "exits": [
          { "direction" : "stand", "to" : "The Hub" }
        ]
      },
      
      {
        "title": "The Cockpit Approach",
        "description": "You are in a corridor outside the cockpit. There is an access ladder to a pair of gun emplacements.",
        "exits": [
          { "direction" : "aft", "to" : "The Hub" },
          { "direction" : "up", "to" : "The Top Gun" },
          { "direction" : "down", "to" : "The Bottom Gun" },
          { "direction" : "fore", "to" : "The Cockpit" }]
      },

      {
        "title": "The Top Gun",
        "description": "You are in a gunner's chair. You grasp the control grips and whirl on the chair and quietly whisper 'pew. pew pew pew.'",
        "items": [ "cocky" ],
        "exits": [
          { "direction" : "down", "to" : "The Cockpit Approach" }
        ]
      },
      
      {
        "title": "The Bottom Gun",
        "description": "You are in a gunner's chair. You grasp the control grips but the gun is broken, stuck in one position. You'll need a great pilot to get any use out of it.",
        "exits": [
          { "direction" : "up", "to" : "The Cockpit Approach" }
        ]
      },
      
      {
        "title": "The Cockpit",
        "description": "You are in the cockpit. A bewildering array of buttons, switches, levers and lights confronts you. Out of the viewport you can see a small moon. Hang on...",
        "items": [ "a bad feeling about this" ],
        "exits": [
          { "direction" : "aft", "to" : "The Cockpit Approach" }
        ]
      },
    ]
  };
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.mapData = mapData;
  
})();

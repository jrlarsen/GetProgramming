// jsbin.com/rovaje/edit?js,console
// Adventures in Code
// Listing 7.01

(function() {
  
  function Challenge(item, challengeText, successText, failureText) {
    this.item = item;
    this.challengeText = challengeText;
    this.successText = successText;
    this.failureText = failureText;
  }
  
  AdventuresInCode.Challenge = Challenge;
  
})();

var challenge = new AdventuresInCode.Challenge(
  "a rusty key",
  "The door is locked.",
  "It is quite stiff but eventually the key turns and the door opens.",
  "That didn't work. The door is still locked."
);

var kitchen = new AdventuresInCode.Location(
  "The Kitchen",
  "You are in a large kitchen. There is a strong stench of decay"
);

var game = {
    location: null,
    player: null,

    start: function(startLocation, player) {
        game.location = startLocation;
        game.player = player;
        game.log();
    },

    me: function() {
        game.player.log();
    },

    here: function() {
        game.location.log();
    },

    get: function(itemIndex) {
        var item = game.location.items[itemIndex];
        if (item !== undefined) {
            game.location.removeItem(item);
            game.player.addItem(item);
            console.log(game.player.name + " gets " + item);
        } else {
            console.log("You search in vain for that item does not exist.");
        }
    },

    drop: function(itemIndex) {
        var item = game.player.items[itemIndex];
        if (item !== undefined) {
            game.location.addItem(item);
            game.player.removeItem(item);
            console.log(game.player.name + " drops " + item);
        } else {
            console.log("You do not have that item.");
        }
    },

    go : function(direction) {
        if (game.location) {
            if (game.location.exits[direction] !== undefined) {
                game.location = game.location.exits[direction];
                game.here();
            } else {
                console.log("*** There is no exit in that direction. ***");
            }
            return "-->";
        } else {
            throw new Error("The game needs a current location before we can go.");
        }
    },

    log: function() {
        game.me();
        game.here();
    }
};

game.start(AdventuresInCode.startLocation, new AdventuresInCode.Player("Dax"));
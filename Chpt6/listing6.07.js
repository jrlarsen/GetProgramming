// Adventures in Code
// Listing 6.07
// http://jsbin.com/rojobe/edit?js,console

var Location = AdventuresInCode.Location;
var Player = AdventuresInCode.Player;

var kitchen = new Location(
        "The Kitchen",
        "You are in a large kitchen. There is the stench of decay."
    ),

    library = new Location(
        "The Library",
        "You are in a dusty library. Ancient books line the walls."
    ),

    player = new Player("Dax");

kitchen.addExit("north", library);
library.addExit("south", kitchen);

kitchen.addItem("a cleaver");
library.addItem("a rusty key");

player.addItem("a sword");

var game = {
    location: kitchen,
    player: player,

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

game.log();
// Adventures In Code
// Listing 6.08
// http://jsbin.com/walahu/edit?js,console

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
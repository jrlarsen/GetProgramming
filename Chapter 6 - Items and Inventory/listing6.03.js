// Adventures In Code
// Listing 6.03
// http://jsbin.com/kuzosu/edit?js,console

var dungeon = new Location("The Dungeon", "You are in a dark, dank dungeon.");
var player = new Player("Kandra");

var game = {
    location: dungeon,
    player: player,

    me: function() {
        game.player.logItems();
    },

    here: function() {
        game.location.logItems();
    }
};

game.me();
game.here();

player.addItem("a very sharp sword");
dungeon.addItem("a mysterious sapphire");

game.me();
game.here();
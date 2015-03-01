// jsbin.com/gefeso/edit?js,console
// Adventures In Code
// Listing 6.04

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
  }
};

player.addItem("a very sharp sword");
dungeon.addItem("a mysterious sapphire");

game.me();
game.here();

game.get(0);

game.me();
game.here();
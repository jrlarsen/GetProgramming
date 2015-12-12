/* Get Programming with JavaScript
 * Listing 14.02
 * A Player view
 */

(function () {

  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }

  theCrypt.playerView = (function () {
    var renderName = function (playerData) {
      return playerData.name;
    };
  
    var renderHealth = function (playerData) {
      return playerData.name + " has health " + playerData.health;
    };
  
    var renderItems = function (playerData) {
      var itemsString = "";
      var items = playerData.items;
    
      if (items.length > 0) {
        itemsString += "Items:\n";
        items.forEach(function (item, i) {
          itemsString += "(" + (i + 1) + ") ";
          itemsString += item + "\n";
        });
      }
    
      return itemsString;
    };
  
    var renderPlayer = function (playerData) {
      var playerString = "\n";
    
      playerString += renderName(playerData) + "\n";
      playerString += renderHealth(playerData) + "\n";    
      playerString += renderItems(playerData);
    
      return playerString;
    };
  
    var render = function (player) {
      console.log(renderPlayer(player.getData()));
    };
  
    return {
      render: render
    };
  })();
  
})();
  


/* Further Adventures
 *
 * If you look in the HTML panel you'll
 * see that the Player module is loaded.
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, create
 *    a player.
 *
 *    > var p1 = new theCrypt.Player("Bob", 20)
 *    > p1.getData()
 *
 * 3) Use the player view to display
 *    info about the player.
 *
 *    > theCrypt.playerView.render(p1)
 *
 * 4) Add some items to the player.
 *
 *    > p1.addItem("a horse")
 *    > p1.addItem("a cow")
 *
 * 5) Render the player info again.
 *
 *    > theCrypt.playerView.render(p1)
 *
 */
/* Get Programming with JavaScript
 * Listing 15.05
 * A player view
 */

(function () {

  var getNameInfo = function (playerData) {
    return playerData.name;
  };

  var getHealthInfo = function (playerData) {
    return "(" + playerData.health + ")";
  };
  
  var getItemsInfo = function (playerData) {
    var itemsString = "Items:" + spacer.newLine();
       
    playerData.items.forEach(function (item, i) {
      itemsString += "   - " + item + spacer.newLine();
    });

    return itemsString;
  };
  
  var getTitleInfo = function (playerData) {
    return getNameInfo(playerData) + " " + getHealthInfo(playerData);
  };

  var getInfo = function (playerData) {
    var info = spacer.box(getTitleInfo(playerData), 40, "*");
    info += "  " + getItemsInfo(playerData);
    info += spacer.line(40, "*");
    info += spacer.newLine();

    return info;
  }; 
  
  var render = function (player) {
    console.log(getInfo(player.getData()));
  };  
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.playerView = {
    render: render
  };
  
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

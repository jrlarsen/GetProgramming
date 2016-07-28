// Get Programming with JavaScript
// Chapter 21
// A player view using templates
// Depends on gpwj.templates

(function () {
  "use strict";

  var playerDiv = document.getElementById("player");
  var playerScript = document.getElementById("playerTemplate");
  var itemScript = document.getElementById("itemTemplate");
  
  var playerTemplate = playerScript.innerHTML;
  var itemTemplate = itemScript.innerHTML;
  
  function render (player) {
    var data = player.getData();
    var itemsDiv;
    
    var items = data.items.map(function (itemName) {
      return { item : itemName };
    });
    
    playerDiv.innerHTML = gpwj.templates.fill(playerTemplate, data);
    
    itemsDiv = document.getElementById("playerItems");
    itemsDiv.innerHTML = gpwj.templates.fillList(itemTemplate, items);
  }
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.playerView =  {
    render: render
  };
  
})();

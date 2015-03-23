// jsbin.com/sopizo/edit?js,console
// Adventures in Code
// Listing 6.06

function Player(name) {
    this.name = name;
    this.items = [];
}

Player.prototype = {
    addItem: function(itemName) {
        if (this.items.indexOf(itemName) === -1) {
            this.items.push(itemName);
        }
    },

    removeItem: function(itemName) {
        var itemIndex = this.items.indexOf(itemName);
        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    },

    logItems: function() {
        var i, n;

        if (this.items.length) {
            console.log(this.name + " has:");
            for (i = 0, n = this.items.length; i < n; i++) {
                console.log("(" + i + ") " + this.items[i]);
            }
        } else {
            console.log(this.name + " has no items.");
        }
    },
  
    log: function() {
      console.log(this.name);
      this.logItems();
    }
};

var player = new Player("Brin");
player.addItem("a sword");
player.addItem("a rusty key");

player.log();
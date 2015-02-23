# Items and Inventory

[jsbin: Listing 6.01](http://jsbin.com/neraku/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
    this.numberOfExits = 0;
    this.items = [];
}

Location.prototype = {
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
            console.log(this.title + " has:");
            for (i = 0, n = this.items.length; i < n; i++) {
                console.log("(" + i + ") " + this.items[i]);
            }
        } else {
            console.log(this.title + " has no items.");
        }
    }
};

var dungeon = new Location("The Dungeon", "You are in a dark, dank dungeon.");
dungeon.addItem("a mysterious sapphire");
dungeon.addItem("a stick");

dungeon.logItems();
```


[jsbin: Listing 6.02](http://jsbin.com/vigege/edit?js,console)
```javascript
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
    }
};

var player = new Player("Kandra");
player.logItems();

player.addItem("a mysterious sapphire");
player.addItem("a stick");
player.logItems();
```


[jsbin: Listing 6.03](http://jsbin.com/kuzosu/edit?js,console)
```javascript
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
```


[jsbin: Listing 6.04](http://jsbin.com/gefeso/edit?js,console)
```javascript
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
```



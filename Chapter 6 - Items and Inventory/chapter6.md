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


[jsbin: Listing 6.05](http://jsbin.com/secase/edit?js,console)
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

    addExit: function(title, destination) {
        if (this.exits[title] === undefined) {
            this.exits[title] = destination;
            this.numberOfExits++;
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
    },

    logExits: function() {
        var title;

        if (this.numberOfExits) {
            console.log("Exits from " + this.title);
            for (title in this.exits) {
                console.log("\t\t" + title);
            }
        } else {
            console.log("There are no exits. You are trapped!");
        }
    },

    log: function() {
        console.log(this.title + "...");
        console.log(this.description);
        this.logItems();
        this.logExits();
    }
};

var dungeon = new Location("The Dungeon", "You are in a dark, dank dungeon.");
var cave = new Location("The Cave", "You are in a dismal cave. It is cold.");
dungeon.addExit("north", cave);
dungeon.addItem("a rotten barrel");
dungeon.addItem("a glittering rock");

dungeon.log();
```


[jsbin: Listing 6.06](http://jsbin.com/sopizo/edit?js,console)
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
```


[jsbin: Listing 6.07](http://jsbin.com/rojobe/edit?js,console)
```javascript
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
```


[jsbin: Listing 6.08](http://jsbin.com/walahu/edit?js,console)
```javascript
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
```



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
            for (i = 0, n = this.items.length; i < n; i++) {
                console.log("(" + i + ") " + this.items[i]);
            }
        } else {
            console.log("This location has no items.");
        }
    }
};

var dungeon = new Location("The Dungeon", "You are in a dark, dank dungeon.");
dungeon.addItem("a mysterious sapphire");
dungeon.addItem("a stick");

dungeon.logItems();
```



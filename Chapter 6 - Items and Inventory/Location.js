(function() {

    function Location(title, description) {
        this.title = title;
        this.description = description;
        this.exits = {};
        this.numberOfExits = 0;
        this.items = [];
    }

    Location.prototype = {
        addItem: function (itemName) {
            if (this.items.indexOf(itemName) === -1) {
                this.items.push(itemName);
            }
        },

        removeItem: function (itemName) {
            var itemIndex = this.items.indexOf(itemName);
            if (itemIndex !== -1) {
                this.items.splice(itemIndex, 1);
            }
        },

        addExit: function (title, destination) {
            if (this.exits[title] === undefined) {
                this.exits[title] = destination;
                this.numberOfExits++;
            }
        },

        logItems: function () {
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

        logExits: function () {
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

        log: function () {
            console.log(this.title + "...");
            console.log(this.description);
            this.logItems();
            this.logExits();
        }
    };

    AdventuresInCode = AdventuresInCode || {};
    AdventuresInCode.Location = Location;

})();
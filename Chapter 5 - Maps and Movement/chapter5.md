# Maps and Movement


[jsbin: Listing 5.01](http://jsbin.com/yabosi/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
}

var location1 = new Location("The Kitchen", "You are in a large kitchen. There is a strong stench of decay.");

var location2 = new Location("The Library", "You are in a dusty, old library. Ancient books line every wall.");

location1.exits["north"] = location2;

console.log(location1);
```


[jsbin: Listing 5.02](http://jsbin.com/gugami/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
}

Location.prototype.addExit = function(title, destination) {
    this.exits[title] = destination;
};

var location1 = new Location("The Kitchen", "You are in a large kitchen. There is a strong stench of decay.");

var location2 = new Location("The Library", "You are in a dusty, old library. Ancient books line every wall.");

location1.addExit("north", location2);

console.log(location1);
```


[jsbin: Listing 5.03](http://jsbin.com/fuwiju/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
}

Location.prototype.addExit = function(title, destination) {
    this.exits[title] = destination;
};

Location.prototype.log = function() {
    var title;

    console.log("--------------------------------------");
    console.log(this.title + "...");
    console.log(this.description);

    console.log("Exits:");
    for (title in this.exits) {
        console.log("\t\t" + title);
    }
};

var location1 = new Location("The Kitchen", "You are in a large kitchen. There is a strong stench of decay.");

var location2 = new Location("The Library", "You are in a dusty, old library. Ancient books line every wall.");

location1.addExit("north", location2);

location1.log();
```


[jsbin: Listing 5.04](http://jsbin.com/cigafu/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
}

Location.prototype.addExit = function(title, destination) {
    this.exits[title] = destination;
};

Location.prototype.log = function() {
    var title;

    console.log("--------------------------------------");
    console.log(this.title + "...");
    console.log(this.description);

    console.log("Exits:");
    for (title in this.exits) {
        console.log("\t\t" + title);
    }
};

var currentLocation;

var location1 = new Location("The Kitchen", "You are in a large kitchen. There is a strong stench of decay.");

var location2 = new Location("The Library", "You are in a dusty, old library. Ancient books line every wall.");

location1.addExit("north", location2);


currentLocation = location1;

currentLocation.log();
```


[jsbin: Listing 5.05](http://jsbin.com/tesedo/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
}

Location.prototype.addExit = function(title, destination) {
    this.exits[title] = destination;
};

Location.prototype.log = function() {
    var title;

    console.log(this.title + "...");
    console.log(this.description);

    console.log("Exits:");
    for (title in this.exits) {
        console.log("\t\t" + title);
    }
};

var map = {
    go : function(direction) {
        if (map.currentLocation.exits[direction] !== undefined) {
            map.currentLocation = map.currentLocation.exits[direction];
        }
        map.log();
    },

    log : function() {
        map.currentLocation.log();
    }
};

var location1 = new Location(
    "The Kitchen",
    "You are in a large kitchen. There is a strong stench of decay."
);

var location2 = new Location(
    "The Library",
    "You are in a dusty, old library. Ancient books line every wall."
);

location1.addExit("north", location2);
location2.addExit("south", location1);

map.currentLocation = location1;
map.log();
```


[jsbin: Listing 5.06](http://jsbin.com/jakeci/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.exits = {};
    this.numberOfExits = 0;
}

Location.prototype.addExit = function(title, destination) {
    if (this.exits[title] === undefined) {
        this.exits[title] = destination;
        this.numberOfExits++;
    }
};

Location.prototype.log = function() {
    var title;

    console.log(this.title + "...");
    console.log(this.description);

    if (this.numberOfExits) {
        console.log("Exits:");
        for (title in this.exits) {
            console.log("\t\t" + title);
        }
    } else {
        console.log("There are no exits. You are trapped!");
    }
};

var map = {
    currentLocation : null,

    go : function(direction) {
        if (map.currentLocation) {
            if (map.currentLocation.exits[direction] !== undefined) {
                map.currentLocation = map.currentLocation.exits[direction];
                map.log();
            } else {
                console.log("*** There is no exit in that direction. ***");
            }
            return "-->";
        } else {
            throw new Error("The map needs a current location before we can go.");
        }
    },

    log : function() {
        if (map.currentLocation) {
            map.currentLocation.log();
        } else {
            throw new Error("A current location has not been set for the map.");
        }
    }
};

var location1 = new Location(
    "The Kitchen",
    "You are in a large kitchen. There is a strong stench of decay."
);

var location2 = new Location(
    "The Library",
    "You are in a dusty, old library. Ancient books line every wall."
);

location1.addExit("north", location2);
location2.addExit("south", location1);

map.currentLocation = location1;
map.log();
```


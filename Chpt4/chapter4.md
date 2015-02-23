# Locations and Loops


[jsbin: Listing 4.01](http://jsbin.com/dekiva/edit?js,console)
```javascript
var location1 = {
    title: "The Library",
    description: "You are in a dusty library. Old books line every wall.",
    items: [ "an ancient key" ],
    exits: [ "north", "east" ]
};

console.log(location1);
```


[jsbin: Listing 4.02](http://jsbin.com/liviro/edit?js,console)
```javascript
function log(location) {
    console.log(location.title + "...");
    console.log(location.description);

    if (location.items.length > 0) {
        console.log("Items: " + location.items.join(', ') + '.');
    } else {
        console.log("There are no items here.");
    }

    console.log("Exits: " + location.exits.join(', ') + '.');
}

var location1 = {
    title: "The Library",
    description: "You are in a dusty library. Old books line every wall.",
    items: [ "an ancient key" ],
    exits: [ "north", "east" ]
};

log(location1);
```

### Constructing Location Objects

[jsbin: Listing 4.03](http://jsbin.com/yoluyi/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

console.log(location1.title);
console.log(location1.description);
```

### The log Method for Locations

[jsbin: Listing 4.04](http://jsbin.com/lotoxo/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;

    this.log = function() {
        console.log(this.title + "...");
        console.log(this.description);
    };
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.log();
```

### Using Arrays to hold Items and Exits

[jsbin: Listing 4.05](http://jsbin.com/xisuku/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];

    this.log = function() {
        console.log('------------------------------------');
        console.log(this.title + "...");
        console.log(this.description);

        if (this.items.length > 0) {
            console.log("Items: " + this.items.join(', ') + '.');
        } else {
            console.log("There are no items here.");
        }

        if (this.exits.length > 0) {
            console.log("Exits: " + this.exits.join(', ') + '.');
        } else {
            console.log("There are no exits. You are trapped!");
        }
    };
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.log();

location1.exits.push("north");
location1.exits.push("east");

location1.log();

location1.items.push("a rusty key");

location1.log();
```

### Using a Method to Add Exits

[jsbin: Listing 4.06](http://jsbin.com/maviza/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];

    this.log = function() {
        console.log('------------------------------------');
        console.log(this.title + "...");
        console.log(this.description);

        if (this.items.length > 0) {
            console.log("Items: " + this.items.join(', ') + '.');
        } else {
            console.log("There are no items here.");
        }

        if (this.exits.length > 0) {
            console.log("Exits: " + this.exits.join(', ') + '.');
        } else {
            console.log("There are no exits. You are trapped!");
        }
    };

    this.addExit = function(newExit) {
        if (this.exits.indexOf(newExit) === -1) {
            this.exits.push(newExit);
        }
    };
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.log();

location1.addExit("north");
location1.addExit("east");
location1.addExit("north");

location1.log();
```

### Adding and Removing Items

[jsbin: Listing 4.07](http://jsbin.com/laziso/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];

    this.log = function() {
        console.log('------------------------------------');
        console.log(this.title + "...");
        console.log(this.description);

        if (this.items.length > 0) {
            console.log("Items: " + this.items.join(', ') + '.');
        } else {
            console.log("There are no items here.");
        }

        if (this.exits.length > 0) {
            console.log("Exits: " + this.exits.join(', ') + '.');
        } else {
            console.log("There are no exits. You are trapped!");
        }
    };

    this.addExit = function(newExit) {
        if (this.exits.indexOf(newExit) === -1) {
            this.exits.push(newExit);
        }
    };

    this.addItem = function(item) {
        if (this.items.indexOf(item) === -1) {
            this.items.push(item);
        }
    };

    this.removeItem = function(item) {
        var itemIndex = this.items.indexOf(item);

        if (itemIndex !== -1) {
            this.items.splice(itemIndex, 1);
        }
    };
}

var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.addItem("a rusty key");
location1.addItem("a torch");

location1.log();

location1.removeItem("a torch");

location1.log();
```


### Prototypes

[jsbin: Listing 4.08](http://jsbin.com/quliha/edit?js,console)
```javascript
function Location(title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];
}

Location.prototype.log = function() {
    console.log('------------------------------------');
    console.log(this.title + "...");
    console.log(this.description);

    if (this.items.length > 0) {
        console.log("Items: " + this.items.join(', ') + '.');
    } else {
        console.log("There are no items here.");
    }

    if (this.exits.length > 0) {
        console.log("Exits: " + this.exits.join(', ') + '.');
    } else {
        console.log("There are no exits. You are trapped!");
    }
};

Location.prototype.addExit = function(newExit) {
    if (this.exits.indexOf(newExit) === -1) {
        this.exits.push(newExit);
    }
};

Location.prototype.addItem = function(item) {
    if (this.items.indexOf(item) === -1) {
        this.items.push(item);
    }
};

Location.prototype.removeItem = function(item) {
    var itemIndex = this.items.indexOf(item);

    if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
    }
};


var location1 = new Location("The Library", "You are in a dusty library. Old books line every wall.");

location1.addItem("a rusty key");
location1.addItem("a torch");

location1.log();

location1.removeItem("a torch");
location1.addExit("north");

location1.log();
```

# Chapter 09 - Constructors: building objects with functions


### Using a function to create an object
[JS Bin: Listing 9.01](http://jsbin.com/jiroyo/edit?js,console) - jiroyo
```javascript
/* Get Programming with JavaScript
 * Listing 9.01
 * Using a function to create an object
 */

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;
  
    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

console.log(planet1.name);
console.log(planet1.position);
console.log(planet1.type);



/* Further Adventures
 *
 * 1) Build a second planet,
 *    using the buildPlanet function.
 *
 * 2) Log its name and type.
 *
 */
```


### Adding methods to our constructed object
[JS Bin: Listing 9.02](http://jsbin.com/zogure/edit?js,console) - zogure
```javascript
/* Get Programming with JavaScript
 * Listing 9.02
 * Adding methods to our constructed object
 */

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };
  
    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

planet1.showPlanet();



/* Further Adventures
 *
 * 1) Create a second planet.
 *    Use the buildPlanet function.
 *
 * 2) Call the showPlanet method on your
 *    new planet.
 *
 */
```


### An array of constructed objects
[JS Bin: Listing 9.03](http://jsbin.com/jiweze/edit?js,console) - jiweze
```javascript
/* Get Programming with JavaScript
 * Listing 9.03
 * An array of constructed objects
 */

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
      };

    return planet;
};

var planets = [
    buildPlanet( "Jupiter", 5, "Gas Giant" ),
    buildPlanet( "Neptune", 8, "Ice Giant" ),
    buildPlanet( "Mercury", 1, "Terrestrial" )
];

planets.forEach(function (planet) {
    planet.showPlanet();
});



/* Further Adventures
 *
 * 1) Add two more planets to the planets array.
 *
 * 2) Run the program to display them.
 *
 * 3) Add code to visually separate each planet
 *    from the next.
 *
 */
```


### A Planet constructor
[JS Bin: Listing 9.04](http://jsbin.com/bixico/edit?js,console) - bixico
```javascript
/* Get Programming with JavaScript
 * Listing 9.04
 * A Planet constructor
 */

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );

planet.showPlanet();



/* Further Adventures
 *
 * 1) Use the Planet constructor function
 *    to create a second planet.
 *    Don't forget the 'new' keyword.
 *
 * 2) Call the showPlanet method on your
 *    newly created planet.
 *
 */
```


### Including a moons array in our Planet constructor
[JS Bin: Listing 9.05](http://jsbin.com/wiguya/edit?js,console) - wiguya
```javascript
/* Get Programming with JavaScript
 * Listing 9.05
 * Including a moons array in our Planet constructor
 */

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );

planet.addMoon("Io");
planet.addMoon("Europa");

planet.showPlanet();



/* Further Adventures
 *
 * 1) Create a second planet.
 *    Make one up if you like.
 *
 * 2) Add three moons to the second planet.
 *
 * 3) Call the showPlanet method
 *    on the second planet.
 *
 * 4) Add a removeMoon method
 *    that removes the last moon
 *    from the moons array.
 *
 */
```


### Creating multiple Planets with our constructor
[JS Bin: Listing 9.06](http://jsbin.com/wewewe/edit?js,console) - wewewe
```javascript
/* Get Programming with JavaScript
 * Listing 9.06
 * Creating multiple Planets with our constructor
 */

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");

var planet3 = new Planet("Mercury", 1, "Terrestrial");

[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
});



/* Further Adventures
 *
 * 1) Add a new moon to each planet.
 *
 * 2) Create a showMoons method in the
 *    Planet constructor. It should
 *    show the moons with their index.
 *
 *    (0) Io
 *    (1) Europa
 *
 * 3) Update showPlanet to use showMoons
 *    rather than join for the moons.
 *
 * 4) Create a getMoon method that
 *    returns the moon at a given
 *    index.
 *
 *    > planet1.getMoon(1)
 *      Europa
 *
 */
```


### A quiz question constructor
[JS Bin: Listing 9.07](http://jsbin.com/vuyesi/edit?js,console) - vuyesi
```javascript
/* Get Programming with JavaScript
 * Listing 9.07
 * A quiz question constructor
 */

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");

question1.showQuestion();



/* Further Adventures
 *
 * 1) Add a fifth option to question1.
 *
 * 2) Create two more questions.
 *
 * 3) At the console prompt type
 *    question2.showQuestion();
 *    Press Enter
 *
 * 4) At the console prompt type
 *    question2.answer;
 *    Press Enter
 *
 */
```


### A calendar event constructor
[JS Bin: Listing 9.08](http://jsbin.com/gemiyu/edit?js,console) - gemiyu
```javascript
/* Get Programming with JavaScript
 * Listing 9.08
 * A calendar event constructor
 */

var CalendarEvent = function (title, startDate, startTime, endTime) {
    this.title = title;
    this.startDate = startDate;
    this.startTime = startTime;
    this.endTime = endTime;
  
    this.showEvent = function () {
        var dateString = [
            this.startDate,
            ", from ",
            this.startTime,
            " to ",
            this.endTime
        ].join("");
      
        console.log(this.title);
        console.log(dateString);
    };
};

var calEvent = new CalendarEvent(
    "Annual Review",
    "3/5/16",
    "4.00pm",
    "5.00pm"
);

calEvent.showEvent();



/* Further Adventures
 *
 * 1) Add a second event.
 *
 * 2) Call the showEvent method on your
 *    new calendar event.
 *
 * 3) Update the showEvent method so that
 *    its output looks like this:
 *    Annual Review: 3/5/16 - (4.00pm - 5.00pm)
 *
 */
```


### A Place constructor part 1
[JS Bin: Listing 9.09](http://jsbin.com/pogive/edit?js,console) - pogive
```javascript
/* Get Programming with JavaScript
 * Listing 9.09
 * A Place constructor part 1
 */

var Place = function (title, description) {
  this.title = title;
  this.description = description;

  this.getInfo = function () {
    var infoString = this.title + "\n";
    infoString += this.description + "\n";
    return infoString;
  };
};

var library = new Place(
  "The Old Library",
  "You are in a library. Dusty books line the walls."
);

console.log(library.getInfo());



/* Further Adventures
 *
 * 1) Add a second place.
 *
 * 2) Call the getInfo method on your
 *    new place.
 *
 */
```


### A Place constructor part 2
[JS Bin: Listing 9.10](http://jsbin.com/qemica/edit?js,console) - qemica
```javascript
/* Get Programming with JavaScript
 * Listing 9.10
 * A Place constructor part 2
 */

// The spacer namespace

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },

  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};


// The Place constructor

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];

    this.getItemsInfo = function () {
        var itemsString = "Items: " + spacer.newLine();

        this.items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += spacer.newLine();
        });

        return itemsString;
    };

    this.getInfo = function () {
        var infoString = spacer.box(this.title, this.title.length + 4, "=");
        infoString += this.description;
        infoString += spacer.newLine();
        infoString += this.getItemsInfo();
        infoString += spacer.line(40, "=") + spacer.newLine();
        return infoString;
    };

    this.addItem = function (item) {
        this.items.push(item);
    };
};

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

library.addItem("a rusty key");

console.log(library.getInfo());




/* Further Adventures
 *
 * 1) Add a second place and some items.
 *
 * 2) Call the getInfo method on your
 *    new place.
 *
 * The indexOf array method returns the index
 * of an item in an array.
 * this.items.indexOf("a rusty key");
 *
 * 3) Test indexOf on the console with
 *    library.items.indexOf("a rusty key");
 *
 * An item can be removed from an array with
 * the splice method.
 * this.items.splice(indexOfItem, 1);
 *
 * 4) Test splice on the console with
 *    library.items.splice(0, 1);
 *    library.getInfo();
 *
 * 5) Add a removeItem method to the constructor
 *    function that removes a specified item.
 *    e.g. library.removeItem("a rusty key");
 *
 */
```


### A Place constructor part 3
[JS Bin: Listing 9.11](http://jsbin.com/parale/edit?js,console) - parale
```javascript
/* Get Programming with JavaScript
 * Listing 9.11
 * A Place constructor part 3
 */

// The spacer namespace

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },

  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};


// The Place constructor

var Place = function (title, description) {
    var newLine = spacer.newLine();

    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];

    this.getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        this.items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };

    this.getExitsInfo = function () {
        var exitsString = "Exits from " + this.title;
        exitsString += ":" + newLine;

        this.exits.forEach(function (exit) {
            exitsString += "   - " + exit.title;
            exitsString += newLine;
        });

        return exitsString;
    };

    this.getTitleInfo = function () {
        return spacer.box(
            this.title,
            this.title.length + 4,
            "="
        );
    };

    this.getInfo = function () {
        var infoString = this.getTitleInfo();
        infoString += this.description;
        infoString += newLine + newLine;
        infoString += this.getItemsInfo() + newLine;
        infoString += this.getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };


    this.showInfo = function () {
        console.log(this.getInfo());
    };

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.addExit = function (exit) {
        this.exits.push(exit);
    };
};


// Test the Place constructor

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

var kitchen = new Place(
    "The Kitchen",
    "You are in the kitchen. There is a disturbing smell."
);

var hall = new Place(
    "The Main Hall",
    "You are in a large hall. It is strangely empty."
);

library.addItem("a rusty key");
library.addExit(kitchen);
library.addExit(hall);

library.showInfo();



/* Further Adventures
 *
 * 1) Add a fourth place.
 *
 * 2) Add some items to your new place.
 *
 * 3) Add some exits to your new place.
 *
 * 4) Use showInfo to display info
 *    about your new place.
 *
 */
```


### A Player constructor function
[JS Bin: Listing 9.12](http://jsbin.com/leqahi/edit?js,console) - leqahi
```javascript
/* Get Programming with JavaScript
 * Listing 9.12
 * A Player constructor function
 */

// The spacer namespace

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },

  wrap : function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },

  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  }
};


// The Place constructor

var Place = function (title, description) {
    var newLine = spacer.newLine();

    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];

    this.getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        this.items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };

    this.getExitsInfo = function () {
        var exitsString = "Exits from " + this.title;
        exitsString += ":" + newLine;

        this.exits.forEach(function (exit) {
            exitsString += "   - " + exit.title;
            exitsString += newLine;
        });

        return exitsString;
    };

    this.getTitleInfo = function () {
        return spacer.box(
            this.title,
            this.title.length + 4,
            "="
        );
    };

    this.getInfo = function () {
        var infoString = this.getTitleInfo();
        infoString += this.description;
        infoString += newLine + newLine;
        infoString += this.getItemsInfo() + newLine;
        infoString += this.getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };


    this.showInfo = function () {
        console.log(this.getInfo());
    };

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.addExit = function (exit) {
        this.exits.push(exit);
    };
};


// The Player constructor

var Player = function (name, health) {
  var newLine = spacer.newLine();

  this.name = name;
  this.health = health;
  this.items = [];
  this.place = null;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.getNameInfo = function () {
    return this.name;
  };

  this.getHealthInfo = function () {
    return this.name + " has health " + this.health;
  };

  this.getPlaceInfo = function () {
    return this.name + " is in " + this.place.title;
  };

  this.getItemsInfo = function () {
    var itemsString = "Items:" + newLine;

    this.items.forEach(function (item, i) {
      itemsString += "   - " + item + newLine;
    });

    return itemsString;
  };

  this.getInfo = function (character) {
    var place = this.getPlaceInfo();
    var health = this.getHealthInfo();
    var longest = Math.max(place.length, health.length) + 4;

    var info = spacer.box(this.getNameInfo(), longest, character);
    info += spacer.wrap(place, longest, character);
    info += spacer.newLine() + spacer.wrap(health, longest, character);
    info += newLine + spacer.line(longest, character);

    info += newLine;
    info += "  " + this.getItemsInfo();
    info += newLine;
    info += spacer.line(longest, character);
    info += newLine;

    return info;
  };

  this.showInfo = function (character) {
    console.log(this.getInfo(character));
  };
};


// Testing Player

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

var player1 = new Player("Kandra", 50);
player1.place = library;
player1.addItem("a rusty key");
player1.addItem("The Sword of Doom");

player1.showInfo("=");



/* Further Adventures
 *
 * 1) Test out the constructor by
 *    creating a couple of Player objects.
 *
 * 2) Add items for each player.
 *
 * 3) Display each player's info.
 *
 * 4) Write a method to drop the last
 *    item in a player's items array.
 *
 */
```

# Chapter 10 - Bracket notation: flexible property names


### Bracket notation for object properties
[JS Bin: Listing 10.01](http://jsbin.com/kipedu/edit?js,console)  - kipedu
```javascript
/* Get Programming with JavaScript
 * Listing 10.01
 * Bracket notation for object properties
 */

var ages = {};

ages["Kandra"] = 56;
ages["Dax"] = 21;

console.log(ages.Kandra);
console.log(ages.Dax);



/* Further Adventures
 *
 * 1) Add a couple more properties to
 *    the ages object.
 *
 * 2) Change the calls to console.log
 *    to use square bracket notation as well.
 *
 */
```



### Longer strings as keys
[JS Bin: Listing 10.02](http://jsbin.com/toviya/edit?js,console) - toviya
```javascript
/* Get Programming with JavaScript
 * Listing 10.02
 * Longer strings as keys
 */

var ages = {};

ages["Kandra Smith"] = 56;
ages["Dax Aniaku"] = 21;

console.log(ages["Kandra Smith"]);
console.log(ages["Dax Aniaku"]);



/* Further Adventures
 *
 * 1) Add a couple more properties to the ages object.
 *    Include spaces and other characters
 *    in the keys.
 *
 * 2) Log the values to the console.
 *
 * 3) Try changing the properties so they
 *    use dot notation. What happens?
 *
 */
```



### Using a function to add ages
[JS Bin: Listing 10.03](http://jsbin.com/pipuva/edit?js,console) - pipuva
```javascript
/* Get Programming with JavaScript
 * Listing 10.03
 * Using a function to add ages
 */

var ages = {};

var addAge = function (name, age) {
    ages[name] = age;
};

addAge("Kandra Smith", 56);
addAge("Dax Aniaku", 21);

console.log(ages["Kandra Smith"]);
console.log(ages["Dax Aniaku"]);



/* Further Adventures
 *
 * 1) Use the addAge function to add a couple
 *    more people and their ages.
 *
 * 2) Log the new info to the console.
 *
 * 3) At the console prompt,
 *    type in 'ages' and press Enter.
 *    The ages object should be displayed.
 *
 * 4) Still at the console,
 *    use the addAge function to add new info.
 *    e.g. > addAge("Bob", 99);
 *
 * 5) Type 'ages' again to see the updated
 *    ages object.
 *
 */
```



### Using Object.keys
[JS Bin: Listing 10.04](http://jsbin.com/mehuno/edit?js,console) - mehuno
```javascript
/* Get Programming with JavaScript
 * Listing 10.04
 * Using Object.keys
 */

var ages = {
    "Kandra Smith" : 56,
    "Dax Aniaku"   : 210,
    "Blinky"       : 36
};

var keys = Object.keys(ages);

console.log(keys);



/* Further Adventures
 *
 * 1) Add a couple more key-value pairs
 *    to the ages object.
 *
 * 2) Add another property to the ages object
 *    using square bracket notation.
 *    Add the code before the call to
 *    Object.keys, so the new key will
 *    be logged to the console.
 *
 * 3) At the console prompt,
 *    access individual elements of the
 *    keys array by using index notation.
 *    e.g. > keys[2];
 *
 */
```



### Iterating over Object.keys with forEach
[JS Bin: Listing 10.05](http://jsbin.com/seteco/edit?js,console) - seteco
```javascript
/* Get Programming with JavaScript
 * Listing 10.05
 * Iterating over Object.keys with forEach
 */

var ages = {
    "Kandra Smith" : 56,
    "Dax Aniaku"   : 21,
    "Blinky"       : 36
};

var keys = Object.keys(ages);

keys.forEach(function (key) {
  console.log(key);
});



/* Further Adventures
 *
 * 1) Add three more people to the ages object:
 *    One directly to the object,
 *    one using square brackets and
 *    one using dot notation.
 *
 * 2) Update the call to console.log so it
 *    shows the age of each person.
 *    Remember, the key lets you access
 *    the value from the ages object.
 *
 * 3) Update the call to console.log so it
 *    shows the person's name along with
 *    the length of their name.
 *    e.g. Blinky: 6
 
 */
```



### Counting words from tweets
[JS Bin: Listing 10.06](http://jsbin.com/figati/edit?js,console) - figati
```javascript
/* Get Programming with JavaScript
 * Listing 10.06
 * Counting words from tweets
 */

var tweets = [
  "Education is showing business the way by using technology to share information. How do we so so safely?",
  "Enjoy a free muffin & coffee with Post Plus, our new loyalty club exclusive to subscribers!",
  "We're LIVE on Periscope right now answering all your #pet questions - tweet us yours now!",
  "Saw an unfinished print of M:I5 yesterday and it is my great pleasure to report it is rather splendid.",
  "Downloading the beta of OS X El Capitan. This is going to gooch my mac for sure, but it will probably look pretty",
  "Mud pies and muscle: H.G. Wells weighs in on #STEMeducation in an automated age",
  "UK Space Agency brings astronaut’s mission to children across the UK #ESA #ESERO",
  "Trying to find an old tweet that I didn't favourite at the time is…a fools game. #continuesDigging",
  "A robot has just passed a classic test of self-awareness. What does that mean?",
  "It was a great event. Very important to learn how to communicate about science and engineering effectively"
];

var words = {};
var tweetText = tweets.join(" ");
var tweetWords = tweetText.split(" ");
  
tweetWords.forEach(function (word) {
    words[word] = 0;
});

tweetWords.forEach(function (word) {
    words[word] = words[word] + 1;
});

console.log(words);



/* Further Adventures
 *
 * 1) Add more tweets to the tweets array
 *    and run the program again.
 *    They don't have to be tweets,
 *    any text will do.
 *
 * The program sees it and It as different words.
 * The string method toLowerCase will convert
 * a string to all lowercase.
 * "I Love NASA".toLowerCase() is "i love nasa"
 *
 * 2) Change the keys in the square brackets
 *    to use word.toLowerCase() instead of word.
 *    Make sure you change them all.
 *
 * 3) Can you change the keys to upper case?
 *
 */
```


### Counting letters from tweets
[JS Bin: Listing 10.07](http://jsbin.com/rusufi/edit?js,console) - rusufi
```javascript
/* Get Programming with JavaScript
 * Listing 10.07
 * Counting letters from tweets
 */

var tweets = [
  "Education is showing business the way by using technology to share information. How do we so so safely?",
  "Enjoy a free muffin & coffee with Post Plus, our new loyalty club exclusive to subscribers!",
  "We're LIVE on Periscope right now answering all your #pet questions - tweet us yours now!",
  "Saw an unfinished print of M:I5 yesterday and it is my great pleasure to report it is rather splendid.",
  "Downloading the beta of OS X El Capitan. This is going to gooch my mac for sure, but it will probably look pretty",
  "Mud pies and muscle: H.G. Wells weighs in on #STEMeducation in an automated age",
  "UK Space Agency brings astronaut’s mission to children across the UK #ESA #ESERO",
  "Trying to find an old tweet that I didn't favourite at the time is…a fools game. #continuesDigging",
  "A robot has just passed a classic test of self-awareness. What does that mean?",
  "It was a great event. Very important to learn how to communicate about science and engineering effectively"
];

var letters = {};
var tweetText = tweets.join("");
var tweetLetters = tweetText.split("");

tweetLetters.forEach(function (letter) {
    letters[letter.toLowerCase()] = 0;
});

tweetLetters.forEach(function (letter) {
    letters[letter.toLowerCase()] += 1;
});

console.log(letters);



/* Further Adventures
 *
 * 1) Add more tweets to the tweets array
 *    and run the program again.
 *    They don't have to be tweets,
 *    any text will do.
 *
 * 2) Can you change the keys to upper case?
 *
 */
```


### An exits object
[JS Bin: Listing 10.08](http://jsbin.com/daqato/edit?js,console) - daqato
```javascript
/* Get Programming with JavaScript
 * Listing 10.08
 * An exits object
 */

var Place = function (title) {
    this.title = title;
};

var kitchen = new Place("The Kitchen");
var dungeon = new Place("The Dungeon");

var exits = {};

exits["north"] = kitchen;
exits["the trapdoor"] = dungeon;

var keys = Object.keys(exits);

keys.forEach(function (key) {
    console.log(key + " goes to " + exits[key].title);
});



/* Further Adventures
 *
 * 1) Add a couple more places.
 *
 * 2) Add a couple more exits.
 *
 * 3) At the console prompt,
 *    type 'exits' to see the exits object.
 *    It has a number of keys with the
 *    corresponding values being place objects.
 *
 * 4) Access one of the exits like this:
 *    > exits["north"];
 *    A single object will be displayed.
 *
 * 5) Access the title property:
 *    > exits["north"].title;
 *
 * 6) Or use square brackets:
 *    > exits["north"]["title"]
 *
 */
```



### Functions to add and show exits
[JS Bin: Listing 10.09](http://jsbin.com/mibube/edit?js,console) - mibube
```javascript
/* Get Programming with JavaScript
 * Listing 10.09
 * Functions to add and show exits
 */

var Place = function (title) {
    this.title = title;
};

var kitchen = new Place("The Kitchen");
var dungeon = new Place("The Dungeon");

var exits = {};

var addExit = function (direction, place) {
    exits[direction] = place;
};

var showExits = function () {
    var keys = Object.keys(exits);

    keys.forEach(function (key) {
        console.log(key + " goes to " + exits[key].title);
    });
};

addExit("north", kitchen);
addExit("the trapdoor", dungeon);

showExits();



/* Further Adventures
 *
 * 1) Add a couple more places.
 *
 * 2) Use the addExit function to add
 *    exits to your new places.
 *
 * 3) Update the showExits function so
 *    it only shows the directions, not
 *    the destinations.
 *
 * 4) Write a showDestination function
 *    that shows the destination when
 *    a direction is passed to it as
 *    an argument.
 *
 */
```



### An exits object in the Place constructor
[JS Bin: Listing 10.10](http://jsbin.com/foboka/edit?js,console) - foboka
```javascript
/* Get Programming with JavaScript
 * Listing 10.10
 * An exits object in the Place constructor
 */

var Place = function (title, description) {
    this.title = title;
    this.exits = {};

    this.addExit = function (direction, exit) {
        this.exits[direction] = exit;
    };

    this.showExits = function () {  
        console.log("Exits from " + this.title + ":");
  
        Object.keys(this.exits).forEach(function (key) {
            console.log(key);
        });
    };
};

var library = new Place("The Old Library");
var kitchen = new Place("The Kitchen");
var garden = new Place("The Kitchen Garden");

kitchen.addExit("south", library);
kitchen.addExit("west", garden);

kitchen.showExits();



/* Further Adventures
 *
 * 1) Add an exit from the library to the kitchen.
 *
 * 2) Add an exit from the garden to the kitchen.
 *
 * 3) Show the exits for the library
 *    and the garden.
 *
 * 4) Add a couple more places and link
 *    them into the map.
 *
 */
```



### A map with four locations
[JS Bin: Listing 10.11](http://jsbin.com/bufico/edit?js,console) - bufico
```javascript
//* Get Programming with JavaScript
  * Listing 10.11
  * A map with four locations
  */

 var Place = function (title, description) {
     this.title = title;
     this.exits = {};

     this.addExit = function (direction, exit) {
         this.exits[direction] = exit;
     };

     this.showExits = function () {
         console.log("Exits from " + this.title + ":");

         Object.keys(this.exits).forEach(function (key) {
             console.log(key);
         });
     };
 };

 var library = new Place("The Old Library");
 var kitchen = new Place("The Kitchen");
 var garden = new Place("The Kitchen Garden");
 var cupboard = new Place("The Kitchen Cupboard");

 library.addExit("north", kitchen);
 garden.addExit("east", kitchen);
 cupboard.addExit("west", kitchen);

 kitchen.addExit("south", library);
 kitchen.addExit("west", garden);
 kitchen.addExit("east", cupboard);

 library.showExits();
 kitchen.showExits();



 /* Further Adventures
  *
  * 1) Update the Place constructor to
  *    include an items array assigned as
  *    a property of the this object.
  *
  * 2) Add an addItem method to the constructor
  *    that lets you add items to
  *    the items array.
  *
  * 3) Add a showItems method to the constructor
  *    that displays the items in
  *    the items array.
  *
  * 4) Test your work by adding items
  *    to the different locations and
  *    displaying the items on the console.
  *
  */
```



### A Place constructor function
[JS Bin: Listings 10.12 and 10.13](http://jsbin.com/zozule/edit?js,console) - zozule
```javascript
/* Get Programming with JavaScript
 * Listings 10.12 and 10.13
 * A Place constructor function
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
    this.exits = {};

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

        Object.keys(this.exits).forEach(function (key) {
            exitsString += "   - " + key;
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

    this.addExit = function (direction, exit) {
        this.exits[direction] = exit;
    };
};


// Map

var kitchen = new Place(
    "The Kitchen",
    "You are in a kitchen. There is a disturbing smell."
);
var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);
var garden = new Place(
    "The Kitchen Garden",
    "You are in a small, walled garden."
);
var cupboard = new Place(
    "The Kitchen Cupboard",
    "You are in a cupboard. It's surprisingly roomy."
);

kitchen.addItem("a piece of cheese");
library.addItem("a rusty key");
cupboard.addItem("a tin of spam");

kitchen.addExit("south", library);
kitchen.addExit("west", garden);
kitchen.addExit("east", cupboard);

library.addExit("north", kitchen);
garden.addExit("east", kitchen);
cupboard.addExit("west", kitchen);


// Test

kitchen.showInfo();



/* Further Adventures
 *
 * 1) Create an array of the four places.
 *
 * 2) Use forEach with the array to call
 *    showInfo for each place.
 *
 */
```


### Playing the game
[JS Bin: Listing 10.14](http://jsbin.com/sezayo/edit?js,console) - sezayo
```javascript
/* Get Programming with JavaScript
 * Listing 10.14
 * Playing the game
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


// The Player Constructor

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


// The Place Constructor

var Place = function (title, description) {
    var newLine = spacer.newLine();

    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = {};

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

        Object.keys(this.exits).forEach(function (key) {
            exitsString += "   - " + key;
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

    this.addExit = function (direction, exit) {
        this.exits[direction] = exit;
    };
};


// Map

var kitchen = new Place(
    "The Kitchen",
    "You are in a kitchen. There is a disturbing smell."
);
var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);
var garden = new Place(
    "The Kitchen Garden",
    "You are in a small, walled garden."
);
var cupboard = new Place(
    "The Kitchen Cupboard",
    "You are in a cupboard. It's surprisingly roomy."
);

kitchen.addItem("a piece of cheese");
library.addItem("a rusty key");
cupboard.addItem("a tin of spam");

kitchen.addExit("south", library);
kitchen.addExit("west", garden);
kitchen.addExit("east", cupboard);

library.addExit("north", kitchen);
garden.addExit("east", kitchen);
cupboard.addExit("west", kitchen);


// Game

var render = function () {
    console.clear();
    player.place.showInfo();
    player.showInfo("*");
};

var go = function (direction) {
    var place = player.place;
    var destination = place.exits[direction];
    player.place = destination;
    render();
    return "";
};

var get = function () {
    var place = player.place;
    var item = place.items.pop();
    player.addItem(item);
    render();
    return "";
};

var player = new Player("Kandra", 50);
player.addItem("The Sword of Doom");
player.place = kitchen;

render();



/* Further Adventures
 *
 * 1) Play the game!
 *
 * At the console prompt you can type
 * > get()
 * to collect an item or, for example,
 * > go("east")
 * to move east.
 *
 */
```

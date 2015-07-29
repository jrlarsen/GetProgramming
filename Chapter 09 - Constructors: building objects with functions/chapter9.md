# Chapter 09 - Constructors: building objects with functions


### Using a function to create an object
[jsbin: Listing 9.01](http://jsbin.com/jiroyo/edit?js,console)
```javascript
/* Adventures in JavaScript
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
[jsbin: Listing 9.02](http://jsbin.com/zogure/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.02
 * Adding methods to our constructed object
 */

var buildPlanet = function (name, position, type) {
    var planet = {};

    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name + ": planet " + planet.position;
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
[jsbin: Listing 9.03](http://jsbin.com/jiweze/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.03
 * An array of constructed objects
 */

var buildPlanet = function (name, position, type) {
    var planet = {};

    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name + ": planet " + planet.position;
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
[jsbin: Listing 9.04](http://jsbin.com/bixico/edit?js,console)
```javascript
/* Adventures in JavaScript
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


### Including an moons array in our Planet constructor
[jsbin: Listing 9.05](http://jsbin.com/wiguya/edit?js,console)
```javascript
/* Adventures in JavaScript
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
[jsbin: Listing 9.06](http://jsbin.com/wewewe/edit?js,console)
```javascript
/* Adventures in JavaScript
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
 * 1) Add a new moon to each place.
 *
 * 2) Call showPlanet for each place.
 *
 * unshift is an array method that adds a
 * new element at the start of the array.
 * shift is an array method that removes
 * an item from the start of an array.
 *
 * 3) Create a removeMoon method that
 *    removes a moon from the start
 *    of the moons array.
 *
 */
```


### A quiz question constructor
[jsbin: Listing 9.07](http://jsbin.com/vuyesi/edit?js,console)
```javascript
/* Adventures in JavaScript
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
[jsbin: Listing 9.08](http://jsbin.com/gemiyu/edit?js,console)
```javascript
/* Adventures in JavaScript
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
[jsbin: Listing 9.09](http://jsbin.com/pogive/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.09
 * A Place constructor part 1
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;

    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
    };
};

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

library.showInfo();



/* Further Adventures
 *
 * 1) Add a second place.
 *
 * 2) Call the showInfo method on your
 *    new place event.
 *
 */
```


### A Place constructor part 2
[jsbin: Listing 9.10](http://jsbin.com/qemica/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.10
 * A Place constructor part 2
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];

    this.showItems = function () {
        console.log("Items: ");
        this.items.forEach(function (item, i) {
            console.log("(" + i + ") " + item);
        });
    };

    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
        this.showItems();
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

library.showInfo();



/* Further Adventures
 *
 * 1) Add a second place and some items.
 *
 * 2) Call the showInfo method on your
 *    new place event.
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
 *    library.showInfo();
 *
 * 5) Add a removeItem method to the constructor
 *    function that removes a specified item.
 *    e.g. library.removeItem("a rusty key");
 *
 */
```


### A Place constructor part 3
[jsbin: Listing 9.11](http://jsbin.com/parale/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.11
 * A Place constructor part 3
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = [];

    this.showItems = function () {
        console.log("Items:");
        this.items.forEach(function (item, i) {
            console.log("(" + i + ") " + item);
        });
    };

    this.showExits = function () {
        console.log("Exits from " + this.title + ":");
        this.exits.forEach(function (exit, i) {
            console.log("(" + i + ") " + exit.title);
        });
    };

    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
        this.showItems();
        this.showExits();
    };

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.addExit = function (exit) {
        this.exits.push(exit);
    };
};

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
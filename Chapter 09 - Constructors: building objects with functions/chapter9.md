# Chapter 09 - Constructors: building objects with functions


### Using a function to create an object
[jsbin: Listing 9.01](http://jsbin.com/jiroyo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.01
 * Using a function to create an object
 */

var buildPlace = function (title, description) {
    var place = {};
  
    place.title = title;
    place.description = description;
  
    return place;
};

var library = buildPlace(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

console.log(library.title);
console.log(library.description);



/* Further Adventures
 *
 * 1) Build a second place, using the buildPlace function.
 *
 * 2) Log its title and description.
 *
 * 3) Add a numberOfExits parameter to the buildPlace function.
 *
 * 4) Assign numberOfExits to the place object.
 *
 * 5) Update the call to buildPlace for the library.
 *    Include the number of exits as an argument.
 *
 * 6) Log the number of exits.
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

var buildPlace = function (title, description) {
    var place = {};
  
    place.title = title;
    place.description = description;
  
    place.showInfo = function () {
        console.log(place.title);
        console.log(place.description);          
    };
  
    return place;
};

var library = buildPlace(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

library.showInfo();



/* Further Adventures
 *
 * 1) Build a second place.
 *    Use the buildPlace function.
 *
 * 2) Call the showInfo method on your
 *    new place.
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

var buildPlace = function (title, description) {
    var place = {};
  
    place.title = title;
    place.description = description;
  
    place.showInfo = function () {
        console.log(place.title);
        console.log(place.description);          
    };
  
    return place;
};

var places = [
    buildPlace(
        "The Old Library",
        "You are in a library. Dusty books line the walls."
    ),
    buildPlace(
        "The Kitchen",
        "You are in the kitchen. There is a disturbing smell."
    ),
    buildPlace(
        "The Dungeon",
        "You are in The Dungeon. It is dark. And dank. And deep."
    )
];

places.forEach(function (place) {
    place.showInfo();
});



/* Further Adventures
 *
 * 1) Add two more places to the places array.
 *
 * 2) Run the program to display them.
 *
 * 3) Update the showInfo method to visually
 *    separate each place in the console output.
 *
 */
```


### A Place constructor
[jsbin: Listing 9.04](http://jsbin.com/bixico/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.04
 * A Place constructor
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
 * 1) Use the Place constructor function
 *    to create a second place.
 *    Don't forget the 'new' keyword.
 *
 * 2) Call the showInfo method on your
 *    newly created place.
 *
 */
```


### Including an items array in our Place constructor
[jsbin: Listing 9.05](http://jsbin.com/wiguya/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.05
 * Including an items array in our Place constructor
 */

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
  
    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
        console.log("Items: " + this.items.join(', ') + ".");
    };
  
    this.addItem = function (item) {
        this.items.push(item);  
    };
};

var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
);

library.addItem("a zombie");
library.addItem("a faded map");

library.showInfo();



/* Further Adventures
 *
 * 1) Create a second place.
 *
 * 2) Add three items to the second place.
 *
 * 3) Call the showInfo method
 *    on the second place.
 *
 * 4) Add a removeItem method
 *    that removes the last item
 *    from the items array.
 *
 */
```


### Creating multiple Places with our constructor
[jsbin: Listing 9.06](http://jsbin.com/wewewe/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.06
 * Creating multiple Places with our constructor
 */

var library, kitchen, dungeon;

var Place = function (title, description) {
    this.title = title;
    this.description = description;
    this.items = [];
  
    this.showInfo = function () {
        console.log(this.title);
        console.log(this.description);
        console.log("Items: " + this.items.join(', ') + ".");
    };
  
    this.addItem = function (item) {
        this.items.unshift(item);
    };
};

library = new Place(
    "The Old Library",
    "You are in an ancient library. Dusty books line the walls."
);
library.addItem("a zombie");
library.addItem("a faded map");

kitchen = new Place(
    "The Kitchen",
    "You are in the kitchen. There is a disturbing smell."
);
kitchen.addItem("a piece of cheese");

dungeon = new Place(
    "The Dungeon",
    "You are in the dungeon. It is dark. And dank. And deep."
);

[ library, kitchen, dungeon ].forEach(function (place) {
    place.showInfo();
});



/* Further Adventures
 *
 * 1) Add a new item to each place.
 *
 * 2) Call showInfo for each place.
 *
 * unshift is an array method that adds a
 * new element at the start of the array.
 * shift is an array method that removes
 * an item from the start of an array.
 *
 * 3) Create a removeItem method that
 *    removes and item from the start
 *    of the items array.
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


### Sharing functions with the Place prototype
[jsbin: Listing 9.09](http://jsbin.com/cibuji/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.09
 * Sharing functions with the Place prototype
 */

var library, kitchen;

var Place = function (title, description) {
    this.title = title;
    this.description = description;
};

Place.prototype.showInfo = function () {
    console.log(this.title);
    console.log(this.description);
};

library = new Place("The Old Library", "You are in an ancient library.");
kitchen = new Place("The Kitchen", "You are in the kitchen.");

library.showInfo();
kitchen.showInfo();



/* Further Adventures
 *
 * 1) Add an items property to the this object
 *    in the Place constructor.
 *    Assign it an empty array.
 *
 * 2) Add an addItem method to Place.prototype
 *    that adds a new item to the items array.
 *
 * 3) Update the showInfo method to also
 *    display the items in the items array.
 *
 * 4) Add items to the library and kitchen.
 *
 * 5) Call the showInfo method on the
 *    library and the kitchen.
 *
 */
```


### Updating a property on the prototype
[jsbin: Listing 9.10](http://jsbin.com/wekaho/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 9.10
 * Updating a property on the prototype
 */

var GuardPost = function (postName) {
    this.postName = postName;
};

GuardPost.prototype.status = "All clear";

GuardPost.prototype.tripAlarm = function () {
    console.log(this.postName + ": Intruder Alert!");
    GuardPost.prototype.status = "I am on the look out!";
};

var posts = [
    new GuardPost("The Main Gate"),
    new GuardPost("The Stables"),
    new GuardPost("The Patio")
];

posts.forEach(function (post) {
    console.log(post.postName + ": " + post.status);
});

posts[0].tripAlarm();

posts.forEach(function (post) {
    console.log(post.postName + ": " + post.status);
});



/* Further Adventures
 *
 * 1) Add a couple more guardposts.
 *
 * 2) Add a clearAlarm method to
 *    GuardPost.prototype that
 *    resets the status to "All clear"
 *
 * 3) Test out your clearAlarm method.
 *    One guard should trip the alarm and
 *    another should clear it.
 *
 */
```


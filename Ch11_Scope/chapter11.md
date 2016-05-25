# Chapter 11 - Scope: hiding information


### Declare, assign and use a variable
[JS Bin Listing 11.01](http://jsbin.com/gujacum/edit?js,console) - gujacum
```javascript
/* Get Programming with JavaScript
 * Listing 11.01
 * Declare, assign and use a variable
 */

var mountain;

mountain = "Ben Nevis";

console.log(mountain);


/* Further Adventures
 *
 * Run the program, then at the console prompt:
 *
 * 1) Type mountain and press enter.
 *
 * The value assigned to the mountain variable
 * should be displayed.
 *
 * mountain is a global variable.
 * It can be accessed anywhere in the program.
 *
 * 2) Assign the mountain variable a new value.
 *    e.g. mountain = "Everest"
 *
 * 3) Type mountain and press enter.
 *
 */
 ```


### Accessing a variable from within a function
[JS Bin Listing 11.02](http://jsbin.com/zojida/edit?js,console) - zojida
```javascript
/* Get Programming with JavaScript
 * Listing 11.02
 * Accessing a variable from within a function
 */

var mountain = "Ben Nevis";

var showMountain = function () {
    console.log(mountain);
};

showMountain();



/* Further Adventures
 *
 * The mountain and showMountain variables are
 * accessible anywhere in the program.
 *
 * 1) At the console prompt,
 *    type 'showMountain' and press enter.
 *
 * The function definition is displayed.
 * (JS Bin may have changed it to use its
 * own log function)
 *
 * 2) Type 'showMountain()' and press enter.
 *
 * "Ben Nevis" is displayed, followed by the
 * return value of the function, undefined.
 *
 * 3) Change the definition of the showMountain
 *    function to return the value of
 *    the mountain variable.
 *    i.e. return mountain;
 *
 * 4) Run the program and clear the console.
 *
 * 5) Type 'showMountain()' and press enter.
 *
 */
```


### A tiny quiz
[JS Bin Listing 11.03](http://jsbin.com/nubipi/edit?js,console) - nubipi
```javascript
/* Get Programming with JavaScript
 * Listing 11.03
 * A tiny quiz
 */

var question = "What is the highest mountain in Wales?";
var answer = "Snowdon";

console.log(question);



/* Further Adventures
 *
 * 1) At the prompt,
 *    type 'answer' and press enter.
 *
 * 2) Assign answer a new value.
 *
 * Both question and answer are accessible
 * anywhere in the program, including inside functions.
 *
 * 3) Define a showQandA function to display
 *    the question and answer.
 *
 * 4) Run the program.
 *
 * 5) Call the showQandA function at the console prompt.
 *
 */
```


### A variable hidden from the console
[JS Bin Listing 11.04](http://jsbin.com/bobilu/edit?js,console) - bobilu
```javascript
/* Get Programming with JavaScript
 * Listing 11.04
 * A variable hidden from the console
 */

var hide = function () {
    var mountain = "Devils Tower";
};

console.log(mountain);



/* Further Adventures
 *
 * The program causes an error because it tries
 * to access the mountain variable outside of the
 * function in which it is declared.
 *
 * Does running the hide function help?
 *
 * 1) At the prompt, call the hide function.
 *    i.e. type 'hide()' and press enter.
 *
 * The return value of the hide function is displayed.
 * As no return value was specified in the definition,
 * the hide function returns 'undefined'.
 *
 * 2) Type 'mountain' and press enter.
 *
 * The mountain variable is only accessible to code
 * within the hide function.
 *
 * 3) Return the value of mountain from the hide function.
 *
 * 4) At the prompt, call the hide function.
 *
 * When the hide function is called, "Devils Tower" is
 * displayed on the console. The console displays
 * the return value of functions called.
 *
 */
```


### The variable is visible within the function
[JS Bin Listing 11.05](http://jsbin.com/raluqu/edit?js,console) - raluqu
```javascript
/* Get Programming with JavaScript
 * Listing 11.05
 * The variable is visible within the function
 */

var show = function () {
    var mountain = "Devils Tower";
    console.log(mountain);
};

show();


/* Further Adventures
 *
 * 1) Declare another variable called mountain,
 *    outside of the function, at the end
 *    of the program.
 *    e.g. var mountain = "Everest";
 *
 * 2) Run the program.
 *
 * 3) At the prompt, type 'mountain' and press enter.
 *
 * Within the show function, the local version
 * of mountain is used.
 *
 * Outside the show function, the global version
 * of mountain is used.
 *
 */
```


### Global and local variables
[JS Bin Listing 11.06](http://jsbin.com/riconi/edit?js,console) - riconi
```javascript
/* Get Programming with JavaScript
 * Listing 11.06
 * Global and local variables
 */

var mountain;
var show;

mountain = "Ben Nevis";

show = function () {
    var secretMountain = "Devils Tower";

    console.log(mountain);
    console.log(secretMountain);
};

show();

console.log(mountain);
console.log(secretMountain);                                           



/* Further Adventures
 *
 * 1) At the prompt, assign mountain a new value.
 *
 * 2) Call show at the prompt.
 *
 */
```


### A counter
[JS Bin Listing 11.07](http://jsbin.com/yagese/edit?js,console) - yagese
```javascript
/* Get Programming with JavaScript
 * Listing 11.07
 * A counter
 */

var counter = 0;

var count = function () {
  counter = counter + 1;
  return counter;
};



/* Further Adventures
 *
 * 1) Type the following commands at the prompt:
 *
 *    > count()
 *    > count()
 *    > count()
 *
 * The current value of counter is displayed on the
 * console for each call to count.
 *
 * 2) Type the following commands at the prompt:
 *
 *    > counter = 99
 *    > count()
 *    > count()
 *
 * Because counter is a global variable, you can
 * change it at the console.
 *
 */
```


### Hiding the counter variable
[JS Bin Listing 11.08](http://jsbin.com/fuwuvi/edit?js,console) - fuwuvi
```javascript
/* Get Programming with JavaScript
 * Listing 11.08
 * Hiding the counter variable
 */

var getCounter = function () {
  var counter = 0;
  
  var countUpBy1 =  function () {
    counter = counter + 1;
    return counter;
  };
  
  return countUpBy1;
};

var count = getCounter();



/* Further Adventures
 *
 * 1) At the prompt, type the following commands:
 *
 *    > count()
 *    > count()
 *    > count()
 *
 * Each time count is called, the current value of
 * counter is displayed on the console.
 *
 * 2) At the prompt, type the following commands:
 *
 *    > counter
 *
 * The counter variable is local to the getCounter
 * function; that's where it was declared. It can't
 * be accessed from the console because it is not
 * a global variable.
 *
 */
```


### Multiple counters
[JS Bin Listing 11.09](http://jsbin.com/sicoce/edit?js,console) - sicoce
```javascript
/* Get Programming with JavaScript
 * Listing 11.09
 * Multiple counters
 */

var getCounter = function () {
  var counter = 0;
  
  return function () {
    counter = counter + 1;
    return counter;
  };
};

var peakCount = getCounter();
var climbCount = getCounter();



/* Further Adventures
 *
 * 1) At the prompt, type these commands:
 *
 *    > peakCount()
 *    > peakCount()
 *    > peakCount()
 *    > climbCount()
 *    > peakCount()
 *
 * Each count function gets its own counter variable.
 * They do not interfere with each other.
 *
 * 2) Call getCounter a third time and assign the
 *    function returned to a new variable.
 *
 * 3) Use the new variable to count up.
 *
 */
```


### A counter constructor
[JS Bin Listing 11.10](http://jsbin.com/yidomap/edit?js,console) - yidomap
```javascript
/* Get Programming with JavaScript
 * Listing 11.10
 * A Counter constructor
 */

var Counter = function () {
  var counter = 0;
  
  this.count = function () {
    counter = counter + 1;
    return counter;
  };
};

var peaks = new Counter();
var climbs = new Counter();



/* Further Adventures
 *
 * 1) At the console prompt,
 *    call peaks.count and climbs.count
 *    a number of times.
 *
 * 2) Add a countDown method to the
 *    Counter constructor.
 *    The method should decrease the counter
 *    by 1 each time it is called.
 *
 * 3) Add a countUpBy method that counts up
 *    by a specified amont.
 *    e.g.
 *    > peaks.count()
 *      1
 *    > peaks.countUpBy(5)
 *      6
 *    > peaks.countDown()
 *      5
 *
 */
```


### Improving the quiz app
[JS Bin Listing 11.11](http://jsbin.com/tupoto/edit?js,console) - tupoto
```javascript
/* Get Programming with JavaScript
 * Listing 11.11
 * Improving the quiz app
 */

var quiz = {
    questions: [
        {
            question: "What is the highest mountain in the world?",
            answer: "Everest"
        },
        {
            question: "What is the highest mountain in Scotland?",
            answer: "Ben Nevis"
        },
        {
            question: "How many munros are in Scotland?",
            answer: "284"
        }
    ],

    qIndex: 0,

    quizMe: function () {
        return quiz.questions[quiz.qIndex].question;
    },

    showMe: function () {
        return quiz.questions[quiz.qIndex].answer;
    },

    next: function () {
        quiz.qIndex = quiz.qIndex + 1;
        return "Ok";
    }
};



/* Further Adventures
 *
 * Run the program. Then:
 *
 * 1) Test the  quiz methods at the console.
 *    e.g.
 *    > quiz.quizMe()
 *      What is the highest mountain in the world?
 *    > quiz.showMe()
 *      Everest
 *    > quiz.next()
 *      Ok
 *    etc.
 *
 * 2) Access the questions and qIndex properties.
 *    e.g.
 *    > quiz.qIndex
 *    > quiz.questions
 *    > quiz.questions[0]
 *    > quiz.questions[1].answer
 *
 * All of the properties and methods are accessible
 * on the console.
 */
```


### Hiding the questions and answers
[JS Bin Listing 11.12](http://jsbin.com/qahedu/edit?js,console) - qahedu
```javascript
/* Get Programming with JavaScript
 * Listing 11.12
 * Hiding the questions and answers
 */

var getQuiz = function () {
    var qIndex = 0;
    var questions = [
        {
            question: "What is the highest mountain in the world?",
            answer: "Everest"
        },
        {
            question: "What is the highest mountain in Scotland?",
            answer: "Ben Nevis"
        },
        {
            question: "How many munros are in Scotland?",
            answer: "284"
        }
    ];

    return {
        quizMe : function () {
            return questions[qIndex].question;
        },

        showMe : function () {
            return questions[qIndex].answer;
        },

        next : function () {
            qIndex = qIndex + 1;
            return "Ok";
        }
    };
};

var quiz = getQuiz();



/* Further Adventures
 *
 * Run the program. Then:
 *
 * 1) At the prompt, type 'quiz' and press enter.
 *
 * The quiz object has three methods,
 * next, quizMe and showMe.
 *
 * 2) At the prompt, type:
 *
 *    > quiz.questions
 *    > quiz.qIndex
 *
 * Those properties do not exist on the quiz object.
 *
 * 3) Add a new method to the returned object, showIndex,
 *    that returns the value of qIndex.
 *
 * 4) Test the new method.
 *
 */
```


### The Player constructor
[JS Bin Listing 11.13](http://jsbin.com/dacedu/edit?js,console) - dacedu
```javascript
/* Get Programming with JavaScript
 * Listing 11.13
 * The Player constructor
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
    info += newLine + spacer.wrap(health, longest, character);
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



/* Further Adventures
 *
 * 1) Use the constructor to create
 *    a player.
 *
 *    var dax = new Player("Dax", 50);
 *
 * 2) Run the program.
 *
 * 3) At the prompt, access the
 *    player's properties.
 *
 *    > dax.name
 *    > dax.health
 *
 * All the properties are accessible.
 *
 * 4) Change some properties.
 *
 *    > dax.health = 1000
 *    > dax.items = "Was an array"
 *
 */
```


### Hiding the Player implementation
[JS Bin Listing 11.14](http://jsbin.com/fuyaca/edit?js,console) - fuyaca
```javascript
/* Get Programming with JavaScript
 * Listing 11.14
 * Hiding the Player implementation
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


// The Player constructor

var Player = function (name, health) {
    var newLine = spacer.newLine();
    var items = [];
    var place = null;


    var getNameInfo = function () {
        return name;
    };

    var getHealthInfo = function () {
        return "(" + health + ")";
    };

    var getItemsInfo = function () {
        var itemsString = "Items:" + newLine;

        items.forEach(function (item, i) {
            itemsString += "   - " + item + newLine;
        });

        return itemsString;
    };

    var getTitleInfo = function () {
        return getNameInfo() + " " + getHealthInfo();
    };

    var getInfo = function () {
        var info = spacer.box(getTitleInfo(), 40, "*");
        info += "  " + getItemsInfo();
        info += spacer.line(40, "*");
        info += newLine;

        return info;
    };


    this.addItem = function (item) {
        items.push(item);
    };

    this.setPlace = function (destination) {
        place = destination;
    };

    this.getPlace = function () {
        return place;
    };

    this.showInfo = function (character) {
        console.log(getInfo(character));
    };
};



/* Further Adventures
 *
 * 1) Use the constructor to create
 *    a player.
 *
 *    var dax = new Player("Dax", 50);
 *
 * 2) Run the program.
 *
 * 3) At the console, try to access
 *    player properties.
 *
 *    > dax.name
 *    > dax.health
 *    > dax.items
 *
 * Those properties don't exist!
 * name, health and items are variables
 * local to the constructor function;
 * they were not set as properties
 * of the special 'this' object.
 *
 */
```


### The Place constructor
[JS Bin Listing 11.15](http://jsbin.com/kavane/edit?js,console) - kavane
```javascript
/* Get Programming with JavaScript
 * Listing 11.15
 * The Place constructor
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


  

/* Further Adventures
 *
 * 1) Run the program.
 *
 * You can enter commands at the prompt
 * over more than one line.
 * Press shift + Enter to move to
 * a new line.
 *
 * 2) At the prompt, create a
 *    new place, using the constructor.
 *
 *    > var hall = new Place(
 *        "The Hall",
 *        "You are in a spacious hall."
 *      )
 *
 * 3) Add items to the place.
 *    Use the addItem method.
 *
 * 4) Use showItems to display the items.
 *
 * 5) Access the items directly.
 *
 *    > hall.items
 *
 */
```


### Hiding place info in the constructor
[JS Bin Listing 11.16](http://jsbin.com/riviga/edit?js,console) - riviga
```javascript
/* Get Programming with JavaScript
 * Listing 11.16
 * Hiding place info in the constructor
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
    var items = [];
    var exits = {};

    var getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };

    var getExitsInfo = function () {
        var exitsString = "Exits from " + title;
        exitsString += ":" + newLine;

        Object.keys(exits).forEach(function (key) {
            exitsString += "   - " + key;
            exitsString += newLine;
        });

        return exitsString;
    };

    var getTitleInfo = function () {
        return spacer.box(title, title.length + 4, "=");
    };

    var getInfo = function () {
        var infoString = getTitleInfo();
        infoString += description;
        infoString += newLine + newLine;
        infoString += getItemsInfo() + newLine;
        infoString += getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };


    this.showInfo = function () {
        console.log(getInfo());
    };

    this.addItem = function (item) {
        items.push(item);
    };

    this.addExit = function (direction, exit) {
        exits[direction] = exit;
    };

    this.getExit = function (direction) {
        return exits[direction];
    };

    this.getLastItem = function () {
        return items.pop();
    };
};

  

/* Further Adventures
 *
 * 1) Add a method that lets users
 *    remove an item using its name.
 *
 *    kitchen.removeItem("a smelly cheese");
 *
 * 2) Add a method that lets users
 *    remove an item using its index.
 *
 *    kitchen.removeItemAt(2);
 *
 */
```


### Lots of global variables in the game
[JS Bin Listing 11.17](http://jsbin.com/dateqe/edit?js,console) - dateqe
```javascript
/* Get Programming with JavaScript
 * Listing 11.17
 * Lots of global variables in the game
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


// Constructors

var Player = function (name, health) {
    var newLine = spacer.newLine();
    var items = [];
    var place = null;

    var getNameInfo = function () {
        return name;
    };

    var getHealthInfo = function () {
        return "(" + health + ")";
    };

    var getItemsInfo = function () {
        var itemsString = "Items:" + newLine;

        items.forEach(function (item, i) {
            itemsString += "   - " + item + newLine;
        });

        return itemsString;
    };

    var getTitleInfo = function () {
        return getNameInfo() + " " + getHealthInfo();
    };

    var getInfo = function () {
        var info = spacer.box(getTitleInfo(), 40, "*");
        info += "  " + getItemsInfo();
        info += spacer.line(40, "*");
        info += newLine;

        return info;
    };

    this.addItem = function (item) {
        items.push(item);
    };

    this.setPlace = function (destination) {
        place = destination;
    };

    this.getPlace = function () {
        return place;
    };

    this.showInfo = function (character) {
        console.log(getInfo(character));
    };
};

var Place = function (title, description) {
    var newLine = spacer.newLine();
    var items = [];
    var exits = {};

    var getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };

    var getExitsInfo = function () {
        var exitsString = "Exits from " + title;
        exitsString += ":" + newLine;

        Object.keys(exits).forEach(function (key) {
            exitsString += "   - " + key;
            exitsString += newLine;
        });

        return exitsString;
    };

    var getTitleInfo = function () {
        return spacer.box(title, title.length + 4, "=");
    };

    var getInfo = function () {
        var infoString = getTitleInfo();
        infoString += description;
        infoString += newLine + newLine;
        infoString += getItemsInfo() + newLine;
        infoString += getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };


    this.showInfo = function () {
        console.log(getInfo());
    };

    this.addItem = function (item) {
        items.push(item);
    };

    this.addExit = function (direction, exit) {
        exits[direction] = exit;
    };

    this.getExit = function (direction) {
        return exits[direction];
    };

    this.getLastItem = function () {
        return items.pop();
    };
};


// Game controls

var render = function () {
    console.clear();
    player.getPlace().showInfo();
    player.showInfo();
};

var go = function (direction) {
    var place = player.getPlace();
    var destination = place.getExit(direction);
    player.setPlace(destination);
    render();
    return "";
};

var get = function () {
    var place = player.getPlace();
    var item = place.getLastItem();
    player.addItem(item);
    render();
    return "";
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

kitchen.addItem("a piece of cheese");
library.addItem("a rusty key");

kitchen.addExit("south", library);
library.addExit("north", kitchen);


// Game initialization

var player = new Player("Kandra", 50);
player.addItem("The Sword of Doom");
player.setPlace(kitchen);

render();



/* Further Adventures
 *
 * 1) Run the program and play the game.
 *    The controls are functions assigned
 *    to the global variables, go and get.
 *
 *    > get()
 *    > go("south")
 *
 * 2) player is also a global variable.
 *    At the prompt, type player and press Enter.
 *
 *    > player
 *
 *    The player object's interface will be shown.
 *
 * 3) You can access the methods in the
 *    player interface:
 *
 *    > player.setPlace(library);
 *
 */
```


### Hiding the implementation
[JS Bin Listing 11.18](http://jsbin.com/yuporu/edit?js,console) - yuporu
```javascript
/* Get Programming with JavaScript
 * Listing 11.18
 * Letting users interact with the game via an interface object
 */


var getGame = function () {

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


  // Constructors

  var Player = function (name, health) {
    var newLine = spacer.newLine();
    var items = [];
    var place = null;

    var getNameInfo = function () {
        return name;
    };

    var getHealthInfo = function () {
        return "(" + health + ")";
    };

    var getItemsInfo = function () {
        var itemsString = "Items:" + newLine;

        items.forEach(function (item, i) {
            itemsString += "   - " + item + newLine;
        });

        return itemsString;
    };

    var getTitleInfo = function () {
        return getNameInfo() + " " + getHealthInfo();
    };

    var getInfo = function () {
        var info = spacer.box(getTitleInfo(), 40, "*");
        info += "  " + getItemsInfo();
        info += spacer.line(40, "*");
        info += newLine;

        return info;
    };

    this.addItem = function (item) {
        items.push(item);
    };

    this.setPlace = function (destination) {
        place = destination;
    };

    this.getPlace = function () {
        return place;
    };

    this.showInfo = function (character) {
        console.log(getInfo(character));
    };
  };

  var Place = function (title, description) {
    var newLine = spacer.newLine();
    var items = [];
    var exits = {};

    var getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        items.forEach(function (item) {
            itemsString += "   - " + item;
            itemsString += newLine;
        });
        return itemsString;
    };

    var getExitsInfo = function () {
        var exitsString = "Exits from " + title;
        exitsString += ":" + newLine;

        Object.keys(exits).forEach(function (key) {
            exitsString += "   - " + key;
            exitsString += newLine;
        });

        return exitsString;
    };

    var getTitleInfo = function () {
        return spacer.box(title, title.length + 4, "=");
    };

    var getInfo = function () {
        var infoString = getTitleInfo();
        infoString += description;
        infoString += newLine + newLine;
        infoString += getItemsInfo() + newLine;
        infoString += getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
    };

    this.showInfo = function () {
        console.log(getInfo());
    };

    this.addItem = function (item) {
        items.push(item);
    };

    this.addExit = function (direction, exit) {
        exits[direction] = exit;
    };

    this.getExit = function (direction) {
        return exits[direction];
    };

    this.getLastItem = function () {
        return items.pop();
    };
  };

  // Console update function
  var render = function () {
    console.clear();
    player.getPlace().showInfo();
    player.showInfo();
  };

  // Create some places
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

  // Add items and exits to places
  kitchen.addItem("a piece of cheese");
  library.addItem("a rusty key");
  cupboard.addItem("a tin of spam");

  kitchen.addExit("south", library);
  kitchen.addExit("west", garden);
  kitchen.addExit("east", cupboard);

  library.addExit("north", kitchen);
  garden.addExit("east", kitchen);
  cupboard.addExit("west", kitchen);

  // Game initialization
  var player = new Player("Kandra", 50);
  player.addItem("The Sword of Doom");
  player.setPlace(kitchen);

  render();

  // Return the public interface
  return {
    go: function (direction) {
      var place = player.getPlace();
      var destination = place.getExit(direction);
      player.setPlace(destination);
      render();
      return "";
    },

    get: function () {
      var place = player.getPlace();
      var item = place.getLastItem();
      player.addItem(item);
      render();
      return "";
    }
  };

};

var game = getGame();



/* Further Adventures
 *
 * 1) Play the game, Using the two public methods:
 *
 *   > game.get()
 *   > game.go("north")
 *
 */
```

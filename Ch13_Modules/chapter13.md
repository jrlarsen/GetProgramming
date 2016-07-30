# Chapter 13 - Modules: breaking a program into pieces


### The 'between' function
[JS Bin 'between'](http://jsbin.com/qezoce/edit?js,console) - qezoce
```javascript
/* Get Programming with JavaScript
 * The 'between' function
 */

var between = function (lowest, highest) {
    var range = highest - lowest + 1;
    return lowest + Math.floor(Math.random() * range);
};
```

### Loading JavaScript with a script tag (HTML)
[JS Bin Listing 13.01](http://jsbin.com/lifugam/edit?html,js,console) - lifugam
```html
<script src="http://output.jsbin.com/qezoce.js"></script>
```


### Loading JavaScript with a script tag
[JS Bin Listing 13.02](http://jsbin.com/lifugam/edit?html,js,console) - lifugam
```javascript
/* Get Programming with JavaScript
 * Listings 13.01 and 13.02
 * Loading JavaScript with a script tag
 */

var num = between(3, 7);
console.log(num);


/* Further Adventures
 *
 * 1) Run the program 4 or 5 times.
 *
 * A random number between 3 and 7 inclusive
 * should be generated each time.
 *
 * The 'between' function that generates
 * the number is loaded via a
 * script element in the HTML panel.
 *
 * 2) Create a rectangle object with random
 *    length and width properties each
 *    between 1 and 10 units long.
 *
 * 3) Define a showArea function that accepts
 *    a rectangle as an argument and logs its
 *    area to the console.
 *
 *    > a 3 by 7 rectangle has area 21
 *
 */
```


### Using the Number Generator with the quiz app (HTML)
[JS Bin Listing 13.03](http://jsbin.com/ponogi/edit?html,js,console) - ponogi
```html
<!-- Number Generator -->
<script src="http://output.jsbin.com/qezoce.js"></script>
```


### Using the Number Generator with the quiz app
[JS Bin Listing 13.04](http://jsbin.com/ponogi/edit?html,js,console) - ponogi
```js
// Get Programming with JavaScript
// Listings 13.03 and 13.04
// Using the Number Generator with the quiz app

var getQuiz = function () {
  var qIndex = 0;

  var questions = [
    { question: "7 x 8", answer: "56" },
    { question: "12 x 12", answer: "144" },
    { question: "5 x 6", answer: "30" },
    { question: "9 x 3", answer: "27" }
  ];

  var getQuestion = function () {
    qIndex = between(0, questions.length - 1);
    return questions[qIndex].question;
  };

  var checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
      return "Correct!";
    } else {
      return "No, the answer is " + questions[qIndex].answer;
    }
  };

  return {
    quizMe: getQuestion,
    submit: checkAnswer
  };
};

var quiz = getQuiz();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Take the quiz, using the quiz.quizMe and
 *    quiz.submit methods.
 *    
 *    > quiz.quizMe()
 *      12 x 12
 *    > quiz.submit("144")
 *
 * 3) Add some more questions and answers, run the
 *    program and take the quiz again.
 *
 * 4) Update the program so that it keeps
 *    a score of correct answers.
 *
 * 5) Define a showScore function that displays
 *    the current score.
 *
 */
```

### Using the Number Generator in the guessing game (HTML)
[JS Bin Listing 13.05](http://jsbin.com/tixina/edit?js,console) - tixina
```html
<!-- Number Generator -->
<script src="http://output.jsbin.com/qezoce.js"></script>
```

### Using the Number Generator in the guessing game
[JS Bin Listing 13.06](http://jsbin.com/tixina/edit?js,console) - tixina
```javascript
// Get Programming with JavaScript
// Listings 13.05 and 13.06
// Using the Number Generator in the guessing game

var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else if (userNumber > secret) {
      return "Too high!";
    } else {
      return "Too low!";
    }
  };
};

var guess = getGuesser(5, 10);



/* Further Adventures
 *
 * 1) Run the program and play the game.
 *
 * 2) Change the arguments to getGuesser so that
 *    the number to guess is in a bigger range.
 *
 * 3) Update the game so that it keeps track of
 *    the number of guesses a player takes to
 *    find the secret number.
 *
 *    > Well done! You took 6 guesses.
 *
 */
```


### Using spacer and between in the guessing game (HTML)
[JS Bin Listing 13.07](http://jsbin.com/foqowa/edit?js,console) - foqowa
```HTML
<!-- number generator -->
<script src="http://output.jsbin.com/qezoce.js"></script>

<!-- spacer -->
<script src="http://output.jsbin.com/juneqo.js"></script>
```


### Using spacer and between in the guessing game
[JS Bin Listing 13.08](http://jsbin.com/foqowa/edit?js,console) - foqowa
```javascript
// Get Programming with JavaScript
// Listings 13.07 and 13.08
// Using spacer and between in the guessing game
// Uses Number Generator and spacer

var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);

  return function (userNumber) {
    if (userNumber === secret) {
      return spacer.box("Well done!", 14, "=");
    } else if (userNumber > secret) {
      return spacer.box("Too high!", 13, "+");
    } else {
      return spacer.box("Too low!", 12, "-");
    }
  };
};

var guess = getGuesser(5, 10);



/* Further Adventures
 *
 * 1) Report the number of guesses taken
 *    at each stage.
 *
 *    > guess(6)
 *
 *      ------------------------
 *      - Too low! (2 guesses) -
 *      ------------------------
 *
 * 2) End the game after a certain number
 *    of guesses.
 *
 *    ******************
 *    ! Out Of Guesses !
 *    ******************
 *
 */
```

### Importing Kallie's Code (HTML)
[JS Bin Listing 13.09](http://jsbin.com/zusodu/edit?html,js,console) - zusodu 
```HTML
<!-- number generator -->
<script src="http://output.jsbin.com/qezoce.js"></script>

<!-- spacer -->
<script src="http://output.jsbin.com/juneqo.js"></script>

<!-- Kallie’s code -->
<script src="http://output.jsbin.com/soxeke.js"></script>
```



### Using Kallie's Code
[JS Bin Listing 13.10](http://jsbin.com/zusodu/edit?html,js,console) - zusodu 
```javascript
/* Get Programming with JavaScript
 * Listings 13.09 and 13.10
 * Using Kallie's code
 */

var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);

  return function (userNumber) {
    var msg;
    if (userNumber === secret) {
      msg = dasher("Well done!");
      return spacer.wrap(msg, msg.length + 4, "=");
    } else if (userNumber > secret) {
      msg = dasher("Too high!");
      return spacer.wrap(msg, msg.length + 4, "+");
    } else {
      msg = dasher("Too low!");
      return spacer.wrap(msg, msg.length + 4, "-");
    }
  };
};


var guess = getGuesser(5, 10);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Make a guess.
 *
 * !!! Where has spacer.wrap gone? !!!
 *
 */
```

### Kallie's formatting code
[JS Bin Listing 13.11](http://jsbin.com/soxeke/edit?js,console) - soxeke 
```javascript
// Get Programming with JavaScript
// Listing 13.11
// Kallie's formatting code

var spreader = function (text, character) {
  return text.split("").join(character);
};

var spacer = function (text) {
  return spreader(text, " ");
};

var dasher = function (text) {
  return spreader(text, "-");
};



/* Further Adventures
 * 
 * 1) Run the program.
 *
 * 2) Test out the three functions
 *    at the prompt.
 *
 *    > spacer("Too high!")
 *      T o o   h i g h !
 *
 *    > dasher("Too low!")
 *      T-o-o- -l-o-w-!
 *
 *    > spreader("Well done!", "*")
 *      W*e*l*l* *d*o*n*e*!
 *
 */
```

### Kallie's formatting code in a namespace
[JS Bin Listing 13.12](http://jsbin.com/moheka/edit?js,console) - moheka 
```javascript
// Get Programming with JavaScript
// Listing 13.12
// Kallie's formatting code in a namespace

var kalliesCode = {
  spreader: function (text, character) {
    return text.split("").join(character);
  },

  spacer: function (text) {
    return kalliesCode.spreader(text, " ");
  },

  dasher: function (text) {
    return kalliesCode.spreader(text, "-");
  }
};



/* Further Adventures
 * 
 * 1) Run the program.
 *
 * 2) Test out the three functions
 *    at the prompt.
 *
 *    > kalliesCode.spacer("Too high!")
 *      T o o   h i g h !
 *
 *    > kalliesCode.dasher("Too low!")
 *      T-o-o- -l-o-w-!
 *
 *    > kalliesCode.spreader("Well done!", "*")
 *      W*e*l*l* *d*o*n*e*!
 *
 * 3) Create a function called squasher
 *    that removes characters added by spreader.
 *
 *    > kalliesCode.squasher("T-o-o- -h-i-g-h-!", "-")
 *      Too high!
 *
 */
```

### Importing Kallie's namespace (HTML)
[JS Bin Listing 13.13](http://jsbin.com/seqahi/edit?html,js,console) - seqahi 
```HTML
<!-- number generator -->
<script src="http://output.jsbin.com/qezoce.js"></script>

<!-- spacer -->
<script src="http://output.jsbin.com/juneqo.js"></script>

<!-- Kallie’s code -->
<script src="http://output.jsbin.com/moheka.js"></script>
```



### Importing Kallie's namespace
[JS Bin Listing 13.14](http://jsbin.com/seqahi/edit?html,js,console) - seqahi 
```javascript
/* Get Programming with JavaScript
 * Listings 13.13 and 13.14
 * Importing Kallie's namespace code
 */

var getGuesser = function (lowest, highest) {
  var secret = between(lowest, highest);

  return function (userNumber) {
    var msg;
    if (userNumber === secret) {
      msg = kalliesCode.dasher("Well done!");
      return spacer.wrap(msg, msg.length + 4, "=");
    } else if (userNumber > secret) {
      msg = kalliesCode.dasher("Too high!");
      return spacer.wrap(msg, msg.length + 4, "+");
    } else {
      msg = kalliesCode.dasher("Too low!");
      return spacer.wrap(msg, msg.length + 4, "-");
    }
  };
};


var guess = getGuesser(5, 10);



/* Further Adventures
 *
 * 1) Run the program and play the game.
 *
 * 2) Change the program to use spreader
 *    rather than dasher, using the same
 *    character throughout each message.
 *
 *    = W=e=l=l= =d=o=n=e=! =
 *
 * Challenge:
 * 3) Create your own private wrap function,
 *    within the scope of getGuesser. It 
 *    should use spreader and wrap to create
 *    a formatted message.
 *
 *    wrap("Too high!", "+")
 *    + T+o+o+ +h+i+g+h+! +
 *
 * 4) Update the function returned from
 *    getGuesser to use your wrap function.
 *
 */
```

### Random quiz questions with two global variables
[JS Bin Listing 13.15](http://jsbin.com/ponogi/edit?html,js,console) - ponogi 
```javascript
// Get Programming with JavaScript
// Listings 13.03, 13.04 and 13.15
// Picking a question at random
// Uses the number generator module

var getQuiz = function () {
  var qIndex = 0;

  var questions = [
    { question: "7 x 8", answer: "56" },
    { question: "12 x 12", answer: "144" },
    { question: "5 x 6", answer: "30" },
    { question: "9 x 3", answer: "27" }
  ];

  var getQuestion = function () {
    qIndex = between(0, questions.length - 1);
    return questions[qIndex].question;
  };

  var checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
      return "Correct!";
    } else {
      return "No, the answer is " + questions[qIndex].answer;
    }
  };

  return {
    quizMe: getQuestion,
    submit: checkAnswer
  };
};

var quiz = getQuiz();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Take the quiz, using the quiz.quizMe and
 *    quiz.submit methods.
 *    
 *    > quiz.quizMe()
 *      12 x 12
 *    > quiz.submit("144")
 *
 * 3) Add some more questions and answers, run the
 *    program and take the quiz again.
 *
 * 4) Update the program so that it keeps
 *    a score of correct answers.
 *
 * 5) Define a showScore function that displays
 *    the current score.
 *
 */
```

### Using an IIFE with the quiz app
[JS Bin Listing 13.16](http://jsbin.com/titano/edit?html,js,console) - titano 
```javascript
/* Get Programming with JavaScript
 * Listing 13.16
 * Using an IIFE with the quiz app
 */

var quiz = (function () {
  var qIndex = 0;
  
  var questions = [
    { question: "7 x 8", answer: "56" },
    { question: "12 x 12", answer: "144" },
    { question: "5 x 6", answer: "30" },
    { question: "9 x 3", answer: "27" }
  ];
  
  var getQuestion = function () {
    qIndex = between(0, questions.length - 1);
    return questions[qIndex].question;
  };
  
  var checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
      return "Correct!";
    } else {
      return "No, the answer is " + questions[qIndex].answer;
    }
};
  
  return {
    quizMe: getQuestion,
    submit: checkAnswer
  };
  
})();




/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Take the quiz, using the quiz.quizMe and
 *    quiz.submit methods.
 *    
 *    > quiz.quizMe()
 *      12 x 12
 *    > quiz.submit("144")
 *
 * 3) Add some more questions and answers, run the
 *    program and take the quiz again.
 *
 * CHALLENGE:
 *
 * 4) Add a hint property for each question.
 *
 * 5) Define a getHint function that returns
 *    the hint for the current question.
 *
 * 6) Add a helpMe property to the public interface,
 *    the object returned by getQuiz. The getHint
 *    function should be assigned to the
 *    helpMe property.
 *
 *    return {
 *      quizMe: getQuestion,
 *      submit: submit,
 *      helpMe: getHint
 *    };
 *
 */
```


### Importing modules for The Crypt (HTML)
[JS Bin Listing 13.17](http://jsbin.com/zikuta/edit?html,js.console) - zikuta 
```HTML
<!-- spacer -->
<script src="http://output.jsbin.com/juneqo.js"></script>

<!-- Player constructor -->
<script src="http://output.jsbin.com/nubijex.js"></script>

<!-- Place constructor -->
<script src="http://output.jsbin.com/dofuci.js"></script>

<!-- Map code -->
<script src="http://output.jsbin.com/dipaxo.js"></script>

<!-- Game initialization -->
<script src="http://output.jsbin.com/fisupe.js"></script>
```



### Importing modules for The Crypt
[JS Bin Listing 13.18](http://jsbin.com/zikuta/edit?html,js.console) - zikuta 
```javascript
/* Get Programming with JavaScript
 * Listings 13.17 and 13.18
 * Importing modules for The Crypt
 */

var game = theCrypt.getGame();



/* Further Adventures
 *
 * 1) Run the program and play the game.
 *
 *    > game.get()
 *    > game.go("east")
 *
 */
```


### The Player constructor as a module
[JS Bin Listing 13.19](http://jsbin.com/nubijex/edit?js) - nubijex 
```javascript
// Get Programming with JavaScript
// Listing 13.19
// The Player constructor as a module

(function () {  
  
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
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.Player = Player;
  
})();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt,
 *    try to use Player to create a new
 *    player object.
 *
 *    > var p = new Player("Dax", 50)
 *
 *    It won't work.
 *    Player is a private variable.
 *
 *    However, Player has also been assigned
 *    to theCrypt, which is global.
 *
 * 3) At the console prompt,
 *    use theCrypt.Player to create a new
 *    player object.
 *
 *    > var p = new theCrypt.Player("Dax", 50)
 *
 *    Okay, it can now find Player.
 *    But spacer has gone AWOL.
 *
 * 4) Add a script element to the HTML Panel
 *    to include the spacer namespace.
 *    (JS Bin code for spacer: juneqo)
 *    (You may have to refresh the page
 *     to load the script.)
 *
 * 5) Create a new player and call p.showInfo()
 *
 */
```


### The Place constructor as a module
[JS Bin Listing 13.20](http://jsbin.com/dofuci/edit?js) - dofuci 
```javascript
// Get Programming with JavaScript
// Listing 13.20
// The Place constructor as a module

(function () {

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
  
  if (window.theCrypt === undefined) {
    window.theCrypt = {};
  }
  
  theCrypt.Place = Place;  
  
})();



/* Further Adventures
 *
 * Have a play with the global object
 * at the console prompt:
 *
 * 1) Try to access a non-existent variable:
 *
 *    > spoon
 *
 *    ERROR! There is no spoon!
 *
 * 2) Access the global window object:
 *
 *    > window
 *
 *    Wow! It has lots of properties!
 *
 * 3) Try and access a non-existent property:
 *
 *    > window.spoon
 *
 *    This time, there is no error.
 *    No spoon property has been defined, so
 *    the special undefined value is returned.
 *
 * 4) Set a value for the spoon property:
 *
 *    > window.spoon = 1
 *
 *    Setting a property on the window object
 *    makes it available as a global variable.
 *
 * 5) Try to access the spoon variable:
 *
 *    > spoon
 *      1
 *
 */
```

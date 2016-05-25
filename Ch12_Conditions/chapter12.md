# Chapter 12 - Conditions: choosing code to run


### Guess the number
[JS Bin Listing 12.01](http://jsbin.com/feholi/edit?js,console) - feholi
```javascript
/* Get Programming with JavaScript
 * Listing 12.01
 * Guess the number
 */

var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  }
};



/* Further Adventures
 *
 * 1) Click run.
 *
 * 2) Call the guess function at the prompt.
 *    e.g. guess(2)
 *
 * 3) Try a few different numbers as arguments.
 *
 * The program only prints "Well done!" when the
 * number you guess matches the secret number.
 *
 * The strict equality operator, ===, checks if
 * two values are equal.
 *
 * 4) Change the condition in parentheses to now
 *    check if the guess is greater than the secret.
 *
 *    if (userNumber > secret)
 *
 * 5) Change the message logged to "Too high!"
 *
 * 6) Run and test the updated program.
 *
 */
```

### Guess the number - the else clause
[JS Bin Listing 12.02](http://jsbin.com/nakosi/edit?js,console) - nakosi
```javascript
/* Get Programming with JavaScript
 * Listing 12.02
 * Guess the number - the else clause
 */

var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else {
    console.log("Unlucky, try again.");
  }
};



/* Further Adventures
 *
 * 1) Run the program and try a few guesses at the prompt.
 *    e.g. guess(2)
 *
 * You can check if two values are NOT equal
 * by using the !== operator.
 *
 * 2) Change the condition in parentheses to check
 *    if the guess is not equal to the secret.
 *
 *    if (userNumber !== secret)
 *
 * 3) Run and test the updated program.
 *
 * 4) Change the messages to fit the new condition.
 *
 */
```


### Guess the number - using local scope
[JS Bin Listing 12.03](http://jsbin.com/hotife/edit?js,console) - hotife
```javascript
/* Get Programming with JavaScript
 * Listing 12.03
 * Guess the number - using local scope
 */

var getGuesser = function () {
  var secret = 8;

  return function (userNumber) {
    if (userNumber === secret) {
      console.log("Well done!");
    } else {
      console.log("Unlucky, try again.");
    }
  };
};

var guess = getGuesser();



/* Further Adventures
 *
 * 1) Run the program.
 * 
 * The getGuesser and guess variables will be
 * added to the global scope, the collection of
 * variables avaialable on the console and
 * throughout the program.
 *
 * 2) At the prompt, type 'getGuesser' and
 *    press Enter.
 *
 * The value of the getGuesser variable will be
 * shown on the console. The value is a function
 * so the function will be displayed.
 *
 * Notice, JS Bin has replaced the calls to
 * console.log with its own logging function.
 *
 * 3) At the prompt, type 'guess' and
 *    press Enter.
 *
 * The value of guess is displayed.
 *
 * 4) At the prompt, type 'secret' and
 *    press Enter.
 *
 * secret is not a global variable. It is local
 * to the getGuesser function and cannot be accessed
 * on the console.
 *
 */
```


### Guess the random number
[JS Bin Listing 12.04](http://jsbin.com/mezowa/edit?js,console) - mezowa
```javascript
/* Get Programming with JavaScript
 * Listing 12.04
 * Guess the random number
 */

var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      return "Unlucky, try again.";
    }
  };
};

var guess = getGuesser();



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Play the game a few times on the console.
 *    e.g. guess(2)
 *
 * 3) Change the code so the secret number is
 *    between 30 and 50.
 *
 * 4) Test your changes.
 *
 * CHALLENGE: Create a function called 'between'
 * that returns a random whole number between two
 * numbers passed as arguments.
 *
 * e.g. between(1, 5)      //   1 <= whole number <= 5
 *      between(100, 200)  // 100 <= whole number <= 200
 *
 */
```


### Higher or Lower
[JS Bin Listing 12.05](http://jsbin.com/cixeju/edit?js,console) - cixeju
```javascript
/* Get Programming with JavaScript
 * Listing 12.05
 * Higher or Lower
 */

var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      if (userNumber > secret) {
        return "Too high!";
      } else {
        return "Too low!";
      }
    }
  };
};

var guess = getGuesser();



/* Further Adventures
 *
 * 1) Run the program
 *
 * 2) Play the game a few times.
 *    e.g. guess(2)
 *
 * There are three blocks of code covering the
 * three outcomes for a guess:
 * too low, too high or correct.
 *
 * 3) Update the second condition to
 *    (userNumber < secret)
 *
 * 4) Update the messages to match the
 *    new condition.
 *
 * 5) Swap the first and second conditions so
 *    the second condition uses the strict
 *    equality operator.
 *
 * 6) Update the messages to match the
 *    new condition.
 *
 */
```


### A neater else-if block
[JS Bin Listing 12.06](http://jsbin.com/cidoru/edit?js,console) - cidoru
```javascript
/* Get Programming with JavaScript
 * Listing 12.06
 * A neater else-if block
 */

var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

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

var guess = getGuesser();



/* Further Adventures
 *
 * Let's change getGuesser to include a parameter
 * for setting the number of possible numbers to guess.
 *
 * e.g. getGuesser(20) will create random numbers
 * from 1 to 20. That's 20 possible numbers.
 *
 * 1) Add a 'range' parameter to the function
 *    definition of getGuesser.
 *
 *    var getGuesser = function (range) {
 *
 * 2) Change the 10 on line 7 to 'range'.
 *
 *    var secret = Math.floor(Math.random() * range + 1);
 *
 * 3) Include an argument when getGuesser is called
 *    on line 20.
 *
 *    var guess = getGuesser(20);
 *
 * 4) Test the game.
 *
 * 5) Now add a second parameter, 'offset'
 *    and update the code to choose random numbers
 *    greater than or equal to the value of offset.
 *
 */
```


### Checking quiz answers
[JS Bin Listing 12.07](http://jsbin.com/hidogo/edit?js,console) - hidogo
```javascript
/* Get Programming with JavaScript
 * Listing 12.07
 * Checking quiz answers
 */

var getQuiz = function () {
  var score = 0,
      qIndex = 0,
      inPlay = true,
      questions,
      next,
      getQuestion,
      checkAnswer,
      submit;
    
  questions = [
    {
      question: "What is the highest mountain in the world?",
      answer: "Everest"
    },
    {
      question: "What is the highest mountain in Scotland?",
      answer: "Ben Nevis"
    }
  ];
  
  next = function () {
    qIndex = qIndex + 1;
    
    if (qIndex >= questions.length) {
      inPlay = false;
      console.log("You have finished the quiz.");
    }
  };
  
  getQuestion = function () {
    if (inPlay) {
      return questions[qIndex].question;
    } else {
      return "You have finished the quiz.";
    }
  };
  
  checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
      console.log("Correct!");
      score = score + 1;
    } else {
      console.log("No, the answer is " + questions[qIndex].answer);
    }
  };
  
  submit = function (userAnswer) {
    var message = "You have finished the quiz.";
    
    if (inPlay) {
      checkAnswer(userAnswer);
      next();
      message = "Your score is " + score + " out of " + qIndex;
    }
      
    return message;
  };
  
  return {
    quizMe: getQuestion,
    submit: submit
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
 *      What is the highest mountain in the world?
 *    > quiz.submit("K2")
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


### Checking user input
[JS Bin Listing 12.08](http://jsbin.com/zoruxu/edit?js,console) - zoruxu
```javascript
/* Adventures in JavaScript
 * Listing 12.08
 * Checking user input
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

      if (destination !== undefined) {
        player.setPlace(destination);
        render();
        return "";
      } else {
        return "*** There is no exit in that direction ***";
      }
    },

    get: function () {
        var place = player.getPlace();
        var item = place.getLastItem();

        if (item !== undefined) {
            player.addItem(item);
            render();
            return "";
        } else {
            return "*** There is no item to get ***";
        }
    }
  };

};

var game = getGame();



/* Further Adventures
 *
 * 1) Play the game, Using the three public methods:
 *
 *   > game.get()
 *   > game.go("north")
 *
 * 2) Try going in non-existent directions and
 *    getting items when there are none.
 *
 */
```
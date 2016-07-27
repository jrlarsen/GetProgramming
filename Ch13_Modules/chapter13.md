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
 *    !!!!!!!!!!!!!!!!!!
 *    ! Out Of Guesses !
 *    !!!!!!!!!!!!!!!!!!
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


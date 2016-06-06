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


### Picking a question at random (HTML)
[JS Bin Listing 13.03](http://jsbin.com/ponogi/edit?html,js,console) - ponogi
```html
<!-- Number Generator -->
<script src="http://output.jsbin.com/qezoce.js"></script>
```


### Picking a question at random
[JS Bin Listing 13.04](http://jsbin.com/ponogi/edit?html,js,console) - ponogi
```js
// Get Programming with JavaScript
// Listings 13.03 and 13.04
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
 *      What is the highest mountain in the world?
 *    > quiz.submit("K2")
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


### Using spacer
[JS Bin Listing 13.06](http://jsbin.com/mosaho/edit?js,console) - mosaho
```javascript
/* Get Programming with JavaScript
 * Listings 13.05 and 13.06
 * Using the spacer namespace
 */

console.log(spacer.box("It's like magic!", 20, "*"));


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) One at a time, try different
 *    characters in the call to
 *    spacer.box.
 *
 * 3) At the prompt, type spacer
 *    and press Enter.
 *
 *    > spacer
 *
 * The spacer object will be displayed
 * along with its methods. spacer was
 * added to the global scope by the
 * module imported using an HTML
 * script element.
 *
 */
```


### Call me later
[JS Bin Listing 13.07](http://jsbin.com/focizu/edit?js,console) - focizu
```javascript
/* Get Programming with JavaScript
 * Listing 13.07
 * Call me later
 */

var callMeLater = function () {
    console.log("What took you so long?");
};


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the prompt, call the
 *    callMeLater function.
 *
 *    > callMeLater()
 *
 * The function is available at the
 * console prompt because it was
 * assigned to a global variable,
 * callMeLater.
 *
 * 3) Add three calls to callMeLater
 *    to the program and run the
 *    program again.
 *
 * The function is available in the
 * program too. We're using the
 * function as 'code on demand.'
 *
 */
```


### An immediately invoked function expression
[JS Bin Listing 13.08](http://jsbin.com/dinari/edit?js,console) - dinari
```javascript
/* Get Programming with JavaScript
 * Listing 13.08
 * An immediately invoked function expression
 */

var callMeNow = (function () {
    console.log("Wow, you’re a quick mover!");
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The function is defined and
 * immediately executed, logging its
 * message to the console.
 *
 * The function can't be called again
 * as it hasn't been assigned to
 * a variable.
 *
 * 2) Assign the expression to
 *    a variable.
 *
 * var callMeNow = (function () {
 *   console.log("Wow, you're a quick mover!");
 * })();
 *
 * 3) Run the program.
 *
 * 4) At the prompt, type callMeNow
 *    and press Enter.
 *
 * callMeNow has the value 'undefined'.
 * It was not assigned the function.
 * It was assigned the return value
 * of the function. The function does
 * not return a value, so callMeNow
 * was assigned 'undefined'.
 *
 */
```


### Returning an interface from an IIFE
[JS Bin Listing 13.09](http://jsbin.com/ciquxe/edit?js,console) - ciquxe
```javascript
/* Get Programming with JavaScript
 * Listing 13.09
 * Returning an interface from an IIFE
 */

var secret = (function () {
    var message = "Who let you in here?";

    return {
        share: function () {
            console.log(message);
        }
    };
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The function expression is executed.
 * It returns an object that is
 * assigned to secret. The object
 * includes a share method.
 *
 * 2) Call the share method.
 *
 *    > secret.share()
 *
 * Because the share method was defined
 * inside the function expression, it
 * has access to the message variable.
 *
 * 3) Declare a second variable inside
 *    the function expression and assign
 *    it a value.
 *
 * 4) Add a second method to the object
 *    returned by the function expression.
 *    It should log a combination of
 *    the two variables.
 *
 * 5) Run the program and test your
 *    method at the prompt.
 *
 */
```


### Using an extra variable rather than an IIFE
[JS Bin Listing 13.10](http://jsbin.com/velewo/edit?js,console) - velewo
```javascript
/* Get Programming with JavaScript
 * Listing 13.10
 * Using an extra variable rather than an IIFE
 */

var getSecretInterface = function () {
    var message = "Who let you in here?";

    return {
        share: function () {
            console.log(message);
        }
    };
};

var secret = getSecretInterface();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Call the share method at
 *    the prompt.
 *
 *    > secret.share()
 *
 * The share method is executed,
 * logging the message.
 *
 * When functions are called from
 * the prompt, their code is executed
 * and then their return value
 * is displayed.
 *
 * The share method does not have
 * a return statement so it
 * returns 'undefined'.
 *
 * 3) Update the share method so
 *    it returns a value.
 *
 *    share: function () {
 *        console.log(message);
 *        return "Did you log this?";
 *    }
 *
 * 4) Run the program.
 *
 * 5) Call the share method at
 *    the prompt.
 *
 */

```


### Posts data
[JS Bin Listing 13.11](http://jsbin.com/dusacos/edit?js,console) - dusacos
```javascript
/* Get Programming with JavaScript
 * Listing 13.11
 * Posts data
 */

var postsData = [
  {
    "user": "Kandra",
    "message": "That freaky dog sure doesn't like smelly cheese!"
  },
  {
    "user": "Dax",
    "message": "Has anyone found the duster?"
  },
  {
    "user": "Kandra",
    "message": "I think the knight has the duster. Not sure."
  }
];


/* Further Adventures
 *
 * 1) Run the program.
 *
 * There is no output but the
 * postsData variable is added
 * to the global scope.
 *
 * 2) At the prompt, type
 *    postsData and press Enter.
 *
 * The postsData array will
 * be displayed.
 *
 * 3) Type postsData[0] and
 *    press Enter.
 *
 * The first object in the array
 * is displayed.
 *
 * 4) Type postsData[0].message
 *    and press Enter.
 *
 * The message property of the
 * first object in the array
 * is displayed.
 *
 */
```


### The view code for posts
[JS Bin Listing 13.12](http://jsbin.com/tesunud/edit?js,console) - tesunud
```javascript
/* Get Programming with JavaScript
 * Listing 13.12
 * The view code for posts
 */

var view = (function () {
  var getPostString = function (post) {
    var postString = "";
    
    postString += post.user + " says...\n";
    postString += post.message;
    
    return postString;
  };
  
  var getPostsString = function (posts) {
    var postsString = "\n";
    
    posts.forEach(function (post) {
      postsString += getPostString(post) + "\n\n";
    });
    
    return postsString;
  };
  
  return {
    render: function (posts) {
      console.log(getPostsString(posts));
    }
  };
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The render method expects to be
 * passed an array of posts.
 *
 * 2) At the prompt, declare a
 *    myPosts variable and assign
 *    it an empty array.
 *
 *    > var myPosts = []
 *
 * Commands at the prompt can span
 * multiple lines.
 * Type shift + Enter to move
 * to a new line without executing.
 *
 * 3) Add a post to myPosts.
 *
 *    > myPosts.push({
 *        message: "This is my crypt",
 *        user: "Jahver"
 *      })
 *
 * 4) Call the render method with
 *    myPosts as an argument.
 *
 *    > view.render(myPosts)
 *
 * 5) Add a couple more posts and
 *    display them.
 *
 */
```


### Importing and using view and postsData (HTML)
[JS Bin Listing 13.13](http://jsbin.com/yexito/edit?html) - yexito
```html
<script src="http://jsbin.com/dusacos.js"></script>
<script src="http://jsbin.com/tesunud.js"></script>
```


### Importing and using view and postsData
[JS Bin Listing 13.14](http://jsbin.com/yexito/edit?js,console) - yexito
```javascript
/* Get Programming with JavaScript
 * Listings 13.13 and 13.14
 * Importing and using view and postsData
 */

view.render(postsData);


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The external modules are loaded
 * and posts are displayed.
 *
 * 2) In the HTML panel,
 *    change the dusacos.js
 *    filename to nocifi.js
 *
 * 3) Run the program.
 *
 * Separate files make it
 * easy to switch from one data
 * source to another.
 *
 */
```


### Another view for posts
[JS Bin Listing 13.15](http://jsbin.com/vubaped/edit?js,console) - vubaped
```javascript
/* Get Programming with JavaScript
 * Listing 13.15
 * Another view for posts
 */

var view = (function () {
  var getPostString = function (post) {
    var postString = spacer.blank();
    
    postString += spacer.box(post.user, post.user.length + 4, "+");
    postString += post.message + spacer.newLine();
    
    postString += spacer.line(40, "=") + spacer.newLine();
    
    return postString;
  };
  
  var getPostsString = function (posts) {
    var postsString = spacer.blank();
    
    posts.forEach(function (post) {
      postsString += getPostString(post);
    });
    
    return postsString;
  };
  
  return {
    render: function (posts) {
      console.log(getPostsString(posts));
    }
  };
})();


/* Further Adventures
 *
 * 1) In the HTML panel,
 *    remove the current HTML.
 *
 * 2) Add a script tag to import data
 *    from nocifi.js
 *
 * 3) Add a script tag to import the
 *    spacer namespace from juneqo.js
 *
 * 4) Run the program.
 *
 * 5) At the prompt, call the render
 *    method with the imported data.
 *
 *    > view.render(postsData);
 *
 */
```


### Importing spacer along with view and postsData (HTML)
[JS Bin Listing 13.16](http://jsbin.com/zoviro/edit?html,js,console) - zoviro
```html
<script src="http://jsbin.com/juneqo.js"></script>
<script src="http://jsbin.com/dusacos.js"></script>
<script src="http://jsbin.com/vubaped.js"></script>
```
# Chapter 13 - Modules: breaking your program into pieces


### Some JavaScript to load into another page
[JS Bin Listing 13.01](http://jsbin.com/sokewu/edit?js,console) - sokewu
```javascript
/* Get Programming with JavaScript
 * Listing 13.01
 * Some JavaScript to load into another page
 */

var message1 = "Access JavaScript at http://output.jsbin.com/sokewu.js";
var message2 = "Scripts can be loaded by using script tags.";

console.log(message1);


/* Further Adventures
 *
 * 1) Run the program
 *
 * 2) At the prompt, access the value
 *    of the message1 variable.
 *
 *    > message1
 *
 * 3) Access the value of the
 *    message2 variable.
 *
 *    > message2
 *
 * message1 and message2 are global
 * variables. When this listing is
 * loaded into another page, message1
 * and message2 will be added to the
 * global scope, the collection of
 * variables accessible throughout
 * a program (and at the console).
 *
 */

```

### 
[JS Bin Listing 13.02](http://jsbin.com/fihinol/edit?html) - fihinol
```html
<script src="http://output.jsbin.com/sokewu.js"></script>
```


### Loading JavaScript with a script tag
[JS Bin Listing 13.03](http://jsbin.com/fihinol/edit?js,console) - fihinol
```javascript
/* Get Programming with JavaScript
 * Listings 13.02 & 13.03
 * Loading JavaScript with a script tag
 */

console.log(message2);


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the console prompt, access the
 *    message1 variable.
 *
 *    > message1
 *
 * 3) Access the message2 variable.
 *
 *    > message2
 *
 * The external code has been loaded and
 * executed, adding the message1 and
 * message2 variables to the global scope,
 * the collection of variables accessible
 * throughout the program (and at the console).
 *
 * 4) Assign message2 a new value, either
 *    by adding code to the JavaScript panel
 *    or at the console.
 *
 * The global variables message1 and message2
 * can be accessed and changed.
 *
 */
```


### The spacer namespace
[JS Bin Listing 13.04](http://jsbin.com/juneqo/edit?js,console) - juneqo
```javascript
/* Get Programming with JavaScript
 * Listing 13.04
 * The spacer namespace
 */

var spacer = {
  blank: function () {
    return "";
  },

  newLine: function () {
    return "\n";
  },

  line: function (length, character) {
    var characterIndex;
    
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += "                                        ";

    length = Math.max(0, length);
    length = Math.min(40, length);
    
    characterIndex = longString.indexOf(character);
    
    if (characterIndex === -1) {
      characterIndex = 0;
    }
    
    return longString.substr(characterIndex, length);
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


/* Further Adventures
 *
 * 1) Run the program.
 *
 * The program produces no output but
 * the spacer variable is added to
 * the global scope.
 *
 * 2) At the prompt, call the line
 *    method. e.g.
 *
 *    > spacer.line(3, "*")
 *      "***"
 *
 * All of the functions are accessible
 * as methods of spacer, but only a
 * single global variable is used.
 *
 * 3) At the prompt, try calling the
 *    line function directly.
 *
 *    > line(3, "*")
 *
 * 4) Call the box method with a
 *    character not recognized by the
 *    line method.
 *
 *    > spacer.box("Hello", 9, "x")
 *
 * Can you explain the output?
 *
 */
```


### Using spacer
[JS Bin Listing 13.05](http://jsbin.com/mosaho/edit?html) - mosaho
```html
<script src="http://jsbin.com/juneqo.js"></script>
```


### Using spacer
[JS Bin Listing 13.06](http://jsbin.com/mosaho/edit?js,console) - mosaho
```javascript
/* Get Programming with JavaScript
 * Listings 13.05 and 13.06
 * Using spacer
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


### Returning an interface from an IIFE
[JS Bin Listing 13.10](http://jsbin.com/velewo/edit?js,console) - velewo
```javascript
/* Get Programming with JavaScript
 * Listing 13.10
 * Returning an interface from an IIFE
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


### View code
[JS Bin Listing 13.12](http://jsbin.com/tesunud/edit?js,console) - tesunud
```javascript
/* Get Programming with JavaScript
 * Listing 13.12
 * View code
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


### View and posts data to import
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


### Another view
[JS Bin Listing 13.15](http://jsbin.com/vubaped/edit?js,console) - vubaped
```javascript
/* Get Programming with JavaScript
 * Listing 13.15
 * Another view
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


### Importing spacer
[JS Bin Listing 13.16](http://jsbin.com/zofiro/edit?html,js,console) - zofiro
```html
<script src="http://jsbin.com/juneqo.js"></script>
<script src="http://jsbin.com/dusacos.js"></script>
<script src="http://jsbin.com/vubaped.js"></script>
```
# Adventures In Code
Creating a JavaScript adventure game to help teach programming concepts.

The focus will be on understanding and practising each concept rather than covering every feature of JavaScript.

The book could have sidebars or mini-chapters introducing some research into successful learning techniques that are not always intuitive. E.g. desirable difficulty, interleaving, spacing, repetition, testing as learning.  


## Part 1

### Chapter 1 - Programs and JavaScript
What is a program? What do programmers do? Programming as an art and science.  
Programming takes practice. It's not just learning key words, it's learning structures, patterns and best practices.  
What is JavaScript and why is it important? JavaScript in the browser and on the server.  
JavaScript libraries.  


### Chapter 2 - Adventures in Code - Mapping the Land
An overview of the adventure game to be built and how it will help the reader learn. A graphical representation of what will be covered in the book - a map.  
Overview of the three versions of the game we will build. Some code snippets but only as a taste of what is to come.  
* Example 1 - Intro to jsBin and interacting via the console.
* Example 2 - Browser based version. Interacting via form controls. View source. Browser developer tools and the console.
* Example 3 - Browser and server based version. Information to and from the server. Multiple players. Saving data locally and on the server.


## Part 2 - Characters and Components
Building the components that will be used in the full program. Getting a sense of the modular nature of programs. Each object or function has its part to play. Complicated programs are often made from simple parts.

### Chapter 3 - [Players and Properties](https://github.com/jrlarsen/AdventuresInCode/blob/master/Chpt3/chapter3.md)
Representing a player in code.
* 3.1 storing and using information about players
* 3.2 variables and values
* 3.3 organising with objects and properties
* 3.4 reusuing code with functions and arguments
* 3.5 arrays as lists and joining arrays
* 3.6 conditions with if

### Chapter 4 - [Locations and Loops](https://github.com/jrlarsen/AdventuresInCode/blob/master/Chpt4/chapter4.md)
Constructing locations.
* 4.1 creating a blueprint we can use to construct locations
* 4.2 conditions with if and else
* 4.3 building object templates with constructor functions, this and new
* 4.4 making objects take action with methods
* 4.5 accessing properties with set and get methods (use ES setters and getters?)
* 4.6 sharing method code with prototypes

### Chapter 5 - [Maps and Movement](https://github.com/jrlarsen/AdventuresInCode/blob/master/Chpt5/chapter5.md)
Linking locations together.
* 5.1 keeping our program organised as we link locations to build our world
* 5.2 references and bracket notation for object properties
* 5.3 object property enumeration
* 5.4 maintaining game state, a singleton game object and avoiding global variables
* 5.5 defensive coding and throwing errors

### Chapter 6 - [Items and Inventory](https://github.com/jrlarsen/AdventuresInCode/blob/master/Chpt6/chapter6.md)
Putting it all together for a working game.
* 6.1 organising all our game elements to safely build the game
* 6.2 global scope and using functions to limit scope
* 6.3 loading and executing external scripts
* 6.4 managing the pieces with game methods
* 6.5 map files and loose coupling

### Chapter 7 - Challenges and Champions
Location may now have challenges to overcome by using items.
* 7.1 completing the adventure - success criteria
* 7.2 refactoring to include a new feature
* 7.3 information hiding with closures
* 7.4 playing the game
* 7.5 trying to break the game


## Part 3 - Buttons and Browsers
Moving to the browser.
Minimal HTML.
Text box, button, div, h1, p.
Reacting to a click event.
Importing scripts, including a map file for the game.
Templating.

## Part 4 - Ajax and APIs
Pulling info from a server.
Local storage.
Node.js? Websockets? Multiple players?

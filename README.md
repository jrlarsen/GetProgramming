# Adventures In Code
Creating a JavaScript adventure game to help teach programming concepts.

The focus will be on understanding and practising each concept rather than covering every feature of JavaScript.

The book could have sidebars or mini-chapters introducing some research into successful learning techniques that are not always intuitive. E.g. desirable difficulty, interleaving, spacing, repetition, testing as learning.  


## Part 1

### Chapter 1 - Programs and JavaScript
* 1.1 What is a program? What do programmers do? Programming as an art and science.  
* 1.2 Programming takes practice. It's not just learning key words, it's learning structures, patterns and best practices.  
* 1.3 What is JavaScript and why is it important? JavaScript in the browser and on the server.  
* 1.4 JavaScript libraries.  


### Chapter 2 - Adventures in Code - Mapping the Land
* 2.1 An overview of the adventure game to be built and how it will help the reader learn. A graphical representation of what will be covered in the book - a map.  
* 2.2 Overview of the three versions of the game we will build. Some code snippets but only as a taste of what is to come.  
* 2.3 Example 1 - Intro to jsBin and interacting via the console.
* 2.4 Example 2 - Browser based version. Interacting via form controls. View source. Browser developer tools and the console.
* 2.5 Example 3 - Browser and server based version. Information to and from the server. Multiple players. Saving data locally and on the server.


## Part 2 - Characters and Components
Building the components that will be used in the full program. Getting a sense of the modular nature of programs. Each object or function has its part to play. Complicated programs are often made from simple parts.

### Chapter 3 - [Meet the Players](https://github.com/jrlarsen/AdventuresInCode/blob/master/Chpt3/chapter3.md)
Representing a player in code with variables, objects and functions.
* 3.1 Storing and using information about players
* 3.2 Variables and values
* 3.3 Organising with objects and properties
* 3.4 Reusing code with functions and arguments
* 3.5 Listing player items with arrays
* 3.6 Checking conditions: the if statement

### Chapter 4 - [Location, Location, Location](https://github.com/jrlarsen/AdventuresInCode/blob/master/Chpt4/chapter4.md)
Constructor functions, prototypes and the this and new key words.
* 4.1 Creating a blueprint we can use to construct locations
* 4.2 Checking conditions: if and else
* 4.3 Locations are the same but different: constructor functions, this and new
* 4.4 Making objects take action with methods
* 4.5 Accessing properties with set and get (use ES setters and getters?)
* 4.6 Don't repeat yourself: sharing code with prototypes

### Chapter 5 - [Maps and Movement](https://github.com/jrlarsen/AdventuresInCode/blob/master/Chpt5/chapter5.md)
More on working with properties, references and variables.
* 5.1 Keeping our program organised as we link locations to build our world
* 5.2 Linking one location to another: references and bracket notation
* 5.3 Listing the exits: the for...in loop
* 5.4 Where am I? What have I got?: game state and avoiding global variables
* 5.5 I don't know how to do that!: defensive coding and throwing errors

### Chapter 6 - [Items and Inventory](https://github.com/jrlarsen/AdventuresInCode/blob/master/Chpt6/chapter6.md)
Putting it all together for a working game.
* 6.1 Organising all our game elements to safely build the game
* 6.2 Global scope and using functions to limit scope
* 6.3 Loading and executing external scripts
* 6.4 Managing the pieces with game methods
* 6.5 Map files and loose coupling

### Chapter 7 - Challenges and Champions
Location may now have challenges to overcome by using items.
* 7.1 Completing the adventure - success criteria
* 7.2 Refactoring to include a new feature
* 7.3 Information hiding with closures
* 7.4 Playing the game
* 7.5 Trying to break the game


## Part 3 - Buttons and Browsers
Moving to the browser.

### Chapter 8 - A Really Quick Introduction To HTML
Minimal HTML.
* 8.1 HTML and web pages
* 8.2 Common elements and tags
* 8.3 Semantic markup, ids and classes
* 8.4 Forms and input elements
* 8.5 script tags

### Chapter 9 - Events
Responding to button clicks and key presses.
* 9.1 Goodbye console, hello text box
* 9.2 Alerts and Prompts
* 9.3 Responding to events with handlers
* 9.4 Parsing input and switch blocks
* 9.5 The DOM - appending elements
* 9.6 Cross-browser issues

### Chapter 10 - A Really Quick Introduction to CSS
This text adventure could look a whole lot better.
* 10.1 Linking to stylesheets
* 10.2 Selectors, properties, attributes
* 10.3 Margin and padding
* 10.4 Positioning and floating
* 10.5 Colours and fonts

### Chapter 11 - Browser Based Adventures
A fully functioning adventure
* 11.1 Reusing all our code
* 11.2 Loading multiple maps
* 11.3 Templates
* 11.4 Navigation UI
* 11.5 Starting, stopping and switching games
* 11.6 Saving state locally


## Part 4 - Ajax and APIs
Using a server to provide and store data

### Chapter 12 - An Adventure API
Adventures on demand.
* 12.1 We don't need to load the whole adventure at once
* 12.2 Introducing the Adventure RESTful API
* 12.3 JSON
* 12.4 Loading each location
* 12.5 Listing available maps

### Chapter 13 - A Really Quick Introduction To Node.js and Express.js
Investigating the Adventure API
* 13.1 JavaScript on the server
* 13.2 Installing Node and using npm
* 13.3 Modules and require
* 13.4 Express
* 13.5 Loading our map JSON files and responding to API requests
* 13.6 Saving game state on the server

### Chapter 14 - Multiplayer Adventures with Socket.io
We can play with friends.
* 14.1 Real-time updates
* 14.2 Using socket.io on the server and the browser
* 14.3 Sending and receiving game messages
* 14.4 Bumping into other characters
* 14.5 Swapping items


// jsbin.com/rovaje/edit?js,console
// Adventures in Code
// Listing 7.01

(function() {
  
  function Challenge(item, challengeText, successText, failureText) {
    this.item = item;
    this.challengeText = challengeText;
    this.successText = successText;
    this.failureText = failureText;
  }
  
  AdventuresInCode.Challenge = Challenge;
  
})();

var challenge = new AdventuresInCode.Challenge(
  "a rusty key",
  "The door is locked.",
  "It is quite stiff but eventually the key turns and the door opens.",
  "That didn't work. The door is still locked."
);

var kitchen = new AdventuresInCode.Location(
  "The Kitchen",
  "You are in a large kitchen. There is a strong stench of decay"
);
/* Get Programming with JavaScript
 * Listing 10.07
 * Counting letters from tweets
 */

var tweets = [
  "Education is showing business the way by using technology to share information. How do we so so safely?",
  "Enjoy a free muffin & coffee with Post Plus, our new loyalty club exclusive to subscribers!",
  "We're LIVE on Periscope right now answering all your #pet questions - tweet us yours now!",
  "Saw an unfinished print of M:I5 yesterday and it is my great pleasure to report it is rather splendid.",
  "Downloading the beta of OS X El Capitan. This is going to gooch my mac for sure, but it will probably look pretty",
  "Mud pies and muscle: H.G. Wells weighs in on #STEMeducation in an automated age",
  "UK Space Agency brings astronaut’s mission to children across the UK #ESA #ESERO",
  "Trying to find an old tweet that I didn't favourite at the time is…a fools game. #continuesDigging",
  "A robot has just passed a classic test of self-awareness. What does that mean?",
  "It was a great event. Very important to learn how to communicate about science and engineering effectively"
];

var letters = {};
var tweetText = tweets.join("");
var tweetLetters = tweetText.split("");

tweetLetters.forEach(function (letter) {
  letters[letter.toLowerCase()] = 0;
});

tweetLetters.forEach(function (letter) {
  letters[letter.toLowerCase()] += 1;
});

console.log(letters);



/* Further Adventures
 *
 * 1) Add more tweets to the tweets array
 *    and run the program again.
 *    They don't have to be tweets,
 *    any text will do.
 *
 * 2) Can you change the keys to upper case?
 *
 */
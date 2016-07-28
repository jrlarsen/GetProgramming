// Get Programming with JavaScript
// Listing 19.10
// A news page data module

(function () {
  "use strict";
  
  var posts = [
    {
      title: "Fitness App v1.0 Live!",
      body: "Yes, version 1 is here...",
      posted: "October 3rd, 2016",
      author: "Oskar",
      social: "@appOskar51"
    },
    {
      title: "Improved Formatting",
      body: "The app's looking better than ever...",
      posted: "October 8th, 2016",
      author: "Kallie",
      social: "@kal5tar"
    },
    {
      title: "We've Gone Modular",
      body: "Wow, it's so much easier to work this way...",
      posted: "October 12th, 2016",
      author: "Oskar",
      social: "@appOskar51"
    },
    {
      title: "Positive Feedback!",
      body: "It seems the testers are really loving the app...",
      posted: "October 13th, 2016",
      author: "Mahesha",
      social: "@MaheshaMash"
    }
  ];
  
  function getNews (numItems) {
    return posts.slice(0, numItems);
  }
  
  if (window.fitnessApp === undefined) {
    window.fitnessApp = {};
  }
  
  fitnessApp.news = {
    getItems: getNews
  };
  
})();


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Test the getItems method:
 *
 *    > fitnessApp.news.getItems(2)
 *    > fitnessApp.news.getItems(0)
 *    > fitnessApp.news.getItems(10)
 *    > fitnessApp.news.getItems(-3)
 *
 */

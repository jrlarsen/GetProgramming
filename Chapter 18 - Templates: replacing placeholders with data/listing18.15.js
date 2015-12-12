/* Get Programming with JavaScript
 * Listings 18.14 and 18.15
 * Embedding a template in the HTML
 */

var Template = function (template) {
  this.template = template;

  this.fill = function (data) {
    var filled = this.template;

    Object.keys(data).forEach(function (key) {
      var placeholder = "{{" + key + "}}";

      while (filled.indexOf(placeholder) !== -1) {
        filled = filled.replace(placeholder, data[key]);
      }
    });

    return filled;
  };
  
  this.fillList = function (dataArray) {
    var listString = "";
    var i;
    var l = dataArray.length;
    
    for (i = 0; i < l; i++) {
      listString += this.fill(dataArray[i]);
    }
    
    return listString;
  };
};

var review = {
  title: "Inside Out",
  rating: 5,
  body: "Joy from start to finish."
};

var reviewScript = document.getElementById("reviewTemplate");

var template = new Template(reviewScript.innerHTML);

var reviewsDiv = document.getElementById("reviews");

reviewsDiv.innerHTML = template.fill(review);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) Create second and third review
 *    objects, review2 and review3.
 *
 * 3) Create an array of the review
 *    objects, reviews.
 *
 *    var reviews = [review, review2, review3];
 *
 * 4) Change the call to template.fill
 *    to template.fillList and pass it
 *    the reviews array.
 *
 *    template.fillList(reviews);
 *
 * 5) Run the program.
 *
 */
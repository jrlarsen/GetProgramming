/* Get Programming with JavaScript
 * Listing 18.13
 * Mapping book titles to objects
 */

var books = [
  "The Hobbit",
  "Northern Lights",
  "The Adventures of Tom Sawyer"
];

var bookData = books.map(function (bookTitle) {
  return { title : bookTitle };
});

console.log(books);
console.log(bookData);



/* Further Adventures
 *
 * 1) Run the program.
 *
 * The first array is an array
 * of strings. The second is an
 * array of objects.
 *
 * 2) At the console prompt, access
 *    the second element in the 
 *    books array.
 *
 *    > books[1]
 *
 * 3) Access the second element in
 *    the bookData array.
 *
 *    > bookData[1]
 *    > bookData[1].title
 *
 */
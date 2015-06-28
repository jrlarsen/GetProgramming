/* Adventures in JavaScript
 * Listing 4.03
 * Adding tax to find the total cost
 */

var sale1 = { price: 14, rate: 15 };
var sale2 = { price: 40, rate: 10 };
var sale3 = { price: 120, rate: 20 };

sale1.tax = sale1.price * sale1.rate / 100;
sale2.tax = sale2.price * sale2.rate / 100;
sale3.tax = sale3.price * sale3.rate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;

console.log("price = $" + sale1.price.toFixed(2));
console.log("tax @ " + sale1.rate + "% = $" + sale1.tax.toFixed(2));
console.log("total cost = $" + sale1.total.toFixed(2));

console.log("price = $" + sale2.price.toFixed(2));
console.log("tax @ " + sale2.rate + "% = $" + sale2.tax.toFixed(2));
console.log("total cost = $" + sale2.total.toFixed(2));

console.log("price = $" + sale3.price.toFixed(2));
console.log("tax @ " + sale3.rate + "% = $" + sale3.tax.toFixed(2));
console.log("total cost = $" + sale3.total.toFixed(2));



/* Further Adventures
 *
 * 1) Add a fourth sale object
 *
 * 2) Add lines to calculate the tax and total for the new object
 *
 * 3) Display the sale info for the fourth object
 *
 * 4) Alter the call to .toFixed to show values to the nearest dollar
 *
 */
/* Adventures in JavaScript
 * Listing 7.02
 * A function that adds properties to an object
 */

var sale1;
var calculateTax;
var displaySale;

sale1 = { price: 14, taxRate: 15 };

calculateTax = function (sale) {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};

displaySale = function (sale) {
    console.log("price = $" + sale.price.toFixed(2));
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax.toFixed(2));
    console.log("total cost = $" + sale.total.toFixed(2));
};

calculateTax(sale1);
displaySale(sale1);



/* Further Adventures
 *
 * 1) Change the taxRate property of the sale1 object
 *    and run the program.
 *
 * 2) Add a second sale object, sale2.
 *
 * 3) Add calls to calculateTax and displaySale
 *    to display sale info for sale2.
 *
 * 4) Can you find a way to combine the calls
 *    to calculateTax and displaySale?
 *
 */
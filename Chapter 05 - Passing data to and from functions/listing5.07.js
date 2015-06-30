/* Adventures in JavaScript
 * Listing 5.07
 * A function that adds properties to an object
 */

var sale1 = { price: 14, rate: 15 };

var calculateTax = function (sale) {
    sale.tax = sale.price * sale.rate / 100;
    sale.total = sale.price + sale.tax;
};

var displaySale = function (sale) {
    console.log("price = $" + sale.price.toFixed(2));
    console.log("tax @ " + sale.rate + "% = $" + sale.tax.toFixed(2));
    console.log("total cost = $" + sale.total.toFixed(2));
};

calculateTax(sale1);
displaySale(sale1);



/* Further Adventures
 *
 * 1) Change the rate property of the sale1 object and run the program
 *
 * 2) Add a second sale object, sale2
 *
 * 3) Add calls to calculateTax and displaySale to display sale info for sale2
 *
 * 4) Can you find a way to combine the calls to calculateTax and displaySale ?
 *
 */
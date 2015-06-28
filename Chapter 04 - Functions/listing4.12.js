/* Adventures in JavaScript
 * Listing 4.12
 * Using functions to add and display tax
 */

var sale1 = { price: 14, rate: 15 };
var sale2 = { price: 40, rate: 10 };
var sale3 = { price: 120, rate: 20 };

var sale;

var calculateTax = function () {
    sale.tax = sale.price * sale.rate / 100;
    sale.total = sale.price + sale.tax;
};

var displaySale = function () {
    console.log("price = $" + sale.price.toFixed(2));
    console.log("tax @ " + sale.rate + "% = $" + sale.tax.toFixed(2));
    console.log("total cost = $" + sale.total.toFixed(2));
};

sale = sale1;
calculateTax();
displaySale();

sale = sale2;
calculateTax();
displaySale();

sale = sale3;
calculateTax();
displaySale();



/* Further Adventures
 *
 * 1) Add a fourth sale object
 *
 * 2) Update the code so that tax is calculated and the sale is displayed
 *
 * Having two separate functions to calculate tax and display sales is good, each has a specific purpose. Having to call both functions for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't have to call both functions for every sale?
 *
 */
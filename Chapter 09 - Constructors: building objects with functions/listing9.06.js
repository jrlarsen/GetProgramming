/* Adventures in JavaScript
 * Listing 9.06
 * Creating multiple Planets with our constructor
 */

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };

    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");

var planet3 = new Planet("Mercury", 1, "Terrestrial");

[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
});



/* Further Adventures
 *
 * 1) Add a new moon to each place.
 *
 * 2) Call showPlanet for each place.
 *
 * unshift is an array method that adds a
 * new element at the start of the array.
 * shift is an array method that removes
 * an item from the start of an array.
 *
 * 3) Create a removeMoon method that
 *    removes a moon from the start
 *    of the moons array.
 *
 */
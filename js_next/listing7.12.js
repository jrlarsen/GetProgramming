/* Get Programming with JavaScript
 * Listing 7.12
 * Destructuring an object argument
 */

const planet1 = {
    name: "Jupiter",
    position: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

const getPlanetInfo = planet => {
    const { name, position } = planet;
    return `${name}: planet number ${position}`;
};

console.log(getPlanetInfo(planet1));



/* Further Adventures
 *
 * 1) Create a second planet object.
 *
 * 2) Use getPlanetInfo to log details of
 *    the second planet.
 *
 * 3) Update the getPlanetInfo function to
 *    include more information about
 *    each planet.
 *
 */
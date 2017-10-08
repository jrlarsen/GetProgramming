/* Get Programming with JavaScript
 * Listing 7.13
 * Shorthand properties and argument destructuring
 */

const buildPlanet = function (name, position, type, radius, rank) {
    return {
        name,
        position,
        type,
        radius,
        sizeRank: rank
    };
};

const getPlanetInfo = ({name, position}) => `${name.toUpperCase()}: planet ${position}`;

const planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
const planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));



/* Further Adventures
 *
 * 1) Create a getPlanetInfo2 function that
 *    uses destructuring to gather other planet
 *    properties and returns a different string
 *    of info.
 *
 */
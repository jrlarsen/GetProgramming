/* Get Programming with JavaScript
 * Listing 3.14
 * Location for a weather app
 */

var location = {
    "city"      : "San Francisco",
    "state"     : "CA",
    "country"   : "US",
    "zip"       : "94101",
    "latitude"  : 37.775,
    "longitude" : -122.418,
    "elevation" : 47.000
};



/* Further Adventures
 *
 * 1) Run the program
 *
 * 2) In the console tab, click after the blue arrow.
 *    Type location.city followed by Enter
 *    to show the city property.
 *
 * Hmmmm, something's not right!
 *
 * 3) Type location and press Enter
 *    to display the whole location object.
 *
 * Okay, that's definitely not our location object.
 *
 * This is an example of a variable collision.
 * Browsers (and JS Bin) are programs themselves and
 * create their own variables.
 * Other code, not ours, has declared its own
 * location variable, over-writing ours.
 *
 * 4) Change our location variable, now calling
 *    it geolocation.
 *    Repeat steps 1, 2 and 3, using geolocation
 *    instead of location.
 *
 */

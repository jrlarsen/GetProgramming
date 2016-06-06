var Place = require('./place');

var buildMap = function (mapData) {
    var placesStore = {};

    var buildPlace = function (placeData) {
        var place = new Place(placeData.title, placeData.description);

        if (placeData.items !== undefined) {
            placeData.items.forEach(place.addItem);
        }

        placesStore[placeData.id] = place;
    };

    var buildExits = function (placeData) {
        var here = placesStore[placeData.id];

        if (placeData.exits !== undefined) {
            placeData.exits.forEach(function (exit) {
                var there = placesStore[exit.to];
                
                var challenge;
                
                if (exit.challenge) {
                    challenge = Object.assign({}, exit.challenge);
                }
                
                here.addExit(exit.direction, there);
                here.addChallenge(exit.direction, challenge);
            });
        }
    };

    // create all places
    mapData.places.forEach(buildPlace);

    // link places together
    mapData.places.forEach(buildExits);

    return {
        firstPlace: mapData.firstPlace,
        store: placesStore
    };
};

module.exports = buildMap;
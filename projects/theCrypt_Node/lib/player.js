var Player = function (name, health) {
    var items = [];
    var place = null;

    this.addItem = function (item) {
        items.push(item);
    };

    this.hasItem = function (item) {
        return items.indexOf(item) !== -1;
    };

    this.removeItem = function (item) {
        var itemIndex = items.indexOf(item);
        if (itemIndex !== -1) {
            items.splice(itemIndex, 1);
        }
    };

    this.setPlace = function (destination) {
        place = destination;
    };

    this.getPlace = function () {
        return place;
    };

    this.applyDamage = function (damage) {
        health = health - damage;
    };

    this.getData = function () {
        var data = {
            "name" : name,
            "health" : health,
            "items" : items.slice()
        };

        if (place !== null) {
            data.place = place.title;
        }

        return data;
    };
};

module.exports = Player;
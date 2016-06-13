var between = function (lowest, highest) {
    var range = highest - lowest + 1;
    return lowest + Math.floor(Math.random() * range);
};

module.exports = between;
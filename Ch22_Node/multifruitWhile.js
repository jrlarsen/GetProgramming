var between = require('./between');

var fruit = ['Apple', 'Orange', 'Lime', 'Lemon', 'Strawberry',
    'Cranberry', 'Banana', 'Pineapple', 'Mango', 'Kumquat'];

var i, fruitIndex;

i = 1;

while (i < 6) {

    fruitIndex = between(0, 9);
    console.log(fruit[fruitIndex]);

    i++;
}
var between = require('./between');

var fruit = ['Apple', 'Orange', 'Lime', 'Lemon', 'Strawberry',
    'Cranberry', 'Banana', 'Pineapple', 'Mango', 'Kumquat'];

var i, fruitIndex;

for (i = 1; i < 6; i++) {
    fruitIndex = between(0, 9);
    console.log(fruit[fruitIndex]);
}
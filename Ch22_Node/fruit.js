var between = require('./between');

var fruit = ['Apple', 'Orange', 'Lime', 'Lemon', 'Strawberry',
    'Cranberry', 'Banana', 'Pineapple', 'Mango', 'Kumquat'];

var fruitIndex = between(0, 9);

console.log(fruit[fruitIndex]);            
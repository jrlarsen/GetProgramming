var express = require('express');
var router = express.Router();
var games = require('../lib/gameCache');


// game parameter

router.param('game', function (req, res, next, id) {
    var game = games.get(id);

    if (game === undefined) {
        res.sendStatus(404);
    } else if (game.inPlay === false) {
        res.json(game.getData());
    } else {
        game.clearMessages();
        req.game = game;
        next();
    }
});


// routes

router.get('/start', startGame);
router.post('/game:game/get', getItem);
router.post('/game:game/use/:item/:direction', useItem);
router.post('/game:game/go/:direction', go);


// route handlers

function startGame (req, res) {
    var game = games.start("Kandra", 50);

    res.json(game.getData());
}

function getItem (req, res) {
    var game = req.game;
    var player = game.player;
    var place = player.getPlace();

    var item = place.getLastItem();

    if (item !== undefined) {
        player.addItem(item);
    } else {
        game.addMessage("There is no item to get");
    }

    res.json(game.getData());
}

function useItem (req, res) {
    var game = req.game;

    var item = req.params.item;
    var direction = req.params.direction;

    var player = game.player;
    var place = player.getPlace();
    var challenge = place.getChallenge(direction);

    if (challenge === undefined || challenge.complete === true) {
        game.addMessage("You don't need to use that there");
    } else if (player.hasItem(item)) {

        if (item === challenge.requires) {
            game.addMessage(challenge.success);
            challenge.complete = true;
            if (challenge.itemConsumed) {
                player.removeItem(item);
            }
        } else {
            game.addMessage(challenge.failure);
        }

    } else {
        game.addMessage("You don't have that item");
    }

    res.json(game.getData());
}

function go (req, res) {
    var game = req.game;

    var direction = req.params.direction;

    var player = game.player;
    var place = player.getPlace();
    var destination = place.getExit(direction);
    var challenge = place.getChallenge(direction);

    if (destination === undefined) {
        game.addMessage("There is no exit in that direction");
    } else {
        if ((challenge === undefined) || challenge.complete) {
            player.setPlace(destination);
        } else {
            if (challenge.damage) {
                player.applyDamage(challenge.damage);
            }
            game.addMessage(challenge.message);
        }
    }

    res.json(game.getData());
}


// exports

module.exports = router;
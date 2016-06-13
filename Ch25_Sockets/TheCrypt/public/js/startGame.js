var btnStart = document.getElementById('btnStart');

btnStart.addEventListener('click', function () {
    var playerName = document.getElementById('txtPlayerName').value;
    var gameID = document.getElementById('txtGameID').value;

    game.init(playerName, gameID);
});
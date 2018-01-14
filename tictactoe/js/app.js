var cell0 = document.getElementById('0');
var cell1 = document.getElementById('1');
var cell2 = document.getElementById('2');
var cell3 = document.getElementById('3');
var cell4 = document.getElementById('4');
var cell5 = document.getElementById('5');
var cell6 = document.getElementById('6');
var cell7 = document.getElementById('7');
var cell8 = document.getElementById('8');
var symbolStatus = document.getElementById('symbol');
var symbolButton = document.getElementById('symbol-button');
var wonX = document.getElementById('x-won');
var wonO = document.getElementById('o-won');
var turn = 1;
var gameOver = false;
var playerSymbol = "X";

var states = [
    // [0], [1], [2]
    cell0, cell1, cell2,
    // [3], [4], [5]
    cell3, cell4, cell5,
    // [6], [7], [8]
    cell6, cell7, cell8
];

var computerPlays = () => {
    var computerToken = playerSymbol === "X" ? "O" : "X";
    var emptyCells = [];
    var randomCellIndex;
    var randomCell;
    states.forEach((state, index) => {
        if (state.innerHTML === "") {
            emptyCells.push(index);
        };
    });
    randomCellIndex = Math.floor(Math.random() * ((emptyCells.length - 1) - 0 + 1)) + 0;
	computerPickedCell = states[parseInt(emptyCells[randomCellIndex])] || null;
	console.log(computerPickedCell);
	if (!!computerPickedCell) {
    	computerPickedCell.innerHTML = computerToken;
		turn ++;
		checkWin(computerToken, 'COMPUTER');
	};
}

var resetGame = () => {
    for (var id=0;id < 9;id++) {
        states[id].innerHTML = "";
    };
    wonX.style.display = "none";
    wonO.style.display = "none";
    symbolButton.style.opacity = "1";
    turn = 1;
};

var clickCell = (id) => {
    if (turn) {
        symbolButton.style.opacity = "0";
    };
    if (states[id].innerHTML === "") {
        states[id].innerHTML = playerSymbol;
        turn ++;
        checkWin(playerSymbol, 'YOU');
        computerPlays();
    };
    if (gameOver) {
		window.setTimeout(resetGame, 2000);
        gameOver = false;
    };
};

var changeSymbol = () => {
    var newSymbol = playerSymbol === "X" ? "O" : "X";
    playerSymbol = newSymbol;
    symbolStatus.innerHTML = `YOUR SYMBOL: ${newSymbol}`;
};

var checkWin = (symbol, player) => {
    if (states[0].innerHTML === symbol && states[1].innerHTML === symbol && states[2].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    } else if (states[3].innerHTML === symbol && states[4].innerHTML === symbol && states[5].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    } else if (states[6].innerHTML === symbol && states[7].innerHTML === symbol && states[8].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    } else if (states[0].innerHTML === symbol && states[4].innerHTML === symbol && states[8].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    } else if (states[2].innerHTML === symbol && states[4].innerHTML === symbol && states[6].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    } else if (states[3].innerHTML === symbol && states[4].innerHTML === symbol && states[5].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    } else if (states[0].innerHTML === symbol && states[3].innerHTML === symbol && states[6].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    } else if (states[1].innerHTML === symbol && states[4].innerHTML === symbol && states[7].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    } else if (states[2].innerHTML === symbol && states[5].innerHTML === symbol && states[8].innerHTML === symbol) {
        gameOver = true;
        document.getElementById(`${symbol.toLowerCase()}-won`).style.display = "inline-block";
    };
	if (turn > 9) {
		gameOver = true;
	};
};

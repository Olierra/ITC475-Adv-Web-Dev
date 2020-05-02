// Store player data here.
var player1 = '';
var player2 = '';
var player1Color = 'red'; //Really want to allow players to choose their own colors soon...
var player2Color = 'yellow';
var currentPlayer = 1; //Gotta start with someone... :P

//Build the table and reset button here. New Game and Rules built below.
var tableRow = document.getElementsByTagName('tr');
var tableData = document.getElementsByTagName('td');
var playerTurn = document.querySelector('.player-turn');
const slots = document.querySelectorAll('.slot');
const rematchButton = document.querySelector('.rematch');
const rulesButton = document.querySelector('.rules');
const rulesCard = document.querySelector('#rules');

//------------ Funtions ------------//

/*
	The start of it all. This ensures that all varibles are where they need to be.
	Originally, the page would immediately prompt you for players' names.
	I didn't like this, as I don't think a site should ever prompt you unless you reqested it.
	But, we don't want blank names for the high scores, so once you choose a new game,
	we'll insist you enter something.
	Keep it clean, we don't have any bouncers to tell you "your name's not on the list," yet.
*/
function startGame(){
	slots.forEach(slot => {slot.style.backgroundColor = 'black';});
	player1 = '';
	player2 = '';
	currentPlayer = 1;
	playerTurn.textContent = '';

	while (player1 === '') {
		player1 = prompt('Player One: Enter your name. You will be red.');
	};

	while (player2 === '') {
		player2 = prompt('Player Two: Enter your name. You will be yellow.');
	};

	playerTurn.textContent = `${player1}'s turn!`;
	playerTurn.style.color = 'white';

	Array.prototype.forEach.call(tableData, (cell) => {
	    cell.addEventListener('click', changeColor);
	    // Set all slots to black for new game.
	    cell.style.backgroundColor = 'black';
	});

}

/*
	Big function calling other functions. This is the heart of the app. 
	Here, we'll check the lowest possible, valid slot in the column selected, and place a chip.
	Then, we'll go below to see if it was a winning move, a draw, or if we need to continue to the next player.
	In the event of a win, we'll tell the next function who won so we can celebrate and get them on the scoreboard!
	Draws are handled similarly, but we update the draw record instead of the wins/losses.
	The current player will swap if we're still playing, until there's a win or a draw. Have fun!
*/
function changeColor(e) {
    // Get clicked column index
    let column = e.target.cellIndex;
    let row = [];
    if (player1 != '') {
    	for (i = 5; i > -1; i--) {
	        if (tableRow[i].children[column].style.backgroundColor == 'black') {
	            row.push(tableRow[i].children[column]);
	            if (currentPlayer === 1) {
	                row[0].style.backgroundColor = 'red';
	                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()) {
	                    playerWon(`${player1}`, player1Color, `${player2}`);
	                } else if (drawCheck()) {
	                    playerDraw(`${player1}`, `${player2}`);
	                } else {
	                    playerTurn.textContent = `${player2}'s turn`
	                    return currentPlayer = 2;
	                }
	            } else {
	                row[0].style.backgroundColor = 'yellow';
	                if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()) {
	                    playerWon(`${player2}`, player2Color, `${player1}`);
	                } else if (drawCheck()) {
	                    playerDraw(`${player1}`, `${player2}`);
	                } else {
	                    playerTurn.textContent = `${player1}'s turn`
	                    return currentPlayer = 1;
	                }
	            }
	        }
	    }	    
    }
}

//Gotta check if those colors match, that's the whole game!
function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'black' && one !== undefined);
}

//A classic, but still a win!
function horizontalCheck() {
    for (let row = 0; row < tableRow.length; row++) {
        for (let col = 0; col < 4; col++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row].children[col + 1].style.backgroundColor,
                tableRow[row].children[col + 2].style.backgroundColor, tableRow[row].children[col + 3].style.backgroundColor)) {
                return true;
            }
        }
    }
}

//Climbing up the board with a four in a row!
function verticalCheck() {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row + 1].children[col].style.backgroundColor,
                tableRow[row + 2].children[col].style.backgroundColor, tableRow[row + 3].children[col].style.backgroundColor)) {
                return true;
            };
        }
    }
}

//Smooth, you got four in a row diagonally!
function diagonalCheck() {
    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row + 1].children[col + 1].style.backgroundColor,
                tableRow[row + 2].children[col + 2].style.backgroundColor, tableRow[row + 3].children[col + 3].style.backgroundColor)) {
                return true;
            }
        }
    }

}

//Gotta watch those diagonal wins, they can sneak up on you!
function diagonalCheck2() {
    for (let col = 0; col < 4; col++) {
        for (let row = 5; row > 2; row--) {
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row - 1].children[col + 1].style.backgroundColor,
                tableRow[row - 2].children[col + 2].style.backgroundColor, tableRow[row - 3].children[col + 3].style.backgroundColor)) {
                return true;
            }
        }
    }
}

//Did you get a draw? Actually impressive!
function drawCheck() {
    let fullSlot = []
    for (i = 0; i < tableData.length; i++) {
        if (tableData[i].style.backgroundColor !== 'black') {
            fullSlot.push(tableData[i]);
        }
    }
    if (fullSlot.length === tableData.length) {
        return true;
    }
}

//Congrats! Or sorry if you didn't win. This will update the "player's turn" section to show who won and remove the ability to play more chips until you reset or start a new game. Digital chips don't make a mess. :P
function playerWon(matchWinner, matchWinnerColor, matchOpponent){
    playerTurn.textContent = `${matchWinner} WINS!!`;
    playerTurn.style.color = matchWinnerColor;
	Array.prototype.forEach.call(tableData, (cell) => {
	    cell.removeEventListener('click', changeColor);
	});
	//Winner name, win, draw, loss, opponent name, win, draw, loss
	prepareResults(matchWinner, '1', '0', '0', matchOpponent, '0', '0', '1');
	return true;
}

//Getting here is acutally harder than you would think. So glad I don't have to test this anymore... :P
function playerDraw(player1, player2){
	playerTurn.textContent = 'DRAW!';
	//Player 1 name, win, draw, loss, Player 2 name, win, draw, loss
	prepareResults(player1, '0', '1', '0', player2, '0', '1', '0');
	return true;
}

//Want to play again? This resets the board, but keeps the players. Originally kept player 1 as red, but changed the winner of the previous match to player 1. I overrode this, as it was confusing to play as yellow if you're used to being red. Also want to allow players to choose their own colors and this would have messed that up too.
rematchButton.addEventListener('click', () => {
    if (player1 != ''){
    	Array.prototype.forEach.call(tableData, (cell) => {
		    cell.addEventListener('click', changeColor);
		    // Set all slots to black for new game.
		    cell.style.backgroundColor = 'black';
		});
		playerTurn.style.color = 'white';
		currentPlayer = 1;
    	return (currentPlayer === 1 ? playerTurn.textContent = `${player1}'s turn` : playerTurn.textContent = `${player2}'s turn`);
    }
    else {
    	playerTurn.textContent = 'Please press New Game!';
    }
    
});

//This code used from Optikalefx's Javascript opject to PHP object YouTube tutorial (link below).
//This will create an json object to send to the PHP script, for use in updating the database.
//Link: https://www.youtube.com/watch?v=pORFYsgOXog&list=WL&index=14&t=0s

//if it is associative, then it will be an object in php
function jsonObjecttoPHPObject(object) {
	var json = "{";
	for (property in object) {
		var value = object[property];
		if(typeof(value) == "string") {
			json += '"' +property+ '":"' +value+ '",'
		}
		else {
			if(!value[0]) { //if its an associative array
				json += '"' +property+ '":' +jsonObjecttoPHPObject(value)+ ',';
			} else {
				json += '"' +property+ '":[';
				for (prop in value) json += '"' +value[prop]+ '",';
				json = json.substr(0,json.length-1) + "],";
			}
		}
	}
	return json.substr(0,json.length-1) + "}";
}

//Building the array to be sent through json to the PHP script handling the SQL updating.
function prepareResults(matchWinner,matchWinnerWin,matchWinnerDraw,matchWinnerLoss,matchOpponent,matchOpponentWin,matchOpponentDraw,matchOpponentLoss) {
	var results = new Array();
	results['matchWinner'] = matchWinner;
	results['matchWinnerWin'] = matchWinnerWin;
	results['matchWinnerDraw'] = matchWinnerDraw;
	results['matchWinnerLoss'] = matchWinnerLoss;

	results['matchOpponent'] = matchOpponent;
	results['matchOpponentWin'] = matchOpponentWin;
	results['matchOpponentDraw'] = matchOpponentDraw;
	results['matchOpponentLoss'] = matchOpponentLoss;
	var json = jsonObjecttoPHPObject(results);
	submitResults(json);
}

//Sends the final result of building the json object. Had to use Jquery, as pure JS was a nightmare for this...@.@
function submitResults(json){
	$.post('/Assignment/Components/crewmember.php',{json:json});
}

$('.rules').click(function() {
	$('.rulesCard').fadeToggle();
});
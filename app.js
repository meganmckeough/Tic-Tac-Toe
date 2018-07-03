var boardSquares = document.querySelectorAll('.square');
var playerOne = document.querySelector('#p1');
var playerTwo = document.querySelector('#p2');
var square1 = document.querySelector('.one');
var square2 = document.querySelector('.two');
var square3 = document.querySelector('.three');
var square4 = document.querySelector('.four');
var square5 = document.querySelector('.five');
var square6 = document.querySelector('.six');
var square7 = document.querySelector('.seven');
var square8 = document.querySelector('.eight');
var square9 = document.querySelector('.nine');
var winScreenNetflix = document.querySelector('.win-screen-netflix');
var winScreenStan = document.querySelector('.win-screen-stan');
var restart = document.querySelector('.restart');

//to randomly allocate one of the players 'your turn' - first turn
function allocateFirstPlayer () {
	var randomPlayer = Math.floor(Math.random() * Math.floor(2));
	if (randomPlayer === 0) {
		playerOne.classList.add('your-turn');
	} else {
		playerTwo.classList.add('your-turn');
	}
};

allocateFirstPlayer();

//to change class when square is clicked/chosen, then changing the turn to other player
function chooseSquare () {
	if (playerOne.classList.contains('your-turn') === true) {
		event.target.classList.add('chosenp1');
		playerTwo.classList.add('your-turn');	
		playerOne.classList.remove('your-turn');
	} else {
		event.target.classList.add('chosenp2');
		playerOne.classList.add('your-turn');
		playerTwo.classList.remove('your-turn');
	}
	checkForWin();
};

//checking for one of eight win conditions
function checkForWin () {
	if (square1.classList.contains('chosenp1') && square2.classList.contains('chosenp1') && square3.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosenp2') && square2.classList.contains('chosenp2') && square3.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square4.classList.contains('chosenp1') && square5.classList.contains('chosenp1') && square6.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square4.classList.contains('chosenp2') && square5.classList.contains('chosenp2') && square6.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square7.classList.contains('chosenp1') && square8.classList.contains('chosenp1') && square9.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square7.classList.contains('chosenp2') && square8.classList.contains('chosenp2') && square9.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosenp1') && square4.classList.contains('chosenp1') && square7.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosenp2') && square4.classList.contains('chosenp2') && square7.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square3.classList.contains('chosenp1') && square6.classList.contains('chosenp1') && square9.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square3.classList.contains('chosenp2') && square6.classList.contains('chosenp2') && square9.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosenp1') && square5.classList.contains('chosenp1') && square9.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosenp2') && square5.classList.contains('chosenp2') && square9.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square3.classList.contains('chosenp1') && square5.classList.contains('chosenp1') && square7.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square3.classList.contains('chosenp2') && square5.classList.contains('chosenp2') && square7.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square2.classList.contains('chosenp1') && square5.classList.contains('chosenp1') && square8.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square2.classList.contains('chosenp2') && square5.classList.contains('chosenp2') && square8.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	}
}

//need to take a look at this function
function resetBoard () {
	if (winScreenNetflix.classList.contains('.hidden') === false) {
		winScreenNetflix.classList.add('hidden');
	} else if (winScreenStan.classList.contains('.hidden') === false) {
		winScreenStan.classList.add('hidden');
	}
};

//event listener for each square on board
boardSquares.forEach(function(thisSquare) {
	thisSquare.addEventListener('click', chooseSquare);
});

restart.addEventListener('click', resetBoard);

//for targeting parent if I need to do that instead
	// if (event.target.classList.contains('square') === false) {
	// 	return;
	// }


	// var gameBoard = document.querySelectorAll('.game-board');
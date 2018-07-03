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

//add function to randomly assign "your turn"

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
	} else if (square1.classList.contains('chosenp2') && square2.classList.contains('chosenp2') && square3.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
	} else if (square4.classList.contains('chosenp1') && square5.classList.contains('chosenp1') && square6.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
	} else if (square4.classList.contains('chosenp2') && square5.classList.contains('chosenp2') && square6.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
	} else if (square7.classList.contains('chosenp1') && square8.classList.contains('chosenp1') && square9.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
	} else if (square7.classList.contains('chosenp2') && square8.classList.contains('chosenp2') && square9.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
	} else if (square1.classList.contains('chosenp1') && square4.classList.contains('chosenp1') && square7.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
	} else if (square2.classList.contains('chosenp2') && square5.classList.contains('chosenp2') && square8.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
	} else if (square3.classList.contains('chosenp1') && square6.classList.contains('chosenp1') && square9.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
	} else if (square3.classList.contains('chosenp2') && square6.classList.contains('chosenp2') && square9.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
	} else if (square1.classList.contains('chosenp1') && square5.classList.contains('chosenp1') && square9.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
	} else if (square1.classList.contains('chosenp2') && square5.classList.contains('chosenp2') && square9.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
	} else if (square3.classList.contains('chosenp1') && square5.classList.contains('chosenp1') && square7.classList.contains('chosenp1') === true) {
		winScreenNetflix.classList.remove('hidden');
	} else if (square3.classList.contains('chosenp2') && square5.classList.contains('chosenp2') && square7.classList.contains('chosenp2') === true) {
		winScreenStan.classList.remove('hidden');
	}
}

boardSquares.forEach(function(thisSquare) {
	thisSquare.addEventListener('click', chooseSquare);
});


//for targeting parent if I need to do that instead
	// if (event.target.classList.contains('square') === false) {
	// 	return;
	// }


	// var gameBoard = document.querySelectorAll('.game-board');
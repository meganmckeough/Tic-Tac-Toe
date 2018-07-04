var boardSquares = document.querySelectorAll('.square');
var playerNetflix = document.querySelector('#p1');
var playerStan = document.querySelector('#p2');
var winScreenNetflix = document.querySelector('.win-screen-netflix');
var winScreenStan = document.querySelector('.win-screen-stan');
var restart = document.querySelector('.restart');

//targeting squares
var square1 = document.querySelector('.one');
var square2 = document.querySelector('.two');
var square3 = document.querySelector('.three');
var square4 = document.querySelector('.four');
var square5 = document.querySelector('.five');
var square6 = document.querySelector('.six');
var square7 = document.querySelector('.seven');
var square8 = document.querySelector('.eight');
var square9 = document.querySelector('.nine');

//targeting square images
var square1ImgStan = document.querySelector('.one img.stan');
var square1ImgNetflix = document.querySelector('.one img.netflix');
var square2ImgStan = document.querySelector('.two img.stan');
var square2ImgNetflix = document.querySelector('.two img.netflix');
var square3ImgStan = document.querySelector('.three img.stan');
var square3ImgNetflix = document.querySelector('.three img.netflix');
var square4ImgStan = document.querySelector('.four img.stan');
var square4ImgNetflix = document.querySelector('.four img.netflix');
var square5ImgStan = document.querySelector('.five img.stan');
var square5ImgNetflix = document.querySelector('.five img.netflix');
var square6ImgStan = document.querySelector('.six img.stan');
var square6ImgNetflix = document.querySelector('.six img.netflix');
var square7ImgStan = document.querySelector('.seven img.stan');
var square7ImgNetflix = document.querySelector('.seven img.netflix');
var square8ImgStan = document.querySelector('.eight img.stan');
var square8ImgNetflix = document.querySelector('.eight img.netflix');
var square9ImgStan = document.querySelector('.nine img.stan');
var square9ImgNetflix = document.querySelector('.nine img.netflix');

//to randomly allocate one of the players 'your turn' - first turn
function allocateFirstPlayer () {
	var randomPlayer = Math.floor(Math.random() * Math.floor(2));
	if (randomPlayer === 0) {
		playerNetflix.classList.add('your-turn');
	} else {
		playerStan.classList.add('your-turn');
	}
};

allocateFirstPlayer();

//to show the Netflix img on a chosen square
function selectedNetflix () {
	if (event.target === square1) {
		square1.classList.add('chosen-netflix');
		square1ImgNetflix.classList.remove('hidden');
	}
	if (event.target === square2) {
		square2.classList.add('chosen-netflix');
		square2ImgNetflix.classList.remove('hidden');
	}
	if (event.target === square3) {
		square3.classList.add('chosen-netflix');
		square3ImgNetflix.classList.remove('hidden');
	}
	if (event.target === square4) {
		square4.classList.add('chosen-netflix');
		square4ImgNetflix.classList.remove('hidden');
	}
	if (event.target === square5) {
		square5.classList.add('chosen-netflix');
		square5ImgNetflix.classList.remove('hidden');
	}
	if (event.target === square6) {
		square6.classList.add('chosen-netflix');
		square6ImgNetflix.classList.remove('hidden');
	}
	if (event.target === square7) {
		square7.classList.add('chosen-netflix');
		square7ImgNetflix.classList.remove('hidden');
	}
	if (event.target === square8) {
		square8.classList.add('chosen-netflix');
		square8ImgNetflix.classList.remove('hidden');
	}
	if (event.target === square9) {
		square9.classList.add('chosen-netflix');
		square9ImgNetflix.classList.remove('hidden');
	}
};

//to show the Stan img on a chosen square
function selectedStan () {
	if (event.target === square1) {
		square1.classList.add('chosen-stan');
		square1ImgStan.classList.remove('hidden');
	} 
	if (event.target === square2) {
		square2.classList.add('chosen-stan');
		square2ImgStan.classList.remove('hidden');
	} 
	if (event.target === square3) {
		square3.classList.add('chosen-stan');
		square3ImgStan.classList.remove('hidden');
	} 
	if (event.target === square4) {
		square4.classList.add('chosen-stan');
		square4ImgStan.classList.remove('hidden');
	} 
	if (event.target === square5) {
		square5.classList.add('chosen-stan');
		square5ImgStan.classList.remove('hidden');
	} 
	if (event.target === square6) {
		square6.classList.add('chosen-stan');
		square6ImgStan.classList.remove('hidden');
	} 
	if (event.target === square7) {
		square7.classList.add('chosen-stan');
		square7ImgStan.classList.remove('hidden');
	} 
	if (event.target === square8) {
		square8.classList.add('chosen-stan');
		square8ImgStan.classList.remove('hidden');
	} 
	if (event.target === square9) {
		square9.classList.add('chosen-stan');
		square9ImgStan.classList.remove('hidden');
	} 
};

//to claim square for player, then changing the turn to other player
function chooseSquare () {
	if (playerNetflix.classList.contains('your-turn') === true) {
		selectedNetflix();
		checkForWin();
		playerStan.classList.add('your-turn');	
		playerNetflix.classList.remove('your-turn');
	} else {
		selectedStan();
		checkForWin();
		playerNetflix.classList.add('your-turn');	
		playerStan.classList.remove('your-turn');
	}
};

//checking for one of eight win conditions, per player
function checkForWin () {
	if (square1.classList.contains('chosen-netflix') && square2.classList.contains('chosen-netflix') && square3.classList.contains('chosen-netflix') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-stan') && square2.classList.contains('chosen-stan') && square3.classList.contains('chosen-stan') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square4.classList.contains('chosen-netflix') && square5.classList.contains('chosen-netflix') && square6.classList.contains('chosen-netflix') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square4.classList.contains('chosen-stan') && square5.classList.contains('chosen-stan') && square6.classList.contains('chosen-stan') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square7.classList.contains('chosen-netflix') && square8.classList.contains('chosen-netflix') && square9.classList.contains('chosen-netflix') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square7.classList.contains('chosen-stan') && square8.classList.contains('chosen-stan') && square9.classList.contains('chosen-stan') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-netflix') && square4.classList.contains('chosen-netflix') && square7.classList.contains('chosen-netflix') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-stan') && square4.classList.contains('chosen-stan') && square7.classList.contains('chosen-stan') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square3.classList.contains('chosen-netflix') && square6.classList.contains('chosen-netflix') && square9.classList.contains('chosen-netflix') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square3.classList.contains('chosen-stan') && square6.classList.contains('chosen-stan') && square9.classList.contains('chosen-stan') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-netflix') && square5.classList.contains('chosen-netflix') && square9.classList.contains('chosen-netflix') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-stan') && square5.classList.contains('chosen-stan') && square9.classList.contains('chosen-stan') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square3.classList.contains('chosen-netflix') && square5.classList.contains('chosen-netflix') && square7.classList.contains('chosen-netflix') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square3.classList.contains('chosen-stan') && square5.classList.contains('chosen-stan') && square7.classList.contains('chosen-stan') === true) {
		winScreenStan.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square2.classList.contains('chosen-netflix') && square5.classList.contains('chosen-netflix') && square8.classList.contains('chosen-netflix') === true) {
		winScreenNetflix.classList.remove('hidden');
		restart.classList.remove('hidden');
	} else if (square2.classList.contains('chosen-stan') && square5.classList.contains('chosen-stan') && square8.classList.contains('chosen-stan') === true) {
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

//event listener for restart
restart.addEventListener('click', resetBoard);

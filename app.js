var boardSquares = document.querySelectorAll('.square');
var playerNetflix = document.querySelector('#player-netflix');
var playerNetflixTurn = document.querySelector('#player-netflix p');
var playerStan = document.querySelector('#player-stan');
var playerStanTurn = document.querySelector('#player-stan p');
var winScreenNetflix = document.querySelector('.win-screen-netflix');
var winScreenStan = document.querySelector('.win-screen-stan');
var restartStan = document.querySelector('.win-screen-stan .restart p');
var restartNetflix = document.querySelector('.win-screen-netflix .restart p');
var squareImages = document.querySelectorAll('.square img');
var winsNetflixCounter = document.querySelector('.wins-netflix span');
var winsStanCounter = document.querySelector('.wins-stan span');
var selectService = document.querySelectorAll('.choose-service img');
var selectScreen = document.querySelector('.choose-service');
var drawScreen = document.querySelector('.draw-screen');
var restartDraw = document.querySelector('.draw-screen .restart p');
var threeWinsNetflix = document.querySelector('.three-wins-netflix');
var threeWinsStan = document.querySelector('.three-wins-stan');
var refreshStan = document.querySelector('.three-wins-stan .refresh');
var refreshNetflix = document.querySelector('.three-wins-netflix .refresh');

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

//targeting square images per player
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

var winsNetflix = 0;
var winsStan = 0;

winsStanCounter.textContent = winsStan;
winsNetflixCounter.textContent = winsNetflix;

function startGame () {
	selectScreen.classList.add('hidden');
}

//to randomly allocate one of the players 'your turn' - first turn
function allocateFirstPlayer () {
	var randomPlayer = Math.floor(Math.random() * Math.floor(2));
	if (randomPlayer === 0) {
		playerNetflix.classList.add('your-turn');
		playerNetflixTurn.textContent = "Netflix goes first >>";
		changePlayerHeader();
	} else {
		playerStan.classList.add('your-turn');
		playerStanTurn.textContent = "<< Stan goes first";
		changePlayerHeader();
	}
};

//change player heading styles
function changePlayerHeader () {
	if (playerNetflix.classList.contains('your-turn') === true) {
		document.querySelector('.netflix').style.fontSize = '60px';
		document.querySelector('.netflix').style.borderBottom = '5px solid #da1921';
	} else {
		document.querySelector('.netflix').style.fontSize = '40px';
		document.querySelector('.netflix').style.borderBottom = 'none';
	} 
	if (playerStan.classList.contains('your-turn') === true) {
		document.querySelector('.stan').style.fontSize = '60px';
		document.querySelector('.stan').style.borderBottom = '5px solid #0073ff';	
	} else {
		document.querySelector('.stan').style.fontSize = '40px';
		document.querySelector('.stan').style.borderBottom = 'none';
	};		
}	

allocateFirstPlayer();
changePlayerHeader();

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
		playerStanTurn.textContent = "<< Your turn!";
		playerNetflix.classList.remove('your-turn');
		changePlayerHeader();
	} else {
		selectedStan();
		checkForWin();
		playerNetflix.classList.add('your-turn');	
		playerNetflixTurn.textContent = "Your turn! >>";
		playerStan.classList.remove('your-turn');
		changePlayerHeader();
	}
};

//to clear all squares to replay game
function clearSquares () {
	boardSquares.forEach(function(thisSquare) {
		if (thisSquare.classList.contains('chosen-stan') === true) {
			thisSquare.classList.remove('chosen-stan');
		}
		if (thisSquare.classList.contains('chosen-netflix') === true) {
			thisSquare.classList.remove('chosen-netflix');
		}	
	});
	squareImages.forEach(function(thisImage) {
		thisImage.classList.add('hidden');			
	});
}

//checking for one of eight win conditions, per player
function checkForWin () {
	if (square1.classList.contains('chosen-netflix') && square2.classList.contains('chosen-netflix') && square3.classList.contains('chosen-netflix') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsNetflix();
		winScreenNetflix.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-stan') && square2.classList.contains('chosen-stan') && square3.classList.contains('chosen-stan') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsStan();
		winScreenStan.classList.remove('hidden');
	} else if (square4.classList.contains('chosen-netflix') && square5.classList.contains('chosen-netflix') && square6.classList.contains('chosen-netflix') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsNetflix();
		winScreenNetflix.classList.remove('hidden');
	} else if (square4.classList.contains('chosen-stan') && square5.classList.contains('chosen-stan') && square6.classList.contains('chosen-stan') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsStan();
		winScreenStan.classList.remove('hidden');
	} else if (square7.classList.contains('chosen-netflix') && square8.classList.contains('chosen-netflix') && square9.classList.contains('chosen-netflix') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsNetflix();
		winScreenNetflix.classList.remove('hidden');
	} else if (square7.classList.contains('chosen-stan') && square8.classList.contains('chosen-stan') && square9.classList.contains('chosen-stan') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsStan();
		winScreenStan.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-netflix') && square4.classList.contains('chosen-netflix') && square7.classList.contains('chosen-netflix') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsNetflix();
		winScreenNetflix.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-stan') && square4.classList.contains('chosen-stan') && square7.classList.contains('chosen-stan') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsStan();
		winScreenStan.classList.remove('hidden');
	} else if (square3.classList.contains('chosen-netflix') && square6.classList.contains('chosen-netflix') && square9.classList.contains('chosen-netflix') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsNetflix();
		winScreenNetflix.classList.remove('hidden');
	} else if (square3.classList.contains('chosen-stan') && square6.classList.contains('chosen-stan') && square9.classList.contains('chosen-stan') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsStan();
		winScreenStan.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-netflix') && square5.classList.contains('chosen-netflix') && square9.classList.contains('chosen-netflix') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsNetflix();
		winScreenNetflix.classList.remove('hidden');
	} else if (square1.classList.contains('chosen-stan') && square5.classList.contains('chosen-stan') && square9.classList.contains('chosen-stan') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsStan();
		winScreenStan.classList.remove('hidden');
	} else if (square3.classList.contains('chosen-netflix') && square5.classList.contains('chosen-netflix') && square7.classList.contains('chosen-netflix') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsNetflix();
		winScreenNetflix.classList.remove('hidden');
	} else if (square3.classList.contains('chosen-stan') && square5.classList.contains('chosen-stan') && square7.classList.contains('chosen-stan') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsStan();
		winScreenStan.classList.remove('hidden');
	} else if (square2.classList.contains('chosen-netflix') && square5.classList.contains('chosen-netflix') && square8.classList.contains('chosen-netflix') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsNetflix();
		winScreenNetflix.classList.remove('hidden');
	} else if (square2.classList.contains('chosen-stan') && square5.classList.contains('chosen-stan') && square8.classList.contains('chosen-stan') === true) {
		window.scrollTo(0, 0);
		checkThreeWinsStan();
		winScreenStan.classList.remove('hidden');
	} else if (document.querySelectorAll('.chosen-stan').length + document.querySelectorAll('.chosen-netflix').length === 9) {
		window.scrollTo(0, 0);
		drawScreen.classList.remove('hidden');
	}
}

function checkThreeWinsNetflix () {
	if (winsNetflix === 2) {
		threeWinsNetflix.classList.remove('hidden');
	}
}

function checkThreeWinsStan () {
	if (winsStan === 2) {
		threeWinsStan.classList.remove('hidden');
	}
}

function addToCounter () {
	winsStanCounter.textContent = winsStan;
	winsNetflixCounter.textContent = winsNetflix;
}

//to reset board items and start next round
function resetBoard () {
	if (winScreenStan.classList.contains('hidden') === false) {
		winScreenStan.classList.add('hidden');
		clearSquares();
		winsStan++;
		addToCounter();
		playerNetflix.classList.remove('your-turn');
		allocateFirstPlayer();
	}
	if (winScreenNetflix.classList.contains('hidden') === false) {
		winScreenNetflix.classList.add('hidden');
		clearSquares();
		winsNetflix++
		addToCounter();
		playerStan.classList.remove('your-turn');
		allocateFirstPlayer();
	} 
	if (drawScreen.classList.contains('hidden') === false) {
		drawScreen.classList.add('hidden');
		clearSquares();
		addToCounter();
		if (playerStan.classList.contains('your-turn')) {
			playerStan.classList.remove('your-turn');
		}
		if (playerNetflix.classList.contains('your-turn')) {
			playerNetflix.classList.remove('your-turn');
		}
		allocateFirstPlayer();
	}
};

//event listener for each square on board
boardSquares.forEach(function(thisSquare) {
	thisSquare.addEventListener('click', chooseSquare);
});

//event listener to start game
selectService.forEach(function(thisSquare) {
	thisSquare.addEventListener('click', startGame);
});

//event listeners for restart
restartStan.addEventListener('click', resetBoard);
restartNetflix.addEventListener('click', resetBoard);
restartDraw.addEventListener('click', resetBoard);
refreshStan.addEventListener('click', function () {
	location.reload();
});
refreshNetflix.addEventListener('click', function () {
	location.reload();
});

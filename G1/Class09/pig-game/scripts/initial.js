// GLOBAL VARIABLES

const gameWinningScore = 10;
let playerOneScore = 0;
let playerTwoScore = 0;
let roundScore = 0;
let activePlayer = 0;

// using flag
// let isGameActive = false;


// BUTTONS
let newGameBtn = document.querySelector('.btn-new');
let rollBtn = document.querySelector('.btn-roll');
let holdBtn = document.querySelector('.btn-hold');

// SCORE ELEMENTS
let pOneTotalScoreElement = document.getElementById('score-0');
let pTwoTotalScoreElement = document.getElementById('score-1');
let pOneCurrentScoreElement = document.getElementById('current-0');
let pTwoCurrentScoreElement = document.getElementById('current-1');

function newGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    roundScore = 0;
    activePlayer = 0;
    // usign flag
    // isGameActive = true;

    // usign disabled
    // rollBtn.disabled = false;
    // holdBtn.disabled = false;

    rollBtn.addEventListener('click', rollDice);
    holdBtn.addEventListener('click', holdScore);

    pOneTotalScoreElement.innerText = 0;
    pOneCurrentScoreElement.innerText = 0;
    pTwoTotalScoreElement.innerText = 0;
    pTwoCurrentScoreElement.innerText = 0;
}

function rollDice() {
    // using flag
    // if (!isGameActive) {
    //     return;
    // }

    let diceOne = Math.floor(Math.random() * 6 + 1);
    let diceTwo = Math.floor(Math.random() * 6 + 1);

    document.querySelector('.dice').src = `./dice/dice-${diceOne}.png`;
    document.querySelector('.dice2').src = `./dice/dice-${diceTwo}.png`;

    if (diceOne !== 1 && diceTwo !== 1) {
        roundScore += diceOne + diceTwo;

        if (activePlayer === 0) {
            pOneCurrentScoreElement.innerText = roundScore;
        } else {
            pTwoCurrentScoreElement.innerText = roundScore;
        }
    } else {
        nextPlayer();
    }
}

function holdScore() {
    // using flag
    // if (!isGameActive) {
    //     return;
    // }

    if (activePlayer === 0) {
        playerOneScore += roundScore;
        pOneTotalScoreElement.innerText = playerOneScore;
        nextPlayer();
    } else {
        playerTwoScore += roundScore;
        pTwoTotalScoreElement.innerText = playerTwoScore;
        nextPlayer();
    }
    checkForWinner();
}

function nextPlayer() {
    roundScore = 0;

    if (activePlayer === 1) {
        pTwoCurrentScoreElement.innerText = roundScore;
    } else {
        pOneCurrentScoreElement.innerText = roundScore;
    }

    document.querySelector(`.player-${activePlayer}-panel`)
            .classList.remove('active');

    activePlayer = activePlayer === 1 ? 0 : 1;
    // if (activePlayer === 1) {
    //     activePlayer = 0;
    // } else {
    //     activePlayer = 1;
    // }
    
    document.querySelector(`.player-${activePlayer}-panel`)
            .classList.add('active');
}

function checkForWinner() {
    if (playerOneScore >= gameWinningScore) {
        // using flag
        // isGameActive = false;

        // usign disable
        // rollBtn.disabled = true;
        // holdBtn.disabled = true;

        rollBtn.removeEventListener('click', rollDice);
        holdBtn.removeEventListener('click', holdScore);

        alert('Player One is the winner');
        return;
    }

    if (playerTwoScore >= gameWinningScore) {
        // using flag
        // isGameActive = false;
        
        // using disable
        // rollBtn.disabled = true;
        // holdBtn.disabled = true;

        rollBtn.removeEventListener('click', rollDice);
        holdBtn.removeEventListener('click', holdScore);

        alert('Player Two is the winner');
        return;
    }

    // if (playerOneScore >= gameWinningScore) {
    //     alert('Player One is the winner');
    // } else if (playerTwoScore >= gameWinningScore) {
    //     alert('Player Two is the winner');
    // }
}

newGameBtn.addEventListener('click', newGame);
// when using flag and disable btn

// rollBtn.addEventListener('click', rollDice);
// holdBtn.addEventListener('click', holdScore);
// COPILOT EXAMPELS


// GLOBAL VARIABLES

const game = {
    winningScore: 100,
    scores: [0, 0],
    roundScore: 0,
    activePlayer: 0,
    isGameActive: true,

    resetGame() {
        this.scores = [0, 0];
        this.roundScore = 0;
        this.activePlayer = 0;
        this.isGameActive = true;
    },

    addRoundScore(score) {
        this.roundScore += score;
    },

    resetRoundScore() {
        this.roundScore = 0;
    },

    addPlayerScore(playerIndex) {
        this.scores[playerIndex] += this.roundScore;
    },

    getPlayerScore(playerIndex) {
        return this.scores[playerIndex];
    },

    switchActivePlayer() {
        this.activePlayer = this.activePlayer === 0 ? 1 : 0;
    },

    getActivePlayer() {
        return this.activePlayer;
    },

    setGameInactive() {
        this.isGameActive = false;
    },

    isGameRunning() {
        return this.isGameActive;
    },

    setWinningScore(score) {
        this.winningScore = score;
    }
};

// BUTTONS
const newGameBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');
const winningScoreInput = document.querySelector('.winning-score-input');

// SCORE ELEMENTS
const totalScoreElements = [
    document.getElementById('score-0'),
    document.getElementById('score-1')
];
const currentScoreElements = [
    document.getElementById('current-0'),
    document.getElementById('current-1')
];
const playerPanels = [
    document.querySelector('.player-0-panel'),
    document.querySelector('.player-1-panel')
];
const diceImages = [
    document.querySelector('.dice'),
    document.querySelector('.dice2')
];

// HELPER FUNCTIONS
function resetUI() {
    for (let i = 0; i < totalScoreElements.length; i++) {
        totalScoreElements[i].innerText = 0;
    }

    for (let i = 0; i < currentScoreElements.length; i++) {
        currentScoreElements[i].innerText = 0;
    }

    for (let i = 0; i < playerPanels.length; i++) {
        playerPanels[i].classList.remove('winner', 'active');
    }
    playerPanels[0].classList.add('active');

    for (let dice of diceImages) {
        dice.style.display = 'none';
    }
}

function updateWinningScore() {
    const inputScore = parseInt(winningScoreInput.value, 10);
    if (!isNaN(inputScore) && inputScore > 0) {
        game.setWinningScore(inputScore);
    } else {
        alert('Please enter a valid positive number for the winning score.');
    }
}

function initGame() {
    game.resetGame();
    resetUI();
    updateWinningScore();
}

function rollDice() {
    if (!game.isGameRunning()) return;

    const diceRolls = [
        Math.floor(Math.random() * 6 + 1),
        Math.floor(Math.random() * 6 + 1)
    ];

    for (let i = 0; i < diceImages.length; i++) {
        diceImages[i].src = `./dice/dice-${diceRolls[i]}.png`;
        diceImages[i].style.display = 'block';
    }

    if (diceRolls.includes(1)) {
        switchPlayer();
    } else {
        game.addRoundScore(diceRolls[0] + diceRolls[1]);
        currentScoreElements[game.getActivePlayer()].innerText = game.roundScore;
    }
}

function holdScore() {
    if (!game.isGameRunning()) return;

    game.addPlayerScore(game.getActivePlayer());
    totalScoreElements[game.getActivePlayer()].innerText = game.getPlayerScore(game.getActivePlayer());

    if (game.getPlayerScore(game.getActivePlayer()) >= game.winningScore) {
        endGame();
    } else {
        switchPlayer();
    }
}

function switchPlayer() {
    game.resetRoundScore();
    currentScoreElements[game.getActivePlayer()].innerText = 0;

    playerPanels[game.getActivePlayer()].classList.toggle('active');
    game.switchActivePlayer();
    playerPanels[game.getActivePlayer()].classList.toggle('active');
}

function endGame() {
    game.setGameInactive();
    playerPanels[game.getActivePlayer()].classList.add('winner');
    for (let dice of diceImages) {
        dice.style.display = 'none';
    }
    alert(`Player ${game.getActivePlayer() + 1} wins!`);
}

// EVENT LISTENERS
newGameBtn.addEventListener('click', initGame);
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);

// Initialize the game on page load
initGame();
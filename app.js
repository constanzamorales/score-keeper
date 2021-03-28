// Buttons
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

// Scores display
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');

// Select the winning score
const selectScore = document.querySelector('#playto');

// Reset scores button
const resetButton = document.querySelector('#reset');

let player1Score = 0;
let player2Score = 0;
let winnerScore = 5;
let gameOver = false;

p1Button.addEventListener('click', function() {
  if (!gameOver) {
    player1Score += 1;
    if (player1Score === winnerScore) {
      gameOver = true;
      playerOne.classList.add('has-text-success');
      playerTwo.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    playerOne.textContent = player1Score;
  }
});

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        player2Score += 1;
        if (player2Score === winnerScore) {
            gameOver = true;
            playerTwo.classList.add('has-text-success');
            playerOne.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        playerTwo.textContent = player2Score;
    }
});

selectScore.addEventListener('change', function() {
    winnerScore = parseInt(this.value);
    resetScore();
});

resetButton.addEventListener('click', resetScore);

function resetScore() {
    gameOver = false;
    player1Score = 0;
    player2Score = 0;
    playerOne.textContent = 0;
    playerTwo.textContent = 0;
    playerOne.classList.remove('has-text-success', 'has-text-danger');
    playerTwo.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
let results = document.querySelector(".results");
results.textContent = "First to 5 points wins. Begin.";

let playerScoreDiv = document.querySelector(".player-score");
let playerScore = 0;
playerScoreDiv.textContent = `${playerScore}`;

let computerScoreDiv = document.querySelector(".computer-score");
let computerScore = 0;
computerScoreDiv.textContent = `${computerScore}`;

const buttons = document.querySelectorAll(".selection");
buttons.forEach(button => button.addEventListener('click', (e) => {
  if (playerScore == 5 || computerScore == 5) {
    resetScore();
  }
  // Adds animation to the results div
  results.classList.add("results-animate");
  // Everytime the event triggers, this function resets the animation for the results div
  resetAnimation();
  results.textContent = playRound(e.target.textContent, computerPlay());
 }
));

function resetAnimation() {
  let animation = document.querySelector(".results-animate");
  animation.style.animationName = "none";
  requestAnimationFrame(() => {
    animation.style.animationName = "";
  }) 
}

// Randomly generates a number (0, 1, or 2) and returns an answer based on that
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  switch(random) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

// Returns an outcome based on win/lose/tie conditions, using user and computer generated inputs as arguments
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Paper" && computerSelection == "Rock" ||
  playerSelection == "Rock" && computerSelection == "Scissors" ||
  playerSelection == "Scissors" && computerSelection == "Paper") 
  {
    playerScore++;
    playerScoreDiv.textContent = `${playerScore}`;
    if (playerScore == 5) {
      return "You were first to 5. You win!";
      // After this is returned, the next time the RPS buttons are pressed, the scores
      // are reset. This also happens when computerScore == 5.
    } 
    return `${playerSelection} beats ${computerSelection}.`;
  }
  else if (playerSelection == "Rock" && computerSelection == "Paper" ||
  playerSelection == "Paper" && computerSelection == "Scissors" ||
  playerSelection == "Scissors" && computerSelection == "Rock")
  {
    computerScore++;
    computerScoreDiv.textContent = `${computerScore}`;
    if (computerScore == 5) {
      return "The computer got to 5 first. You lose.";
    }
    return `${computerSelection} beats ${playerSelection}.`;
  }
  else if (playerSelection == computerSelection) { return "It's a tie!"; }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDiv.textContent = `${playerScore}`;
  computerScoreDiv.textContent = `${computerScore}`;
}

// Capitalises the first letter and makes the rest of the characters lowercase
function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
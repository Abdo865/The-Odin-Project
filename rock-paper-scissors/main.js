const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerChoice, computerChoice;
let playerScore = 0,
  computerScore = 0;

const btns = document.querySelectorAll("button");
btns.forEach((button) => button.addEventListener("click", startRound));

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice == 0) return ROCK;
  else if (choice == 1) return PAPER;
  return SCISSORS;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) game("Tie");
  else if (computerSelection === "rock" && playerSelection === "scissors")
    game("You Lose, Rock defeats Scissors");
  else if (computerSelection === "scissors" && playerSelection === "paper")
    game("You Lose, Scissors defeats Paper");
  else if (computerSelection === "paper" && playerSelection === "rock")
    game("You Lose, Paper defeats Rock");
  else game("You Won");
}

function startRound(e) {
  playerChoice = e.target.textContent;
  playRound(playerChoice, getComputerChoice());
}

function game(state) {
  const p = document.querySelector("p");
  if (state.includes("Won")) {
    playerScore++;
  } else if (state.includes("Lose")) {
    computerScore++;
  }

  p.textContent = `${state}
  Scores: ${playerScore} - ${computerScore}`;

  if (computerScore > 4) {
    document.querySelector("h2").textContent =
      "Winner is Computer Restart to play again";
      btns.forEach(btn=>btn.disabled = true);
  }
  if (playerScore > 4) {
    document.querySelector("h2").textContent =
      "You are The Winner Restart to Play Again";
    btns.forEach((btn) => btn.disabled = true);
  }
}

function reset() {}

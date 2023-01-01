var prompt = require("readline-sync");

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice == 0) return ROCK;
  else if (choice == 1) return PAPER;
  return SCISSORS;
}

function playRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) return "Tie";
  else if (computerSelection === "rock" && playerSelection === "scissors")
    return "you lose, rock defeats scissors";
  else if (computerSelection === "scissors" && playerSelection === "paper")
    return "you lose, scissors defeats paper";
  else if (computerSelection === "paper" && playerSelection === "rock")
    return "you lose, paper defeats rock";

  return "Whoa Whoa Whoa! You Won";
}

function game() {
  for (let i = 0, j = 0; i < 5 || j < 5; ) {
    let choice = prompt.question("Enter your Choice: ");
    let result = playRound(getComputerChoice(), choice);

    if (result === "Tie") {
      console.log(result);
      continue;
    } else if (result.includes("Won")) {
      i++;
      console.log(`${result}\nScores = ${i}: ${j}`);
    } else {
      j++;
      console.log(`${result}\nScores = ${i}: ${j}`);
    }
  }
}

game();

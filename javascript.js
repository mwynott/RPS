function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    computerSelection = Math.floor(Math.random() * 3);
    return choices[computerSelection];
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});


let humanScore = 0;
let computerScore = 0;
let round = 0;
const humanScoreElement = document.getElementById("humanScore");
const computerScoreElement = document.getElementById("computerScore");
const roundResult = document.getElementById("result");
const roundDisplay = document.getElementById("roundDisplay");

 
  
  

function playRound(humanSelection, computerSelection) {
  
  if (round >= 5) return document.getElementById("result").textContent = "Game over!";
  round++ 
  roundDisplay.textContent = `Round: ${round}`;
  humanSelection = humanSelection.toLowerCase();

  if (round === 5) {
    console.log("Game over");
  }  

  if (humanSelection === computerSelection) {
    console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}! It's a tie!`);
    return "tie";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissor") ||
    (humanSelection === "scissor" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}! Human wins!`);
    humanScore++;
    humanScoreElement.textContent = `Human: ` + humanScore;
    roundResult.textContent = "Human wins!";
  } else {
    computerScore++
    computerScoreElement.textContent = `Computer: ` + computerScore;
    roundResult.textContent = "Computer wins!";
  }
  if (round === 5) {
    setTimeout(() => {
        round = 0;
        roundDisplay.textContent = "Round: 0";
    }, 2000);
}
}





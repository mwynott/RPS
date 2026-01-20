
function getComputerChoice() {
  const computerSelection = Math.random();
  if (computerSelection < 0.34) {
    return "rock";
  } else if (computerSelection <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice() {
  while (true) {
    
    let humanSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    
    
    if (humanSelection === "rock" || humanSelection === "paper" || humanSelection === "scissors") {
      console.log("Rock, paper, scissors...shoot!");
      return humanSelection;
    } else {
      
      alert("Please choose rock, paper, or scissors!");
    }
  }
}

function playRound(humanSelection, computerSelection) {

  humanSelection = humanSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (humanSelection === computerSelection) {
    console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}! It's a tie!`);
    return "tie";
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "scissors" && computerSelection === "paper") ||
    (humanSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}! Human wins!`);
    return "human wins";
  } else {
    console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}! Computer wins!`);
    return "computer wins";
  }
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const rounds = 5;

  for (let i = 0; i < rounds; i++) {
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
   
    const result = playRound(humanSelection, computerSelection);

    
    if (result === "human wins") {
      humanScore++;
    } else if (result === "computer wins") {
      computerScore++;
    }
    
  }

  
  if (humanScore > computerScore) {
    console.log(`Final Score -> Human: ${humanScore}, Computer: ${computerScore}. You won the game!`);
  } else if (computerScore > humanScore) {
    console.log(`Final Score -> Human: ${humanScore}, Computer: ${computerScore}. Computer wins the game!`);
  } else {
    console.log(`Final Score -> Human: ${humanScore}, Computer: ${computerScore}. The game is a draw!`);
  }
}


playGame();

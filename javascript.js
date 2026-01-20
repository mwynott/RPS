    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice()
    let computerScore = 0;
    let humanScore = 0;
    

    function getComputerChoice() {
        const computerSelection = Math.random();
        if (computerSelection < .34) {
        return "rock";
    }
        else if (computerSelection <= .67) {
        return "paper";
    }   else {
        return "scissors";
    }
}

    function getHumanChoice() {
        while (true) {
        let humanSelection = prompt("Rock, paper, scissors?").toLowerCase();    
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
            console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
            It's a tie!`);
                } else if (
                    (humanSelection === "rock" && computerSelection === "scissors") ||
                    (humanSelection === "scissors" && computerSelection === "paper") ||
                    (humanSelection === "paper" && computerSelection === "rock") 
                )   {
                    console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
                    Human wins!`)
                    humanScore += 1;
                } else {
                    console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
                    Computer wins!`)
                    computerScore += 1;
                }
            }
        
    function playGame() {
        humanScore = 0;
        computerScore = 0;
        const rounds = 5;

        for (let i = 0; i < rounds; i++) {
            humanSelection = prompt("Rock, paper, scissors?");
            computerSelection = getComputerChoice();
            let result = playRound(humanSelection, computerSelection);

            if (result === "Human wins!") {
                humanScore++;
            } else if (result === "Computer wins!") {
                computerScore++;
            }
        }
        if (humanScore > computerScore) {
            console.log(`Human score: ${humanScore} Computer score: ${computerScore} You won the game!`);
        } else if (computerScore > humanScore) {
            console.log(`Human score: ${humanScore} Computer score: ${computerScore} Computer  wins!`);
        } else {
            console.log(`Human score: ${humanScore} Computer score: ${computerScore} The game is a draw!`);
        }
    }

    playGame();



//Create a function named getComputerChoice
//getComputerChoice should return rock, paper, or scissors

    function getComputerChoice() {
        const random = Math.random();
        if (random < .34) {
        return "rock";
    }
        else if (random <= .67) {
        return "paper";
    }   else {
        return "scissors";
    }
}

//Create a function named getHumanChoice

//getHumanChoice returns valid choices depending on what user inputs
//Use prompt to get user input
//Make humanChoice case-insensitive 

    function getHumanChoice() {
        while (true) {
        let choice = prompt("Rock, paper, scissors?").toLowerCase();    
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            console.log("Rock, paper, scissors...shoot!");
            return choice;
        } else {
            alert("Please choose rock, paper, or scissors!");
        }
    }
}

//Create variable named humanScore and initialize to 0
//Create variable named computerScore and initialize to 0
    
    let humanScore = 0;
    let computerScore = 0;

//Create a function named playRound(humanChoice, computerChoice) 
// <--uses human and computer choice as arguments
   

    function playRound(humanSelection, computerSelection) {

        humanSelection = humanSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (humanSelection === "rock" && computerSelection ==="paper") {
            console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
            Computer wins!`);
        } else if (humanSelection === "paper" && computerSelection === "scissors") {
            console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
            Computer wins!`);
        } else if (humanSelection === "scissors" && computerSelection === "rock") {
            console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
            Computer wins!`);
        } else if (humanSelection === computerSelection) {
            console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
            It's a tie!`);
        } else if (humanSelection === "rock" && computerSelection ==="scissors") {
            console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
            Human wins!`);
        } else if (humanSelection === "paper" && computerSelection ==="rock") {
            console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
            Human wins!`);
        } else if (humanSelection === "scissors" && computerSelection ==="paper") {
            console.log(`Human chose: ${humanSelection}! Computer chose: ${computerSelection}!
            Human wins!`);
        }
    }

    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection);

//playRound should console.log a string value for winner
//Increment humanScore or computerScore variable based on winner



//Create function named playGame for game logic incl. rounds
//Move playRound function and score variables into playGame function
//Play 5 rounds by calling playRound 5 times



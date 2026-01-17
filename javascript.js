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
//test with console.log

    function getHumanChoice() {
        while (true) {
        let choice = prompt("Rock, paper, scissors?").toLowerCase();    
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            console.log("You chose: ", choice);
            return choice;
        } else {
            alert("Please choose rock, paper, or scissors!");
        }
    }
}



//Create variable named humanScore and initialize to 0
//Create variable named computerScore and initialize to 0

//Create a function named playRound(humanChoice, computerChoice) 
// <--uses human and computer choice as arguments
//Make humanChoice case-insensitive 
//playRound should console.log a string value for winner
//Increment humanScore or computerScore variable based on winner

//Create function named playGame for game logic incl. rounds
//Move playRound function and score variables into playGame function
//Play 5 rounds by calling playRound 5 times



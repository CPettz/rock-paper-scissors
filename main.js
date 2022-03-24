// Rock Paper Scissors: The Odin Project //

// Generate a function that randomly outputs either 1) Rock, 2) Paper, or 3) Scissors
function computerPlay() {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Write a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    
    // Make sure that the playerSelection is in string format, and store it in humanPlay variable if it is
    if(typeof(playerSelection) === 'string') {
        let humanPlay = playerSelection.toLowerCase();
    } else {
        alert("Make sure your selection is in string format!");
    }
    
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'lose';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'tie';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'tie';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'lose';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'tie';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'lose';
    } else {
        return 'Please choose rock, paper, or scissors';
    }

}

// Create a new function called game() that initiates a 5 round game and keeps score and reports a winner or loser at the end
function game() {

    // Initialize the game score
    let humanScore = 0;
    let computerScore = 0;

    // Create a loop to play the game 5 times
        // Prompt the user to enter a guess
        let playerSelection = window.prompt("Please enter your selection: ", "Enter here");
        
        // Set the computerSelection variable to take in the value from the computerPlay function
        let computerSelection = computerPlay();

        // Initialize the first game. The result is from the POV of the human player.
        let gameResult = playRound(playerSelection, computerSelection);

        if (gameResult === 'win') {
            humanScore += 1;
            console.log("You won this round!");
        } else if (gameResult === 'lose') {
            computerScore += 1;
            console.log("You lost this round!");
        } else if (gameResult === 'tie') {
            console.log("You tied this round! No points awarded");
        }

    if (humanScore > computerScore) {
        console.log("You won the game! You had " + humanScore + " point(s). The computer had " + computerScore + " point(s).")
    } else if (humanScore < computerScore) {
        console.log("You lost the game! You had " + humanScore + " point(s). The computer had " + computerScore + " point(s).")
    } else if (humanScore === computerScore) {
        console.log("You tied the game! You had " + humanScore + " point(s). The computer had " + computerScore + " point(s).")
    }
}

// Select the proper buttons by ID using getElementById
let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let resultContainer = document.getElementById('resultContainer');
let runningScore = document.getElementById('runningScore');

// Initalize the Score Variables
let humanScore = 0;
let computerScore = 0;

// Define function that takes human and computer scores to display alerts
// and rest the page when it is reached

function declareWinner(hScore, cScore) {
    if (hScore == 5) {
        alert("Congratulations! You won!\nHuman: " + hScore + " Computer: " + cScore);
        location.reload();
    } else if (cScore == 5) {
        alert("Better luck next time...\nHuman: " + hScore + " Computer: " + cScore);
        location.reload();
    } else {
        return;
    }
}

// Allow the user to play with Rock
rockBtn.addEventListener('click', function() {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();
    let gameResult = playRound(playerSelection, computerSelection);  
    resultContainer.textContent = "The computer played " + computerSelection + ". You " + gameResult + ".";

    // Alter the score variables based on the result
    if (gameResult === 'win') {
        humanScore += 1;
    } else if (gameResult === 'lose') {
        computerScore += 1;
    }

    runningScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    declareWinner(humanScore, computerScore);
});

// Allow the user to play with Paper
paperBtn.addEventListener('click', function() {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();
    let gameResult = playRound(playerSelection, computerSelection);
    resultContainer.textContent = "The computer played " + computerSelection + ". You " + gameResult + ".";

    // Alter the score variables based on the result
    if (gameResult === 'win') {
        humanScore += 1;
    } else if (gameResult === 'lose') {
        computerScore += 1;
    }

    runningScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    declareWinner(humanScore, computerScore);
    
});

// Allow the user to play with Scissors
scissorsBtn.addEventListener('click', function() {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();
    let gameResult = playRound(playerSelection, computerSelection);
    resultContainer.textContent = "The computer played " + computerSelection + ". You " + gameResult + ".";

    // Alter the score variables based on the result
    if (gameResult === 'win') {
        humanScore += 1;
    } else if (gameResult === 'lose') {
        computerScore += 1;
    }

    runningScore.textContent = "Human: " + humanScore + " Computer: " + computerScore;
    declareWinner(humanScore, computerScore);
});



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

// Store the computerPlay return in a computerSelection variable to be used later

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
    for (let i = 0; i < 5; i ++) {
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
    }

    if (humanScore > computerScore) {
        console.log("You won the game! You had " + humanScore + " point(s). The computer had " + computerScore + " point(s).")
    } else if (humanScore < computerScore) {
        console.log("You lost the game! You had " + humanScore + " point(s). The computer had " + computerScore + " point(s).")
    } else if (humanScore === computerScore) {
        console.log("You tied the game! You had " + humanScore + " point(s). The computer had " + computerScore + " point(s).")
    }
}


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate a target random number 

const generateTarget = () => {
    let number = Math.floor(Math.random() * 10);
    return number;
}

// Compare the difference between the target number user or computer's guesses

const compareGuesses = (user, computer, secret) => {
    if(Math.abs(secret - user) == Math.abs(secret - computer) || Math.abs(secret - user) < Math.abs(secret - computer)) {
        return true;
    } else if(Math.abs(secret - computer) < Math.abs(secret - user)) {
        return false;
    }
}

// Update the score

const updateScore = winner => {
    if(winner === 'human') {
        humanScore++
    } else if (winner === 'computer') {
        computerScore++
    }
}

// Advances round number

const advanceRound = () => {
    currentRoundNumber++
}
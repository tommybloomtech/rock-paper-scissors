const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log("Error, not a move!");
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    };
    if (userChoice === "rock" & computerChoice === "paper") {
        return "You lose!";
    } else {
        return "You won!";
    }
    if (userChoice === "paper" & computerChoice === "scissors") {
        return "You lose!";
    } else {
        return "You won!";
    }
    if (userChoice === "scissors" & computerChoice === "rock") {
        return "You lose!";
    } else {
        return "You won!";
    }
}

const playGame = () => {
    console.log(`player chose ${getUserChoice('scissors')}`);
    console.log(`computer chose ${getComputerChoice()}`);
    console.log(determineWinner(getUserChoice("scissors"), getComputerChoice()));
}

playGame();
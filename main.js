function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        console.log("looks like there was an error. please try again");
    }
}

function getComputerChoice () {
    number = Math.floor(Math.random() * 3);
    // return number;
    if (number === 0) {
        return 'paper';
    } else if (number === 1) {
        return 'scissors';
    } else {
        return 'rock';
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return `It's a tie!`;
    } 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return `The compouter won!`;
        } else {
            return `You won!`;
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return `The computer won!`;
        } else {
            return `You won!`;
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return `The computer won!`;
        } else {
            return `You won!`;
        }
    }
}

function playGame () {
    var userChoice = getUserChoice('scissors');
    console.log(`The user selected ${userChoice}`);
    var computerChoice = getComputerChoice();
    console.log(`The computer selected ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

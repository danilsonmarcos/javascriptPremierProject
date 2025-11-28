console.log("Hello World");


//method that allows the program to get some random number from a max value passed as a parameter
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
} //in this case, if it passed 3 as argument of this function, will return numbers between 0 and 2; in this case (0, 1 or 2)

//method to get the value of the computer
function getComputerValue() {
    //variable that carries the number 
    let computerValue = getRandomInt(3);
    //presenting the random number 
    /////console.log(value); 
    //if statement to give the value that must be shown when the number is given
    /*if (computerValue == 0){
        return "Rock"; 
    } else if (computerValue == 1){
        return "Paper"; 
    } else { 
        return "Scissor"; 
    }*/ //seeing that the value gonna be 0, 1 or 2, it's logic that will go to the last else just if the value is equal to 2
    return computerValue;
}

//method to get the value the user gonna choose on the prompt
function getHumanValue() {
    let value = Number(prompt("Type a number (0, 1 or 2)"));
    //in case it's all correct we must know if the number typed is in the range
    while (value < 0 || value > 2) {
        value = Number(prompt("Number out of range! Choose the number into the range. (Range: 0 to 2) "));
    }
    return value;
}
//will keep the human points 
var humanScore = 0;
//will keep the computer points 
var computerScore = 0;

//method that allows the players to play rounds 
function playRound(humanChoice, computerChoice) {
    if (humanChoice < computerChoice && computerChoice == 2 && humanChoice == 0) {
        console.log("You WON. Rock beats Scissors");
        humanScore++;
    } else if (humanChoice > computerChoice && computerChoice == 0 && humanChoice == 1) {
        console.log("You WON. Paper beats Rock");
        humanScore++;
    } else if (humanChoice > computerChoice && computerChoice == 1 && humanChoice == 2) {
        console.log("You WON. Scissor beats Paper");
        humanScore++;
    } else if (computerChoice < humanChoice && humanChoice == 2 && computerChoice == 0) {
        console.log("You LOST. Rock beats Scissors");
        computerScore++;
    } else if (computerChoice > humanChoice && humanChoice == 0 && computerChoice == 1) {
        console.log("You LOST. Paper beats Rock");
        computerScore++;
    } else if (computerChoice > humanChoice && humanChoice == 1 && computerChoice == 2) {
        console.log("You LOST. Scissor beats Paper");
        computerScore++;
    } else {
        console.log("EQUALLITY");
    }
}

//method to play the game
function playGame() {
    //for loop to able the players play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = getHumanValue();
        const computerChoice = getComputerValue();
        console.log(`My Choice: ${humanChoice} and Computer choice: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }
    //show the score 
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    //show the winner or loser 
    if (humanScore > computerScore) {
        console.log("You're WINNER!");
    } else if (humanScore < computerScore){
        console.log("You're LOSER!");
    } else {
        console.log("We have a Draw"); 
    }
}

//calling method play gamme 
playGame(); 
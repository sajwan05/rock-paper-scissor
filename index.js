console.log("Javascript is connected successfully....");

function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function getHumanChoice() {
    const humanChoice = prompt("Rock Paper Scissors shoot...");

    return humanChoice.toLowerCase().trim();
}

let humanScore = 0;
let computerScore = 0;

function playRound(yourChoice, botChoice){
    if((yourChoice === "rock" && botChoice === "scissors") ||
       (yourChoice === "paper" && botChoice === "rock") ||
       (yourChoice === "scissors" && botChoice === "paper")) {
        humanScore++;
        console.log(`Hurrah! You won this Round.
            You Chose: ${yourChoice} BEATS Bot Choice: ${botChoice} 
            Score: You: ${humanScore}---- Bot: ${computerScore}`);
       }else if((botChoice === "rock" && yourChoice === "scissors") ||
                 (botChoice === "scissors" && yourChoice === "paper") ||
                 (botChoice === "paper" && yourChoice === "rock")) {
                    computerScore++;
                    console.log(`Sad! You lost this Round.
            Bot Choice: ${botChoice} beats yourChoice: ${yourChoice}
            Score: You: ${humanScore}---- Bot: ${computerScore}`);

        } else {
            computerScore++;
            humanScore++;
            console.log(`Alas! This Round got Tied. 
            Both of you chose: ${botChoice} 
            Score: You: ${humanScore}---- Bot: ${computerScore}`);
        }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);


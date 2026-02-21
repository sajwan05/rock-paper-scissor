function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function getHumanChoice() {
    const humanChoice = prompt(`This is Rock Paper Scissors game: 
        Rock Paper Scissors shoot: 
        This game will play for 5 round 
        and will choose who won the game based
        on who have more points
        Check if you can beat this Bot: `);

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





function playGame() {
    for(let i = 1; i <= 5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }
}

function whoWon(){
    playGame();

    if(humanScore > computerScore) {
        console.log(`Hurrrah! YOU WON THE GAME!!!
            FINAL SCORE: YOU: ${humanScore} ----- BOT: ${computerScore}`);
    }else if (humanScore < computerScore) {
        console.log(`Alas! YOU LOST BETTER LUCK NEXT TIME!
            FINAL SCORE: YOU: ${humanScore} ----- BOT: ${computerScore}`);
    }else {
        console.log(`Alas! THIS GAME GOT TIED!
            FINAL SCORE: YOU: ${humanScore} ----- BOT: ${computerScore}`);
    }
}

whoWon();






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


console.log("Javascript is connected successfully....");

// first we need computer choice 
// we will define a function for computer choice
// which will use array of choice and then we will use
// Math.random to generate random index and then return choices.
function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



// 2. Then by prompting we'll get human choice
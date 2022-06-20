
//game();
//playerPlay();
console.log(computerPlay());
function game(){
    for (let i =0; i < 5; i++){ //change this eventually to run until one team scores 3 wins
        //insert code to call playRound and keep score and return results
        let playerSelection = playerPlay();
        let computerselection = computerPlay();
        playRound();
    }
}

function computerPlay(){
    const rndInt = Math.floor(Math.random() * 3); //gets random number between 0 and 2
    if (rndInt == 0){
        return ("rock");
    }
    else if (rndInt == 1) {
        return ("paper");
    }
    else if(rndInt == 2){
        return ("scissors");
    }
    
} // this works and returns rock paper or scissors

function playerPlay(){
    let playerSelection = prompt("Rock, Paper, or Scissors? What do you choose?");
    
    while (true) {
       if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
           break;
       }
        else{
           alert ("Try again");
        }
    playerSelection = prompt("Rock, Paper, or Scissors? What do you choose?");
        
    }
    
    return(playerSelection);
    
    
} // this works and returns rock paper or scissors


function playRound(playerSelection, computerselection){
    //insert code to compare two inputs and return "You Lose! Paper beats Rock"
}
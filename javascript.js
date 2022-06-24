let playerScore = 0;
let computerScore = 0;
//game();



function game(){
    for (let i =0; i < 5; i++){      
        let playerSelection = playerPlay();
        let computerselection = computerPlay();
        playRound(playerSelection, computerselection);
        console.log("Your Score: " + playerScore)
        console.log("Computer Score: " + computerScore)
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
    
} // returns rock paper or scissors

function playerPlay(){
    let playerSelection = prompt("Rock, Paper, or Scissors? What do you choose?").toLowerCase();
    
    while (true) {
       if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
           break;
       }
        else{
           alert ("Try again");
        }
    playerSelection = prompt("Rock, Paper, or Scissors? What do you choose?").toLowerCase();
        
    }
    
    return(playerSelection);
    
    
} // returns rock paper or scissors


function playRound(){
    let computerselection = computerPlay();
    if(playerSelection == "rock") {
        if (computerselection == "rock"){
            console.log("tie");
        }
        else if (computerselection == "paper"){
            console.log("You Lose! Paper beats Rock!");
            computerScore ++;
        }
        else if (computerselection == "scissors"){
            console.log("You Win! Rock beats scissors!");
            playerScore ++;
        }
    }
    if (playerSelection == "paper"){
        if (computerselection == "paper"){
            console.log("tie");
        }
        else if (computerselection == "rock"){
            console.log("You Win! Paper beats Rock!");
            playerScore ++;
        }
        else if (computerselection == "scissors"){
            console.log("You Lose! scissors beats paper!");
            computerScore ++;
        }
    }
    if (playerSelection == "scissors"){
        if (computerselection == "scissors"){
            console.log("tie");
        }
        else if (computerselection == "paper"){
            console.log("You Win! Scissors beats Paper!");
            playerScore ++;
        }
        else if (computerselection == "rock"){
            console.log("You Lose! Rock beats Scissors!");
            computerScore ++;
        }
    }
    //insert code to compare two inputs and return "You Lose! Paper beats Rock"
} // this works and adds to scores



const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click' , () => playerSelection = "rock");
rock.addEventListener('click' , playRound);
paper.addEventListener('click' , () => playerSelection = "paper");
paper.addEventListener('click' , playRound);
scissors.addEventListener('click' , () => playerSelection = "scissors");
scissors.addEventListener('click', playRound);

console.log("Hello World");

let winCount = 0;
let tieCount = 0;
let loseCount = 0;

function getComputerChoice(){
    let puterWeapon = ["rock","paper","scissors"];
    let randChoice = Math.floor(Math.random()*puterWeapon.length);
    return puterWeapon[randChoice]
}

function playRound(playerChoice, computerChoice){
    if (playerChoice == "rock"){
        switch(computerChoice){
            case "rock":
                tieCount++;
                return "tie";     
            case "paper":
                loseCount++;
                return "lose";
            case "scissors":
                winCount++;
                return "win";
        }
    }
    else if (playerChoice == "paper"){
        switch(computerChoice){
            case "rock":
                winCount++;
                return "win";
            case "paper":
                tieCount++;
                return "tie";
            case "scissors":
                loseCount++;
                return "lose";
        }
    }
    else if (playerChoice == "scissors"){
        switch(computerChoice){
            case "rock":
                loseCount++;
                return "lose";
            case "paper":
                winCount++;
                return "win";
            case "scissors":
                tieCount++;
                return "tie";
        }
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("rock, paper, or scissors?");
    return playerChoice
}
    
function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(),getComputerChoice()))      
     }
     declareWinner()
    }

function declareWinner(){
    if (winCount > loseCount){
        console.log("player wins!");      
    }
    else if (winCount == loseCount){
        console.log("it's a tie!");      
    }
    else if (winCount < loseCount){
        console.log("player loses!");
    }

}

game()


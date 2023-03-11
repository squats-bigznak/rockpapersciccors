console.log("Hello World");

let winCount = 0;
let tieCount = 0;
let loseCount = 0;

const container = document.querySelector('#container');


const ps = document.createElement('div');
ps.classList.add('ps');
ps.style.color = 'red';                                      
ps.textContent = 'PLAYER SCORE ' + winCount;
ps.style.cssText = 'color: red;';
container.appendChild(ps);

const cs = document.createElement('div');
cs.classList.add('cs');
cs.style.color = 'red';                                      
cs.textContent = 'COMPUTER SCORE ' + loseCount ;
cs.style.cssText = 'color: red;';
container.appendChild(cs);

const tie = document.createElement('div');
tie.classList.add('tie');
tie.style.color = 'red';                                      
tie.textContent = 'TIES ' + tieCount ;
tie.style.cssText = 'color: red;';
container.appendChild(tie);

const whowon = document.createElement('div');
whowon.classList.add('whowon');
whowon.style.color = 'red';                                      
whowon.textContent = 'who won?';
whowon.style.cssText = 'color: red;';
container.appendChild(whowon);



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

// function getPlayerChoice(){
//     let playerChoice = prompt("rock, paper, or scissors?");
//     return playerChoice
// }
    
function game(){  
    // playRound(getPlayerChoice(),getComputerChoice())) 

    // declareWinner()
    }

function declareWinner(){
    if (winCount > 5){
        whowon.textContent = 'playerwon';
        // whowon.classList.remove('whowon');
        // playerwon.classList.add('playerwon');
        return;    
    }
         
    else if (loseCount > 5){
        whowon.textContent = 'computerwon';
        // whowon.classList.remove('whowon');
        // computerwon.classList.add('computerwon');
        return; 
    }
    
    ps.textContent = 'PLAYER SCORE ' + winCount;
    cs.textContent = 'COMPUTER SCORE ' + loseCount;
    tie.textContent = 'TIES ' + tieCount ;
    return;
    // game();
}

// game()
const rockbutton = document.querySelector("button[data-key='rock']");
const paperbutton = document.querySelector("button[data-key='paper']");
const scissorsbutton = document.querySelector("button[data-key='scissors']");
rockbutton.addEventListener("click", () => myFunction("rock"));
paperbutton.addEventListener("click",() => myFunction("paper"));
scissorsbutton.addEventListener("click", () => myFunction("scissors"));

// const btnList = document.querySelectorAll('button');
// for (let i = 0; i < btnList.length; i++) {
//     btnList[i].addEventListener("click", myFunction);
// }

function myFunction(button) {
    playRound(button,getComputerChoice());
    
    console.log(button)
    declareWinner();
  }


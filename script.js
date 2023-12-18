const startButton = document.getElementById('start-btn');
const showContainer = document.getElementById('show-container');

startButton.addEventListener('click', showGame)

function showGame() {
  startButton.style.display = 'none';
  showContainer.style.display = 'block'
}



//get computer move
function getComputerChoice(){

    let computerSelection = '';

   const randomNumber = Math.random();
   if (randomNumber >= 0 && randomNumber < 1 / 3){
     computerSelection = "rock";
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerSelection = "Paper";
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
     computerSelection = "scissors";
   }
   return computerSelection;
 }



// this is for the score 

 let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
 }


 let resetScore = document.getElementById('reset-score');
 resetScore.addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
  showPlayRound.innerText = '';
  showYourScore.innerText = '';
  
 });


 
//generating the dom
const showYourScore = document.getElementById('show-your-score');
const showPlayRound = document.getElementById('show-playround');
const showScore =  document.getElementById("show-score");
 
updateScore();

 function updateScore(){
  showScore.innerText = `Wins: ${score.wins} , losses: ${score.losses} , Ties:${score.ties}`

}




//compare computer move and player move
 
  function playRound(playerSelection){
  const computerSelection = getComputerChoice();

  let result = '';

  if (playerSelection === "rock"){
     if (computerSelection === "scissors"){
        result = "You win!"
     } else if(computerSelection === "Paper"){
       result = "You lose.."
     } else if(computerSelection === "rock"){
       result = "Tie."
     }
     } else if(playerSelection === "Paper"){
       if (computerSelection === "rock"){
       result = "You win!"
     } else if(computerSelection === "scissors"){
       result = "You lose.."
     } else if(computerSelection === "Paper"){
       result = "Tie."
     }
    } else if(playerSelection === "scissors"){
       if (computerSelection === "Paper"){
       result = "You win!"
     } else if(computerSelection === "rock"){
       result = "You lose.."
     } else if(computerSelection === "scissors"){
       result = "Tie."
     }
    } 

    


    if(result === "You win!"){
      score.wins += 1
    } else if(result === "You lose.."){
     score.losses+= 1
    } else if(result === "Tie."){
      score.ties+=1
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    
    showPlayRound.innerHTML = ` YOU <img src="images/${playerSelection}-emoji.png" class="move-img">
    <img src="images/${computerSelection}-emoji.png" class="move-img"> COMPUTER `
    
    showYourScore.innerText = result;


  }

 

  
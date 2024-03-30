const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
}; //Default operator

updateScoreElement();

let isAutoPlaying = false;
let intervalID;

function autoPlay(){
  if(!isAutoPlaying){//not playing so start
    intervalID = setInterval(()=>{
      const playerMove = pickComputerMove();
      playGame(playerMove);

    },1000);
    isAutoPlaying = true;//now playing
  }
  else{
    clearInterval(intervalID);//stop
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click',()=>playGame('rock'));

document.querySelector('.js-paper-button').addEventListener('click',()=>playGame('paper'));

document.querySelector('.js-scissors-button').addEventListener('click',()=>playGame('scissors'));

const message = document.querySelector('.js-confirmation-message');

function confirmReset(){
  message.innerHTML = `
    Are you sure you want to reset the score?
    <button onclick="
      resetScore();
      message.innerHTML = '';
    "
    >Yes</button>
    <button onclick="
      message.innerHTML = '';
    ">No</button>
  `;
}

const resetScore = ()=>{
  score.wins = 0;
  score.losses = 0;
  score.ties =  0;
  localStorage.removeItem('score');
  updateScoreElement();
};

document.querySelector('.js-reset-score-button').addEventListener('click',()=>confirmReset());

document.querySelector('.js-auto-play-button').addEventListener('click',()=>autoPlay());

document.querySelector('.js-auto-play-button').addEventListener('click',()=>{
  document.querySelector('.js-auto-play-button').innerHTML = isAutoPlaying ? 'Stop Playing' : 'Auto Play';
});

document.body.addEventListener('keydown',(event) => {
  //console.log(event.key);
  if(event.key === 'r')
    playGame('rock');
  else if(event.key === 'p')
    playGame('paper');
  else if(event.key === 's')
    playGame('scissors');
  else if(event.key === 'a')
    autoPlay();
  else if(event.key === 'Backspace')
    confirmReset(); 
});

function playGame(userMove) {
  const computerMove = pickComputerMove();

  let result;

  if (userMove === "scissors") {
    if (computerMove === "paper") result = "You win.";
    else if (computerMove === "rock") result = "You lose.";
    else if (computerMove === "scissors") result = "Tie.";
  } else if (userMove === "paper") {
    if (computerMove === "paper") result = "Tie.";
    else if (computerMove === "rock") result = "You win.";
    else if (computerMove === "scissors") result = "You lose.";
  } else if (userMove === "rock") {
    if (computerMove === "paper") result = "You lose.";
    else if (computerMove === "rock") result = "Tie.";
    else if (computerMove === "scissors") result = "You win.";
  }

  if (result === "You win.") score.wins += 1;
  else if (result === "You lose.") score.losses += 1;
  else if (result === "Tie.") score.ties += 1;

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="images/${userMove}-emoji.png" class="move-icon" />
    <img src="images/${computerMove}-emoji.png" class="move-icon" /> Computer`;

  updateScoreElement();
}

function updateScoreElement() {
  const scoreElement = document.querySelector(".js-score");

  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove; //Local variable no naming conflicts with outside computerMove

  if (randomNumber >= 0 && randomNumber < 1 / 3) computerMove = "rock";
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
    computerMove = "paper";
  else computerMove = "scissors";

  return computerMove;
}


const p1Button = document.querySelector('.btn-player1');
const p2Button = document.querySelector('.btn-player2');
const p1Display = document.querySelector('.player1-score');
const p2Display = document.querySelector('.player2-score');
const btnReset = document.querySelector('.btn-reset');
const winningScoreSelect = document.querySelector('#playTo');


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

//BUTTON ONE SCORE KEEPER
//IF ISGAMEOVER IS TRUE, CODE STOPS RUNNING
p1Button.addEventListener('click', function() {
  if (!isGameOver){
    p1Score +=1;
  if(p1Score === winningScore){
 isGameOver = true;
 p1Display.classList.add('winner');
 p2Display.classList.add('loser');
  }
 p1Display.innerText = p1Score;
}
});

//BUTTON TWO SCORE KEEPER
p2Button.addEventListener('click', function() {
  if (!isGameOver){
    p2Score +=1;
  if(p2Score === winningScore){
 isGameOver = true;
  p2Display.classList.add('winner');
  p1Display.classList.add('loser');
  }
 p2Display.innerText = p2Score;
}
});

//THIS REFERS TO THE OBJECT EVENT WE ARE CURRENTLY LISTENING FOR, AND WE ALWAYS HAVE ACCESS TO THE VALUE OF THAT OBJECT EVENT
playTo.addEventListener('change', function(){
//CONVERTS WINNINGSCORE VALUE, WHICH IS A STRING, INTO A WHOLE INTEGER. CHECK VARIABLE IN CONSOLE TO VERIFY DATA OUTPUT AS A NUMBER OR STRING
 winningScore = parseInt(this.value);
 reset();
});

//PASSING resetGame AS A REFERENCE/PARAMETER AND IT WILL EXECUTE WHEN THE TIME COMES
btnReset.addEventListener('click', reset)
//BUTTON RESET
//IF ISGAMEOVER IS TRUE, CODE STOPS RUNNING
function reset(){
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.innerText = 0;
  p2Display.innerText = 0;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('winner', 'loser');
};
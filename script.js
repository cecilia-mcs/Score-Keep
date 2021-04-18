const p1 = {
  score: 0,
  button: document.querySelector('.btn-player1'),
  display: document.querySelector('.player1-score')
  
}

const p2 = {
  score: 0,
  button: document.querySelector('.btn-player2'),
  display: document.querySelector('.player2-score')
}

const btnReset = document.querySelector('.btn-reset');
const winningScoreSelect = document.querySelector('#playTo');
const winningMsg = document.querySelector('.winning-msg');

let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
      if (!isGameOver){
        player.score += 1;
      if(player.score === winningScore){
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
      player.button.disabled = true;
      opponent.button.disabled = true;
      
    }

    if (p1.score === winningScore){
      winningMsg.style.display = 'block';
      winningMsg.innerText ='Congratulations! Player One Wins!';
    } else if (p2.score === winningScore) {
      winningMsg.style.display = 'block';
      winningMsg.innerText ='Congratulations! Player Two Wins!';
    }
    
       player.display.innerText = player.score;
      
    }
  }

//IF ISGAMEOVER IS TRUE, CODE STOPS RUNNING
p1.button.addEventListener('click', function() {
updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
 updateScores(p2, p1);
});

//THIS REFERS TO THE OBJECT EVENT WE ARE CURRENTLY LISTENING FOR
//WE ALWAYS HAVE ACCESS TO THE VALUE OF THAT OBJECT EVENT
playTo.addEventListener('change', function(){
//CONVERTS WINNINGSCORE VALUE, WHICH IS A STRING, INTO A WHOLE INTEGER. 
//CHECK VARIABLE IN CONSOLE TO VERIFY DATA OUTPUT AS A NUMBER OR STRING
 winningScore = parseInt(this.value);
 reset();
});

//PASSING reset AS A REFERENCE/PARAMETER AND IT WILL EXECUTE WHEN THE TIME COMES
btnReset.addEventListener('click', reset)

function reset(){
  isGameOver = false;
  for(let p of [p1,p2]){
    p.score=0;
    p.display.innerText = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false;
    winningMsg.style.display = 'none';


  }
};
' use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 9;

document.querySelector('.guess').value = 10;

if (gusNumb > n) {
    
  } else if (gusNumb === n) {
    document.querySelector('.message').textContent = '🏆 Win the game...';
  } else {
    document.querySelector('.message').textContent = '📉 Low Value';
  }
  */

document.querySelector('.check').addEventListener('click', guessValue);

//
let n = Math.floor(Math.random() * 21);
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;
function displayMassage(message) {
  document.querySelector('.message').textContent = message;
}

function guessValue() {
  const gusNumb = Number(document.querySelector('.guess').value);

  if (!gusNumb) {
    displayMassage('⛔️ No number');
  } else if (gusNumb > 20) {
    if (score > 0) {
      displayMassage('⛔️ Pls enter number between 1 to 20');
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('💥 you loos the game!');

      document.querySelector('.score').textContent = score - 1;
    }
  } else if (gusNumb === n) {
    document.querySelector('body').style.backgroundColor = '#60B347';
    document.querySelector('.left').style.display = 'none';
    displayMassage('🏆 Win the game...');
    document.querySelector('.number').textContent = n;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (gusNumb !== n) {
    if (score > 1) {
      displayMassage(gusNumb > n ? ' 📈 High Value' : '📉 Low Value');

      --score;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('💥 you loos the game!');

      document.querySelector('.score').textContent = score - 1;
    }
  } else {
  }
}

document.querySelector('.again').addEventListener('click', resetValue);

function resetValue() {
  n = Math.floor(Math.random() * 21);
  score = Number((document.querySelector('.score').textContent = 20));
  displayMassage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.left').style.display = 'flex';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
}

document.addEventListener('keydown', function (b) {
  if (b.key === 'Enter') {
    guessValue();
  } else if (b.key === 'Escape') {
    resetValue();
  }
});

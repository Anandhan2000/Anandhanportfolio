"use strict";
//dice function
const diceEl = document.querySelector(".dice");

//rolldice
const rollDiceEl = document.querySelector(".roll-dice");

// holding funvtion

const holdEl = document.querySelector(".hold-value");

const plyaer1 = document.querySelector(".player1");
const plyaer2 = document.querySelector(".player2");

const congrates = document.querySelector(".congrats");

diceEl.classList.add("hidden");

let totalscore = [0, 0];
let currentScore = 0;
let CurrentPlayer = 1;

//click roll action
rollDiceEl.addEventListener("click", function () {
  //1. genarete random function for image path
  let diceRandome = Math.floor(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceRandome}.png`;
  if (diceRandome !== 1) {
    currentScore += diceRandome;
    let tot = totalscore[CurrentPlayer === 1 ? 0 : 1] + currentScore;
    if (tot >= 100) {
      diceEl.classList.add("hidden");
      document.querySelector(`.playersc--${CurrentPlayer}`).textContent =
        currentScore;
      congrates.textContent = `Player ${CurrentPlayer} WIN the Match 🏆`;
    } else {
      document.querySelector(`.playersc--${CurrentPlayer}`).textContent =
        currentScore;
      document.querySelector(".player1").classList.remove("player-active");
      document
        .querySelector(`.player${CurrentPlayer}`)
        .classList.add("player-active");
    }
  } else {
    document.querySelector(`.playersc--${CurrentPlayer}`).textContent = 0;
    document
      .querySelector(`.player${CurrentPlayer}`)
      .classList.remove("player-active");
    CurrentPlayer = CurrentPlayer === 1 ? 2 : 1;
    document
      .querySelector(`.player${CurrentPlayer}`)
      .classList.add("player-active");
    currentScore = 0;
  }
});

// hold the score functionn

holdEl.addEventListener("click", function () {
  totalscore[CurrentPlayer === 1 ? 0 : 1] += currentScore;

  document.getElementById(`plyaer-score${CurrentPlayer}`).textContent =
    totalscore[CurrentPlayer === 1 ? 0 : 1];
  document.querySelector(`.playersc--${CurrentPlayer}`).textContent = 0;
  document
    .querySelector(`.player${CurrentPlayer}`)
    .classList.remove("player-active");
  CurrentPlayer = CurrentPlayer === 1 ? 2 : 1;
  currentScore = 0;
  document
    .querySelector(`.player${CurrentPlayer}`)
    .classList.add("player-active");
});

//reload btn

const reloadEl = document.querySelector(".reload-game");

reloadEl.addEventListener("click", function () {
  diceEl.classList.add("hidden");

  document.querySelector(`.playersc--1`).textContent = 0;
  document.querySelector(`.playersc--2`).textContent = 0;
  document.getElementById(`plyaer-score1`).textContent = 0;
  document.getElementById(`plyaer-score2`).textContent = 0;
  congrates.textContent = "";
  totalscore = [0, 0];
  currentScore = 0;
  CurrentPlayer = 1;
});

"use strict";
// selecting elements
const secore0El = document.getElementById("score--0");
const secore1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const cureent0El = document.getElementById("current--0");
const cureent1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//starting conditions
secore0El.textContent = secore1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1-Generating random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;

  //2-Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3-check for rolled 1 , if true :switch to next player
  if (dice !== 1) {
    //Add dice to current score

    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});

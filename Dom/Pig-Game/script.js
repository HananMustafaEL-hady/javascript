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
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playing = true;

function init() {
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  secore0El.textContent =
    secore1El.textContent =
    secore0El.textContent =
    secore1El.textContent =
      0;
  diceEl.classList.add("hidden");
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
}
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1-  add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2 - check if plyer's score >=100;
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //switch to the next player

      switchPlayer();
    }
  }
});

//resetting the game

btnNew.addEventListener("click", init);

'use strict';

// ! ///////////////////////////////////////
// ! Breakdown

/* 

0. Create event lister for Create button
1. Save number of characters for the variable
1.1. When there is no input
2. Generate random characters for each position
3. Show password
4. Click again to enter a new number

- Math.floor and Math.random methods

*/

// const charlength = 0;
// 0. Create event lister for 'Create' button
document.querySelector('.create').addEventListener('click', function () {
  const charlength = Number(document.querySelector('.charlength').value);
  console.log(charlength);
});

// console.log(`outside ${variable}`);
/*

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".create").addEventListener("click", function () {
  const charlength = Number(document.querySelector(".charlength").value);
  console.log(charlength, typeof charlength);

  // When there is no input
  if (!charlength) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (charlength === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When charlength is wrong
  } else if (charlength !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // charlength > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(charlength > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start charlengthing...';
  displayMessage("Start charlengthing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".charlength").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
*/

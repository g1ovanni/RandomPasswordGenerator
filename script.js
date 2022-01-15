'use strict';

// ! ///////////////////////////////////////
// ! Breakdown

/* 

0. Create event lister for Create button			✅
1. Save number of characters for the variable		✅
1.1. When there is no input							✅
2. Generate random characters for each position		
3. Show password									
4. Click again to enter a new number				

- Math.floor and Math.random methods

*/

// const charLength = 0;
// 0. Create event lister for 'Create' button
// 1. Save number of characters for the variable

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.create').addEventListener('click', function () {
  const charLength = Number(document.querySelector('.charLength').value);
  console.log(charLength);

  // 1.1. When there is no input
  if (!charLength)
    displayMessage('The password should have between 8 and 20 characters');

  // Array definition ('password')
  const password = new Array(charLength);
  console.log(password);
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
  const charLength = Number(document.querySelector(".charLength").value);
  console.log(charLength, typeof charLength);

  // When there is no input
  if (!charLength) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (charLength === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When charLength is wrong
  } else if (charLength !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // charLength > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(charLength > secretNumber ? "📈 Too high!" : "📉 Too low!");
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
  document.querySelector(".charLength").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
*/

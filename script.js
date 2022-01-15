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

// const passwordLength = 0;
// 0. Create event lister for 'Create' button
// 1. Save number of characters for the variable

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.create').addEventListener('click', function () {
  const passwordLength = Number(
    document.querySelector('.passwordLength').value
  );
  const characters =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!$%&/()=?+^*,.;:-_';
  const charactersLength = characters.length;
  // Array definition ('password')
  const password = new Array(passwordLength);
  let passFinal = 0;
  let randomNum = 0;
  //   console.log(password);
  //   console.log(passwordLength);

  // 2. Generate random characters for each position
  // Creating a random password
  for (let i = 0; i < passwordLength; i++) {
    randomNum = Math.floor(Math.random() * charactersLength);
    password[i] = characters.charAt(randomNum);
  }
  passFinal = password.join('');
  //   console.log(passFinal);

  // 1.1. When there is no input
  if (!passwordLength || passwordLength > 20 || passwordLength < 8) {
    displayMessage('The password should have between 8 and 20 characters');
    document.getElementById('password').style.width = '15rem';
    document.querySelector('.password').textContent = '?';
    document.getElementById('password').style.fontFamily = 'Press Start 2P';
  } else {
    document.querySelector('.password').textContent = passFinal;
    document.getElementById('password').style.width = '1500px';
    document.getElementById('password').style.fontFamily = 'VT323';
    document.querySelector('.message').textContent =
      'There is your new password!';
  }
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
  const passwordLength = Number(document.querySelector(".passwordLength").value);
  console.log(passwordLength, typeof passwordLength);

  // When there is no input
  if (!passwordLength) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (passwordLength === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When passwordLength is wrong
  } else if (passwordLength !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // passwordLength > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(passwordLength > secretNumber ? "📈 Too high!" : "📉 Too low!");
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

  // document.querySelector('.message').textContent = 'Start passwordlengthing...';
  displayMessage("Start passwordlengthing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".passwordLength").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
*/

'use strict';

// ! ///////////////////////////////////////
// ! Breakdown

/* 

0. Create event lister for Create button			✅
1. Save number of characters for the variable		✅
1.1. When there is no input							✅
2. Generate random characters for each position		✅
3. Show password									✅
4. Click again to enter a new number				✅

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

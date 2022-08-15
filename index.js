"use strict";
//Get random number between 2 given number
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomNum = randomInt(1, 10);
// const randomNum = Math.floor(Math.random() * 10) + 1;
const tempNum = +prompt("Guess a number between 1 - 10");
let count = 1;
const checkRandomNum = function (num) {
  if (num === randomNum) {
    alert(`Success, the number was ${randomNum}! Attempts: ${count}`);
    return;
  } else if (num !== randomNum && count < 3) {
    num = +prompt("Wrong!!! Try again!");
    count++;
    checkRandomNum(num);
  } else if (num !== randomNum && count === 3) {
    alert(
      `Sorry, you failed to guess the number in three attempts. The number was ${randomNum}!`
    );
    return;
  }
};
checkRandomNum(tempNum);

//Reload the page to replay or just exit.
let playAgain = prompt("Would you like to play again? (y/n)");
if (playAgain == "y") {
  location.reload();
} else {
  alert("Thank you for playing!");
}

/* solution
function play() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    let attempts = 1;
    let guess = Number(prompt('Guess a number between 1 and 10'));

    while (guess !== randomNum && attempts < 3) {
        attempts += 1;
        guess = Number(prompt('Wrong!!! Try again!'));
    }

    if (guess === randomNum) {
        alert(`Success! The number was ${randomNum}! Attempts: ${attempts}`);
    } else {
        alert(`Sorry, you failed to guess the number in 3 attempts. The number was ${randomNum}`);
    }

}

play(); 

*/

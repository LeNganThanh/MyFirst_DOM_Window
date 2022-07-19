"use strict";
const randomNum = Math.floor(Math.random() * 10) + 1;
const tempNum = window.prompt("Guess a number between 1 - 10");
let count = 1;
const checkRandomNum = function (num) {
  if (Number(num) === randomNum) {
    window.alert(`Success, the number was ${randomNum}! Attempts: ${count}`);
    return;
  } else if (Number(num) !== randomNum && count < 3) {
    num = window.prompt("Wrong!!! Try again!");
    count++;
    checkRandomNum(num);
  } else if (Number(num) !== randomNum && count === 3) {
    window.alert(
      `Sorry, you failed to guess the number in three attempts. The number was ${randomNum}!`
    );
    return;
  }
};
checkRandomNum(tempNum);

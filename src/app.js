import "bootstrap";
import "./style.css";

const sticks = ["♠", "♥", "♣", "♦"];
const numbers = [
  "AS",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  const stick = Math.floor(Math.random() * 4);
  const num = Math.floor(Math.random() * 13);
  document.querySelector(".top-suit").innerHTML = sticks[stick];
  document.querySelector(".button-suit").innerHTML = sticks[stick];
  if (sticks[stick] === "♥" || sticks[stick] === "♦") {
    document.querySelector(".top-suit").classList.add("red");
    document.querySelector(".button-suit").classList.add("red");
  }
  const getRandomNumber = document.querySelector(".num");
  getRandomNumber.innerHTML = numbers[num];
};

// Dynamic title logic via Typed.js

let typed = new Typed(".dynamic-title", {
  strings: ["Rock", "Paper", "Scissors"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Game logic

const options = ["rock", "paper", "scissors"];
const rndmCounter = Math.floor(Math.random() * 3);
const playerResult = document.getElementById("playerResult");
const machineResult = document.getElementById("machineResult");
const finalResult = document.getElementById("finalResult");
const playerScore = document.getElementById("playerScore");
const machineScore = document.getElementById("machineScore");
let pScore = 0;
let mScore = 0;

const playGame = function (playerChoice) {
  const machineChoice = options[rndmCounter];
  let result = "";

  if (playerChoice === machineChoice) {
    result = "The game ended in a draw. 🟰";
  } else {
    switch (playerChoice) {
      case "rock":
        result = machineChoice === "scissors" ? "Great! You win. 🏆" : "You lost... 😥";
        break;
      case "paper":
        result = machineChoice === "rock" ? "Great! You win. 🏆" : "You lost... 😥";
        break;
      case "scissors":
        result = machineChoice === "paper" ? "Great! You win. 🏆" : "You lost... 😥";
        break;
    }
  }
  playerResult.textContent = `👤 Player - ${playerChoice}`;
  machineResult.textContent = `🕹️ Machine - ${machineChoice}`;
  finalResult.textContent = result;

  switch (result) {
    case "Great! You win. 🏆":
      pScore++;
      playerScore.textContent = pScore;
      break;
    case "You lost... 😥":
      mScore++;
      machineScore.textContent = mScore;
      break;
  }

  if (result) {
    finalResult.classList.add("resultActive");
  } else {
    finalResult.classList.remove("resultActive");
  }
};

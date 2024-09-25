// Dynamic title logic via Typed.js

let typed = new Typed(".dynamic-title", {
  strings: ["Rock", "Paper", "Scissors"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Game logic

const options = ["rock", "paper", "scissors"];
const playerResult = document.getElementById("playerResult");
const machineResult = document.getElementById("machineResult");
const finalResult = document.getElementById("finalResult");
const playerScore = document.getElementById("playerScore");
const machineScore = document.getElementById("machineScore");
let pScore = 0;
let mScore = 0;
let maxScore = 10;

// Function to disable buttons at the end of each round before its reset

const disableButtons = function () {
  const buttons = document.querySelectorAll(".optionBtn");
  buttons.forEach(button => {
    button.disabled = true;
  });
};

// Function to reset game at the end of every round

const resetGame = function () {
  pScore = 0;
  mScore = 0;
  playerScore.textContent = pScore;
  machineScore.textContent = mScore;
  playerResult.textContent = "👤 Player";
  machineResult.textContent = "🕹️ Machine";
  finalResult.classList.remove("resultActive");
  finalResult.textContent = "";
  const buttons = document.querySelectorAll(".optionsBtn");
  buttons.forEach(button => {
    button.disabled = false;
  });
};

// Function to play the game

const playGame = function (playerChoice) {
  if (pScore >= maxScore || mScore >= maxScore) return;
  const rndmCounter = Math.floor(Math.random() * 3);
  const machineChoice = options[rndmCounter];
  let result = "";

  if (playerChoice === machineChoice) {
    result = "The game ended in a draw. 🟰";
  } else {
    switch (playerChoice) {
      case "rock":
        result = machineChoice === "scissors" ? "Great! You won. 🏆" : "You lost... 😥";
        break;
      case "paper":
        result = machineChoice === "rock" ? "Great! You won. 🏆" : "You lost... 😥";
        break;
      case "scissors":
        result = machineChoice === "paper" ? "Great! You won. 🏆" : "You lost... 😥";
        break;
    }
  }

  playerResult.textContent = `👤 Player - ${playerChoice}`;
  machineResult.textContent = `🕹️ Machine - ${machineChoice}`;
  finalResult.textContent = result;

  switch (result) {
    case "Great! You won. 🏆":
      pScore++;
      playerScore.textContent = pScore;
      break;
    case "You lost... 😥":
      mScore++;
      machineScore.textContent = mScore;
      break;
  }

  if (pScore === maxScore) {
    finalResult.textContent = "🥇 Congrats! You won the match! 🎊";
    finalResult.classList.add("resultActive;");
    setTimeout(() => {
      party();
    }, 100);
  } else if (mScore === maxScore) {
    finalResult.textContent = "💥 The machine wins the match... 😥";
  }

  if (result) {
    finalResult.classList.add("resultActive");
  } else {
    finalResult.classList.remove("resultActive");
  }
};

// Emoji funfetti via JSConfetti

const canvas = document.getElementById("funfettiEmoji");
const jsConfetti = new JSConfetti();
const party = function () {
  jsConfetti.addConfetti({
    emojis: ["✨", "🌈", "🍄", "🦄", "🎈", "🎊"],
  });
};

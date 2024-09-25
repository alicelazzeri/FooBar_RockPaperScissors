// Typed.js dynamic title logic

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
const scoreDisplay = document.querySelectorAll(".scoreDisplay");
let pScore = 0;
let mScore = 0;
let maxScore = 10;

// Function to disable buttons at the end of each round
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
  const buttons = document.querySelectorAll(".optionBtn");
  buttons.forEach(button => {
    button.disabled = false;
  });
};

// Function to play the game between player and machine
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
    finalResult.classList.add("resultActive");
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

// Function to handle auto-play between two machines
const autoPlay = function () {
  if (pScore >= maxScore || mScore >= maxScore) return;
  const rndmCounter1 = Math.floor(Math.random() * 3);
  const rndmCounter2 = Math.floor(Math.random() * 3);
  const machineChoice1 = options[rndmCounter1];
  const machineChoice2 = options[rndmCounter2];
  let result = "";

  if (machineChoice1 === machineChoice2) {
    result = "The game ended in a draw. 🟰";
  } else {
    switch (machineChoice1) {
      case "rock":
        result = machineChoice2 === "scissors" ? "Machine 1 won. 🚀" : "Machine 2 won. 🚀";
        break;
      case "paper":
        result = machineChoice2 === "rock" ? "Machine 1 won. 🚀" : "Machine 2 won. 🚀";
        break;
      case "scissors":
        result = machineChoice2 === "paper" ? "Machine 1 won. 🚀" : "Machine 2 won. 🚀";
        break;
    }
  }

  playerResult.textContent = `🕹️ Machine 1 - ${machineChoice1}`;
  machineResult.textContent = `🕹️ Machine 2 - ${machineChoice2}`;
  finalResult.textContent = result;

  if (result.includes("Machine 1 won")) {
    pScore++;
    playerScore.textContent = pScore;
  } else if (result.includes("Machine 2 won")) {
    mScore++;
    machineScore.textContent = mScore;
  }

  if (pScore === maxScore) {
    finalResult.textContent = "🥇 Machine 1 wins the match! 🎊";
    finalResult.classList.add("resultActive");
    setTimeout(() => {
      party();
    }, 100);
  } else if (mScore === maxScore) {
    finalResult.textContent = "💥 Machine 2 wins the match... 😥";
  }

  if (result) {
    finalResult.classList.add("resultActive");
  } else {
    finalResult.classList.remove("resultActive");
  }
};

// Emoji confetti logic
const canvas = document.getElementById("funfettiEmoji");
const jsConfetti = new JSConfetti();
const party = function () {
  jsConfetti.addConfetti({
    emojis: ["✨", "🌈", "🍄", "🦄", "🎈", "🎊"],
  });
};

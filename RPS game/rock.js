let userScore = 0;
let computerScore = 0;
let gameLocked = false; // Prevent multiple clicks during countdown

function makeChoice(userChoice) {
  if (gameLocked) return; // stop double clicks
  gameLocked = true;

  document.getElementById("result").innerText = "";
  document.getElementById("replay").style.display = "none";

  const countdown = document.getElementById("countdown");
  countdown.innerText = "1";
  setTimeout(() => countdown.innerText = "2", 500);
  setTimeout(() => countdown.innerText = "3", 1000);

  // Generate computer choice after countdown
  setTimeout(() => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(userChoice, computerChoice);
    updateScore(result);

    countdown.innerText = `You chose ${capitalize(userChoice)} | Computer chose ${capitalize(computerChoice)}`;
    document.getElementById("result").innerText = result;
    document.getElementById("replay").style.display = "block";

    gameLocked = false;
  }, 1500);
}

function determineWinner(user, computer) {
  if (user === computer) return "It's a tie!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "You win!";
  }
  return "You lose!";
}

function updateScore(result) {
  if (result === "You win!") {
    userScore++;
  } else if (result === "You lose!") {
    computerScore++;
  }
  document.getElementById("userScore").innerText = userScore;
  document.getElementById("computerScore").innerText = computerScore;
}

function playAgain(play) {
  if (!play) {
    alert("Thanks for playing!");
    userScore = 0;
    computerScore = 0;
    document.getElementById("userScore").innerText = "0";
    document.getElementById("computerScore").innerText = "0";
    document.getElementById("countdown").innerText = "";
    document.getElementById("result").innerText = "";
  } else {
    document.getElementById("countdown").innerText = "";
    document.getElementById("result").innerText = "";
  }
  document.getElementById("replay").style.display = "none";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

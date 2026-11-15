
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const restartButton = document.getElementById("restart");

checkButton.addEventListener("click", function () {
    const guess = Number(guessInput.value);

    if (guessInput.value === "" || guess < 1 || guess > 10) {
        message.textContent = "Enter a number between 1 and 10!";
        return;
    }

    attempts++;

    if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
    } else if (guess > secretNumber) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = "Congratulations! You won!";
    }

    attemptsText.textContent = "Attempts: " + attempts;
});

restartButton.addEventListener("click", function () {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    guessInput.value = "";
    message.textContent = "";
    attemptsText.textContent = "Attempts: 0";
});

let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Number Is Too High! Try Again.";
        gameResult.style.backgroundColor = "#1b4f72";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Number Is Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1b4f72";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#02eb05";
    } else {
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#f1c40f";
    }
}
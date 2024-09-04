const userGuess = document.querySelector("input");
const history = document.getElementById("guesses");
const attempts = document.getElementById("attempts");
const form = document.querySelector("form");
const prompt = document.querySelector("h4");
const submit = document.querySelector("button");
const startNew = document.getElementById("startNew")

let randomNumber = Math.floor(Math.random()*100 +1);

let prevGuess = [];
let remainingAttemps = 8;

let playGame = true;

if(playGame){
    submit.addEventListener("click", e => {
        e.preventDefault()
        const guess = Number(userGuess.value)
        validateGuess(guess)
    })
}

function validateGuess (guess) {
    if (isNaN(guess) || guess <= 0 || guess > 100){
        prompt.innerText = "Please enter a valid guess in the given range"
    } else {

        if (remainingAttemps === 0) {
            displayMessage(`Game over! The number was ${randomNumber}`);
            endGame();
        } else {
            remainingAttemps--;
            checkGuess(guess);
            displayGuess(guess);
            prevGuess.push(guess);
        }
    }
}
function checkGuess (guess) {
    if (guess === randomNumber){
        displayMessage(`WOW! You guessed the number! It was ${randomNumber}`)
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Too low! Try a higher number`);
    } else if (guess > randomNumber){
        displayMessage(`Too high! Try a lower number`)
    }
}

function displayGuess (guess) {
    userGuess.value = '';
    history.innerHTML += `${guess}, `
    attempts.innerHTML = `${remainingAttemps}`;
}

function displayMessage(message) {
    prompt.innerHTML = `${message}`
}

function endGame () {
    userGuess.value = '';
    userGuess.setAttribute("disabled", "");
    playGame = false;
    startNew.style.display = "block"
    submit.style.display = "none"
    startNewGame();
}

function startNewGame () {
    startNew.addEventListener("click", e => {
        e.preventDefault();
        randomNumber = Math.floor(Math.random()*100 +1);
        prevGuess = [];
        remainingAttemps = 8;
        history.innerHTML = `8`;
        userGuess.removeAttribute("disabled");
        startNew.style.display = "none"
        submit.style.display = "block"
        displayMessage("")

        playGame = true;
    }
    )

}

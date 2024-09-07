const comment = document.getElementById("comment");
const resetBtn = document.querySelector("button");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const commentDiv = document.querySelector(".comment")

const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

let computerScore = 0;
let playerScore = 0;


//To generate a random choice by the computer:
const computerChoice = () => {
    const shuffle = Array("rock", "paper", "scissors");
    const randomShuffle = Math.floor(Math.random() *3);
    const computerShuffle = shuffle[randomShuffle];
    return computerShuffle;
}


const win = (userChoice, randomChoice) => {
    playerScore++;

    playerScoreSpan.innerText = playerScore;

    //random word:
    const wordArray = Array("beats" , "destroys", "annihilates", "smashses", "obliterates");
    const randomiseNumber = Math.floor(Math.random() * 5);
    const randomWord = wordArray[randomiseNumber];
    

    //random emoji:
    const emojiArray = Array("😁", "💃🏽", "👏🏽", "😅", "😎", "🙌🏽");
    const randomiseEmoji = Math.floor(Math.random() * 6);
    const randomEmoji = emojiArray[randomiseEmoji];

    //win comment:
    comment.innerText = `${userChoice.toUpperCase()} ${randomWord} ${randomChoice.toUpperCase()}! You win ${randomEmoji}` 

    //div style:
    commentDiv.style.display = "block";
    
}


const lose = (userChoice, randomChoice) => {
    computerScore++;

    computerScoreSpan.innerText = computerScore;

    //random word:
    const wordArray = Array("beats" , "destroys", "annihilates", "smashses", "obliterates");
    const randomiseNumber = Math.floor(Math.random() * 5);
    const randomWord = wordArray[randomiseNumber];

    //random emoji:
    const emojiArray = Array("😩", "😾", "💩", "😭", "😡", "🤨", "🤦🏽");
    const randomiseEmoji = Math.floor(Math.random() * 7);
    const randomEmoji = emojiArray[randomiseEmoji];

    //win comment:
    comment.innerText = `${randomChoice.toUpperCase()} ${randomWord} ${userChoice.toUpperCase()}! You lose ${randomEmoji}` 

    commentDiv.style.display = "block";

}

const tie = (userChoice, randomChoice) => {
    const tieArray = ["🤯", "😱", "🙈", "🧐", "🙀", "🙃"];
    const randomiseEmoji = Math.floor(Math.random() * 6);
    const randomEmoji = tieArray[randomiseEmoji];
    comment.innerText = `${userChoice.toUpperCase()} matches ${randomChoice.toUpperCase()}! It's a tie ${randomEmoji}`

    commentDiv.style.display = "block"
}

const resetGame = () => {
    computerScore = 0;
    computerScoreSpan.innerText = computerScore;
    playerScore = 0;
    playerScoreSpan.innerText = playerScore;
    comment.innerText = ""

    commentDiv.style.display = "none"
}



//How the game plays (also initiates all other functions when needed):
const playGame = (userChoice) => {
    const randomChoice = computerChoice();
    console.log(randomChoice);
    console.log(userChoice);

    // if(userChoice + randomChoice === "paperrock" || "rockscissors" || "scissorspaper" ) {
    //     win(userChoice, randomChoice);
    // } else if (userChoice + randomChoice === "paperscissors" || "rockpaper" || "scissorsrock") {
    //     lose(userChoice, randomChoice)
    // } else {
    //     tie(userChoice, randomChoice)
    // }
    
    switch (userChoice + randomChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, randomChoice);
            break;
    
        case "paperscissors":
        case "rockpaper":
        case "scissorsrock":
            lose(userChoice, randomChoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(userChoice, randomChoice);
            break; 
    }
}


//Main function which will run the game:
const main = () => {
    rockDiv.addEventListener("click", function(){
        playGame("rock");
    })
    paperDiv.addEventListener("click", function(){
        playGame("paper");
    });
    scissorsDiv.addEventListener("click", function(){
        playGame("scissors");
    });
    resetBtn.addEventListener("click", function(){
        resetGame()
    });
}

//initialize main function so eventlisteners are always active
main();
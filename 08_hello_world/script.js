const button = document.querySelector("button");
const span = document.querySelector("span")

// button.addEventListener("click", () => {
//     const name = prompt("Hi, What's your name?");
//     span.innerText = name
// })

button.addEventListener("click", promptForName)
let user;
function promptForName(){
    user = prompt("Hi! What's your name?")
    changeSpanText()
}

function changeSpanText(){
    span.innerText = user;
}
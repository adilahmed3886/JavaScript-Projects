const button = document.querySelector("button");
const divElement = document.querySelector("div");

// button.addEventListener("click", function(){
//     divElement.style.display = "block";
// })

// divElement.addEventListener("click", function(){
//     divElement.style.display = "none";
// })



// button.addEventListener("click", function(){
//     divElement.classList.add("see")
// })

// divElement.addEventListener("click", function(){
//     divElement.classList.remove("see")
// })

button.onclick = seeModal
divElement.onclick = hideModal

function seeModal (){
    divElement.classList.add("see")
}

function hideModal (){
    divElement.classList.remove("see")
}
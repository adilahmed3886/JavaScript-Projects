const body = document.querySelector("body");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const div = document.querySelector("div");
const h1 = document.querySelector("h1");

let intervalId;

function changeColor(){

// ANOTHER METHOD, WILL WORK ON THIS AGAIN
//     let color = "#";
//   let hex = "0123456789ABCDEF";
//   for (let index = 0; index < 6; index++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   body.style.backgroundColor = color
//   div.style.backgroundColor = `#${Math.floor(Math.random() * 999999) + 100000}`;
//   h1.style.color = `#${Math.floor(Math.random() * 999999) + 100000}`;


    body.style.backgroundColor = `#${Math.floor(Math.random() * 999999) + 100000}`;
    div.style.backgroundColor = `#${Math.floor(Math.random() * 999999) + 100000}`;
    h1.style.color = `#${Math.floor(Math.random() * 999999) + 100000}`;
}

start.addEventListener("click", function(){
    if(!intervalId){
        changeColor();
        intervalId = setInterval(changeColor, 1000);
    }
})

stop.addEventListener("click", function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    }
})


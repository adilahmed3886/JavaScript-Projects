const text = document.querySelector("h2");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

let intervalId;

function updateTime () {
    let date = new Date();
    text.innerText = date.toLocaleTimeString()
}

start.addEventListener("click", function(){
    if(!intervalId){
        updateTime();
        intervalId = setInterval(updateTime, 1000);
    }
})

stop.addEventListener("click", function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    }
})
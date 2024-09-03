const time = document.querySelector("h1");
// const pm = document.querySelector("h2");

setInterval(() => {
  let date = new Date();
  time.innerText = date.toLocaleTimeString("it-IT");
}, 1000);

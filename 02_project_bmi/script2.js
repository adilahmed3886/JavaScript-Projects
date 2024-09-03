//FOR DOM MANIPULATION

const form = document.querySelector("form");
const body = document.querySelector("body");
const result = document.getElementById("result");
const comment = document.getElementById("comment");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);

    if (isNaN(height) || height === "" || height < 0) {
        result.style.display = "block";
        result.style.borderRadius = "0 0 0 0";
        result.innerHTML = `Please enter a valid height!`;
    } else if (isNaN(weight) || weight === "" || weight < 0) {
        result.style.display = "block";
        result.style.borderRadius = "0 0 0 0";
        result.innerHTML = `Please enter a valid weight`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.style.display = "block";
        result.style.backgroundColor = "green";
        result.innerHTML = `Your BMI is ${BMI}`;
        if (BMI < 18.6) {
        comment.style.display = "block";
        comment.innerText = "WOW YOU'RE THIN AF!";
        } else if (BMI > 24.9) {
        comment.style.display = "block";
        comment.innerText = "Hit the gym!";
        } else {
        comment.style.display = "block";
        comment.innerText = "Healthy boi Mashallah!";
        }
    }
});

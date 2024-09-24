// fields:
const input = document.getElementById("input-field");
const output = document.getElementById("output-field");

// buttons: 
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const capitalize = document.querySelector(".capitalize");
const bold = document.querySelector(".bold");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");

// logic:
let inputText = '';

input.addEventListener("input", (e) => {
    inputText = e.target.value;
    output.innerText = inputText;
});

// Text Transformations:
uppercase.addEventListener("click", () => {
    output.innerText = inputText.toUpperCase();
});

lowercase.addEventListener("click", () => {
    output.innerText = inputText.toLowerCase();
});

capitalize.addEventListener("click", () => {
    output.innerText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
});

// Styling Transformations:
bold.addEventListener("click", () => {
    output.style.fontWeight = output.style.fontWeight === "bold" ? "normal" : "bold";
});

italic.addEventListener("click", () => {
    output.style.fontStyle = output.style.fontStyle === "italic" ? "normal" : "italic";
});

underline.addEventListener("click", () => {
    output.style.textDecoration = output.style.textDecoration === "underline" ? "none" : "underline";
});

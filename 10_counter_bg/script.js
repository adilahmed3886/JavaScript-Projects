const text = document.querySelector("h1");
const body = document.querySelector("body");
const buttonAdd = document.getElementById("add");
const buttonSubstract = document.getElementById("substract");

let number = text.textContent
const countLimit = 40

function countAdd (){ 
    if(number >= 0 && number < countLimit){
        number++;
        text.innerText = number
        body.style.backgroundColor = `rgb(${(number / countLimit *255)}, 90, 50)`
    }
}

function countSubstract(){
    if(number > 0){
        number--;
        text.innerText = number;
        body.style.backgroundColor = `rgb(${(number / countLimit *255)}, 90, 50)`
    }

}

countAdd()

buttonAdd.onclick = countAdd
buttonSubstract.onclick = countSubstract
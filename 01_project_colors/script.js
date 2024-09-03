const colorDivs = document.querySelectorAll(".colorDivs");
const body = document.querySelector("body");
console.log(colorDivs);


colorDivs.forEach(function (colorDiv){
    colorDiv.addEventListener("mouseenter", function(e){
        if(e.target.id === "div-1"){
            body.style.backgroundColor = "grey";
        }
        else if(e.target.id === "div-2"){
            body.style.backgroundColor = "white";
        }
        else if(e.target.id === "div-3"){
            body.style.backgroundColor = "blue";
        }
        else if(e.target.id === "div-4"){
            body.style.backgroundColor = "yellow";
        }
    })
})
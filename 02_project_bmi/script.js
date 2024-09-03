//FOR WINDOW ALERT


const form = document.querySelector("form");


form.addEventListener("submit" , function(e){
    e.preventDefault();
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    
    if(isNaN(height) || height === "" || height < 0){
        window.alert("Please give the right information!")
    }else if(isNaN(weight) || weight === "" || weight < 0){
        window.alert("Please give the right information!")
    }else {
        const BMI = (weight / ( (height*height) /10000)).toFixed(2);
        window.alert(`Your BMI is ${BMI}`);
    }
})

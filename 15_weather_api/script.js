const userInput = document.querySelector("input");
const btn = document.querySelector("button");
const city = document.querySelector("h2");
const temp = document.querySelector("h3");
const weather = document.querySelector("p");

let userLocation = "";

btn.addEventListener("click", () => {
  userLocation = userInput.value;
  response();
});

const response = async function () {
  try {

    const data = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=7780255f394d41c2bb883308243009&q=${userLocation}`
    );
    

    const res = await data.json();


    city.innerText = `City: ${res.location.name}`;
    temp.innerText = `Temperature: ${res.current.temp_c}°C`;
    weather.innerText = `Weather: ${res.current.condition.text}`;

  } catch (error) {

    city.innerText = "Could not fetch data";
    console.log("Error:", error);
  }
};


const apiLink =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const select = document.querySelectorAll("select");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const button = document.querySelector("button");
const userInput = document.querySelector("input");
const result = document.querySelector("h2");

// for (let oneSelect of select) {
//   for (let currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;

//     if (oneSelect.id === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (oneSelect.id === "to" && currCode === "GBP") {
//       newOption.selected = "selected";
//     }

//     oneSelect.append(newOption);
//   }
//   oneSelect.addEventListener("change", (e) => {
//     updateFlag(e.target);
//   });
// }

select.forEach((oneSelect) => {
  Object.keys(countryList).forEach((currCode) => {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (oneSelect.id === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (oneSelect.id === "to" && currCode === "GBP") {
      newOption.selected = "selected";
    }

    oneSelect.append(newOption);
  });

  oneSelect.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
});

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

button.addEventListener("click", async (e) => {
    e.preventDefault();
    let amount = document.querySelector("input");
    let amountValue = amount.value;
    if (amountValue === "" || amountValue < 1) {
        amountValue = 1;
        amount.value = "1"
    }
    
    const URL = `${apiLink}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json;
    console.log(data);
    
})
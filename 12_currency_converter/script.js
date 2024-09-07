const select = document.querySelectorAll("select");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const button = document.querySelector("button");
const userInput = document.querySelector("input");
const resultText = document.querySelector("h2");
const reverse = document.querySelector(".icon")

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

// button.addEventListener("click", async (e) => {
//     e.preventDefault();
//     let amount = document.querySelector("input");
//     let amountValue = amount.value;
//     if (amountValue === "" || amountValue < 1) {
//         amountValue = 1;
//         amount.value = "1"
//     }
    
//     const URL = `${apiLink}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
//     let response = await fetch(URL);
//     let data = await response.json;
//     console.log(data);
    
// })

async function getExchangeRate() {
    const amountVal = userInput.value || 1;
    resultText.innerText = "Getting exchange rate...";
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/4f3f5b285dfd02ece029355e/latest/${fromCurrency.value}`);
        const result = await response.json();
        const exchangeRate = result.conversion_rates[toCurrency.value];
        const totalExRate = (userInput.value * exchangeRate).toFixed(2);
        resultText.innerText = `${userInput.value} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`

        
    } catch (error) {
        resultText.innerText= "Something went wrong..."
    }
}

window.addEventListener("load", getExchangeRate);
button.addEventListener("click", (e) => {
    e.preventDefault();
    getExchangeRate();
})

reverse.addEventListener("click", () => {
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
    [fromCurrency, toCurrency].forEach((element) => {
        let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
    })
    getExchangeRate();
})
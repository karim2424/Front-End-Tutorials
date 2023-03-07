var myHeaders = new Headers();
myHeaders.append("apikey", "esBWU2sZoOg02r30Cbdk6MpjQqrvi5LA");
var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

let currency = document.querySelectorAll(".currency");
let conv = document.querySelector("#button");
let resultSpan = document.querySelector("form span");
// async function symbols() {
//   try {
//     const myRequest = await fetch(
//       "https://api.apilayer.com/exchangerates_data/symbols",
//       requestOptions
//     );
//     const jsonRequest = await myRequest.json();
//     const jsonFile = require(
//     return await jsonRequest;
//   } catch {
//     console.log("error", error);
//   }
// }

addEventListener("load", function symbols() {
  fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      let symbolsArray = Object.keys(result["symbols"]);
      for (let i = 0; i < 2; i++) {
        symbolsArray.forEach((element) => {
          let option = document.createElement("option");
          let tagName = document.createAttribute("value");
          tagName.value = `${element}`;
          option.setAttributeNode(tagName);
          currency[i].appendChild(option);
        });
      }
    })
    .catch((error) => console.log("error", error));
});

// symbols()
//   .then((res) => (mySymbols = res["symbols"]))
//   .then((ress) => (symbolsArray = Object.keys(ress)));

conv.addEventListener("click", function conv() {
  let from = document.querySelector(".from").value;
  let to = document.querySelector(".to").value;
  let amount = document.querySelector("#amount").value;
  convert(from, to, amount);
});
async function convert(from, to, amount) {
  try {
    const myRequest = await fetch(
      "https://api.apilayer.com/exchangerates_data/convert?to=" +
        to +
        "&from=" +
        from +
        "&amount=" +
        amount,
      requestOptions
    );
    const jsonRequest = await myRequest.json();
    let result = await jsonRequest["result"];
    let text = document.createTextNode(result.toFixed(2));
    resultSpan.appendChild(text);
  } catch {
    console.log("error", error);
  }
}

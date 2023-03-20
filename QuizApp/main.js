function getData() {
  fetch("QandA.json")
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .then((jsonResult) => {
      // let myCategory = Object.keys(jsonResult)
      let randomQuetsion = Math.floor(
        Math.random() * jsonResult["questions"].length
      );
      let randomAnswer = Math.floor(
        Math.random() * jsonResult["answers"].length
      );
      for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(
          Math.random() * jsonResult["answers"].length
        );
        if (randomAnswer === randomNumber) {
          continue;
        } else {
          let select = document.createElement("select");
          let option = document.createElement("option");
          let optionValue = document.createAttribute("value");
          let optionText = document.createTextNode(
            jsonResult["answers"][randomNumber]
          );
          optionValue.value = jsonResult["answers"][randomNumber];
          option.setAttributeNode(optionValue);
          option.appendChild(optionText);
          select.appendChild(option);
          document.querySelector("body").appendChild(select);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
getData();
// async function getData() {
//   try {
//     let result = await fetch("QandA.json");
//     let resultJson = await result.json();
//     console.log(resultJson);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();

// some changes

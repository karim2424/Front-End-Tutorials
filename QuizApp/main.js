let myQuestion = document.querySelector(".quiz-one .question");
let myAnswers = document.querySelectorAll(".quiz-one input");
function getData() {
  fetch("QandA.json")
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .then((jsonResult) => {
      let randomQuetsion = Math.floor(
        Math.random() * jsonResult["questions"].length
      );
      myQuestion.innerHTML = jsonResult["questions"][randomQuetsion];
      let randomAnswer = Math.floor(
        Math.random() * jsonResult["answers"].length
      );
      myAnswers[randomAnswer].innerHTML = jsonResult["answers"][randomQuetsion];
      for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(
          Math.random() * jsonResult["answers"].length
        );
        if (randomQuetsion === randomNumber) {
          continue;
        } else {
          if ((myAnswers[randomNumber].innerHTML = "")) {
          }
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

// let input = document.createElement("input");
// let lable = document.createElement("lable");
// let inputValue = document.createAttribute("value");
// inputValue.value = jsonResult["answers"][randomNumber];
// input.setAttributeNode(inputValue);
// let inputType = document.createAttribute("type");
// inputType.value = "checkbox";
// input.setAttributeNode(inputType);
// let inputName = document.createAttribute("name");
// inputName.value = "answers";
// input.setAttributeNode(inputName);
// let lableFor = document.createAttribute("for");
// lableFor.value = jsonResult["answers"][randomNumber];
// lable.setAttributeNode(lableFor);
// let lableText = document.createTextNode(
//   jsonResult["answers"][randomNumber]
// );
// lable.appendChild(lableText);
// document.body.appendChild(input);
// document.body.appendChild(lable);

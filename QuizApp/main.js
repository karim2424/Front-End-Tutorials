let myQuestion = document.querySelector(".quiz-one .question");
let myAnswers = document.querySelectorAll(".quiz-one input");
let myAnswersLabel = document.querySelectorAll(".quiz-one label");
let mySet = new Set();
function getData() {
  fetch("QandA.json")
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .then((jsonResult) => {
      let myQuestionArr = jsonResult["questions"];
      console.log(myQuestionArr);
      let randomQuestion = Math.floor(Math.random() * myQuestionArr.length);
      myQuestion.innerHTML = myQuestionArr[randomQuestion];
      myQuestionArr.splice(randomQuestion, 1);
      console.log(myQuestionArr);
      let gen = Math.floor(Math.random() * 4);
      myAnswers[gen].setAttribute(
        "value",
        jsonResult["answers"][randomQuestion]
      );
      myAnswersLabel[gen].innerHTML = jsonResult["answers"][randomQuestion];
      while (mySet.size < 4) {
        let randomNumber = Math.floor(
          Math.random() * jsonResult["answers"].length
        );
        if (randomNumber !== randomQuestion) {
          mySet.add(randomNumber);
        } else {
          continue;
        }
      }
      let myArr = Array.from(mySet);
      let i = 0;
      myAnswersLabel.forEach((asw) => {
        if (asw.innerHTML === "" && myAnswers[i].value === "") {
          asw.innerHTML = jsonResult["answers"][myArr[i]];
          myAnswers[i].setAttribute("value", jsonResult["answers"][myArr[i]]);
        }
        ++i;
      });
      myAnswers.forEach((inp) => {
        inp.addEventListener("click", () => {
          let chosenAnswer = inp.value;
          myAnswers.forEach((inpp) => {
            inpp.checked = false;
          });
          inp.checked = true;
          checkAnswer(chosenAnswer);
        });
      });
      function checkAnswer(answer) {
        if (answer === jsonResult["answers"][randomQuestion]) {
          console.log("correct");
        } else {
          console.log("wrong try again");
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

// for (let i = 0; i < 3; i++) {
//         let randomNumber = Math.floor(
//           Math.random() * jsonResult["answers"].length
//         );
//         if (randomQuetsion === randomNumber) {
//           continue;
//         } else {
//           if ((myAnswers[randomNumber].innerHTML = "")) {
//           }
//         }
//       }

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
      let myQuestionArr = jsonResult;
      let randomQuestion = Math.floor(Math.random() * jsonResult.length);
      myQuestion.innerHTML = myQuestionArr[randomQuestion]["title"];

      while (mySet.size < 4) {
        let randomNumber = Math.floor(Math.random() * 4);
        mySet.add(randomNumber);
      }
      let myArr = Array.from(mySet);
      for (let i = 0; i < myAnswersLabel.length; i++) {
        myAnswersLabel[myArr[i]].innerHTML =
          jsonResult[randomQuestion][`asw${i + 1}`];
        myAnswers[myArr[i]].setAttribute(
          "value",
          jsonResult[randomQuestion][`asw${i + 1}`]
        );
      }

      function createButton() {
        let button = document.querySelector("button");
        let buttonResult = document.querySelector(".my-button2");
        button.style.display = "block";
        button.addEventListener("click", () => {
          if (myQuestionArr.length !== 0) {
            myQuestionArr.splice(randomQuestion, 1);
            myAnswers.forEach((inp) => {
              inp.checked = false;
            });
            let randomQuestions = Math.floor(
              Math.random() * myQuestionArr.length
            );
            myQuestion.innerHTML = myQuestionArr[randomQuestions]["title"];
            while (mySet.size < 4) {
              let randomNumber = Math.floor(Math.random() * 4);
              mySet.add(randomNumber);
            }
            let myArr = Array.from(mySet);
            for (let i = 0; i < myAnswersLabel.length; i++) {
              myAnswersLabel[myArr[i]].innerHTML =
                jsonResult[randomQuestions][`asw${i + 1}`];
              myAnswers[myArr[i]].setAttribute(
                "value",
                jsonResult[randomQuestions][`asw${i + 1}`]
              );
            }
          } else {
            button.style.display = "none";
            buttonResult.style.display = "block";
            buttonResult.addEventListener("click", () => {});
          }
        });
      }
      myAnswers.forEach((inp) => {
        inp.addEventListener("click", () => {
          let chosenAnswer = inp.value;
          myAnswers.forEach((inpp) => {
            inpp.checked = false;
          });
          inp.checked = true;
          checkAnswer(chosenAnswer);
          createButton();
        });
      });
      function checkAnswer(answer) {
        if (answer === jsonResult[randomQuestion]["rAsw"]) {
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

// let i = 0;
// myAnswersLabel.forEach((asw) => {
//   asw.innerHTML = jsonResult[randomQuestion][`asw${myArr[i]}`];
//   myAnswers[i].setAttribute(
//     "value",
//     jsonResult[randomQuestion][`asw${myArr[i]}`]
//   );
//   ++i;
// });

// let gen = Math.floor(Math.random() * 4);
// myAnswers[gen].setAttribute("value", jsonResult[randomQuestion]["rAsw"]);
// myAnswersLabel[gen].innerHTML = jsonResult[randomQuestion]["rAsw"];

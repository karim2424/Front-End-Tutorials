let myQuestion = document.querySelector(".quiz-one .question");
let myAnswers = document.querySelectorAll(".quiz-one input");
let myAnswersLabel = document.querySelectorAll(".quiz-one label");
let button = document.querySelector(".my-button");
let buttonResult = document.querySelector(".my-button2");
let mySet = new Set();
let myPickedAnswer;
let theRightAnswer;
let count = 0;
function getData() {
  fetch("QandA.json")
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .then((jsonResult) => {
      let myQuestionArr = jsonResult;
      test = jsonResult;
      let randomQuestion = Math.floor(Math.random() * myQuestionArr.length);
      myQuestion.innerHTML = myQuestionArr[randomQuestion]["title"];
      while (mySet.size < 4) {
        let randomNumber = Math.floor(Math.random() * 4);
        mySet.add(randomNumber);
      }
      let myArr = Array.from(mySet);
      for (let i = 0; i < myAnswersLabel.length; i++) {
        myAnswersLabel[myArr[i]].innerHTML =
          myQuestionArr[randomQuestion][`asw${i + 1}`];
        myAnswers[myArr[i]].setAttribute(
          "value",
          myQuestionArr[randomQuestion][`asw${i + 1}`]
        );
      }
      theRightAnswer = myQuestionArr[randomQuestion]["rAsw"];
      console.log(myQuestionArr);

      button.addEventListener("click", () => {
        button.classList.toggle("hide-button");
        myAnswers.forEach((inp) => {
          inp.checked = false;
        });
        checkAnswer(myPickedAnswer, theRightAnswer);
        myQuestionArr.splice(randomQuestion, 1);
        if ((myQuestionArr.length = 0)) {
          button.classList.add = "hide-button";
          buttonResult.classList.remove = "hide-button";
          buttonResult.addEventListener("click", () => {});
        } else {
          let randomQuestions = Math.floor(
            Math.random() * myQuestionArr.length
          );
          randomQuestion = randomQuestions;
          myQuestion.innerHTML = myQuestionArr[randomQuestions]["title"];
          for (let i = 0; i < myAnswersLabel.length; i++) {
            myAnswersLabel[myArr[i]].innerHTML =
              myQuestionArr[randomQuestions][`asw${i + 1}`];
            myAnswers[myArr[i]].setAttribute(
              "value",
              myQuestionArr[randomQuestions][`asw${i + 1}`]
            );
          }
          theRightAnswer = myQuestionArr[randomQuestion]["rAsw"];
          console.log(myQuestionArr.length);
        }
      });

      myAnswers.forEach((inp) => {
        inp.addEventListener("change", () => {
          myPickedAnswer = inp.value;
          myAnswers.forEach((inpp) => {
            inpp.checked = false;
          });
          inp.checked = true;
          button.classList.toggle("hide-button");
        });
      });
      function checkAnswer(answer, rightAnswer) {
        if (answer === rightAnswer) {
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

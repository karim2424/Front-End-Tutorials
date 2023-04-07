let myQuestion = document.querySelector(".quiz-one .question");
let myAnswers = document.querySelectorAll(".quiz-one input");
let myAnswersLabel = document.querySelectorAll(".quiz-one label");
let button = document.querySelector(".my-button");
let buttonResult = document.querySelector(".my-button2");
let mySet = new Set();
let myPickedAnswer;
let theRightAnswer;
let rightCount = 0;
let wrongCount = 0;
function getData() {
  fetch("QandA.json")
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .then(
      (jsonResult) => {
        // ********************************************* Create first question *********************************************
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
        // ********************************************* End Create first question *********************************************

        // ********************************************* fetch the right answer *********************************************

        theRightAnswer = myQuestionArr[randomQuestion]["rAsw"];

        // ********************************************* End fetch the right answer *********************************************

        // ********************************************* add event listener to result button for showing final score *********************************************

        buttonResult.addEventListener("click", () => {
          buttonResult.style.display = "none";
          myAnswers.forEach((inp) => {
            inp.disabled = true;
          });
          checkAnswer(myPickedAnswer, theRightAnswer);

          let div = document.createElement("div");
          div.classList = "result";
          let h3 = document.createElement("h3");
          let h3Text = document.createTextNode(
            `Your Scour Is : ${((rightCount / 5) * 100).toFixed(2)}%`
          );
          let p = document.createElement("p");
          let pText = document.createTextNode(
            `You Have ${wrongCount} Wrong Answers`
          );
          h3.appendChild(h3Text);
          p.appendChild(pText);
          div.appendChild(h3);
          div.appendChild(p);
          document.querySelector(".container").appendChild(div);
        });
        // ********************************************* End off add event listener to result button for showing final score *********************************************

        // ********************************************* add event listener to next button for loading all the questions *********************************************

        button.addEventListener("click", () => {
          button.style.display = "none";
          myAnswers.forEach((inp) => {
            inp.checked = false;
          });
          checkAnswer(myPickedAnswer, theRightAnswer);
          myQuestionArr.splice(randomQuestion, 1);
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
        });

        // ********************************************* End of add event listener to result button for showing final score *********************************************

        // ********************************************* add event listener to check box for choosing right answer *********************************************

        myAnswers.forEach((inp) => {
          inp.addEventListener("change", () => {
            myPickedAnswer = inp.value;
            myAnswers.forEach((inpp) => {
              inpp.checked = false;
            });
            inp.checked = true;
            if (myQuestionArr.length === 1) {
              buttonResult.style.display = "block";
            } else {
              button.style.display = "block";
            }
          });
        });

        // ********************************************* End of add event listener to check box for choosing right answer *********************************************

        // ********************************************* Create function for checking answer and calculate final score  *********************************************

        function checkAnswer(answer, rightAnswer) {
          if (answer === rightAnswer) {
            ++rightCount;
          } else {
            ++wrongCount;
          }
        }
      }
      // ********************************************* End of Create function for checking answer and calculate final score *********************************************
    )
    .catch((error) => {
      console.log(error);
    });
}

getData();

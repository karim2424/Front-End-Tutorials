let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = [...letters];
let lettersContainer = document.querySelector(".letters");
let selectedWord = [];
let theDraw = Array.from(document.querySelectorAll(".the-draw div"));
theDraw.splice(3, 1);
let clickCount = 0;
function selectedLetter(e) {
  let letterPressed = e.target.innerHTML;
  e.target.classList.add("clicked", "disable");
  if (randomValueName.toLowerCase().includes(letterPressed)) {
    myChosenWord.forEach((l, i) => {
      if (l.toLowerCase() === letterPressed) {
        span[i].innerHTML = letterPressed;
        selectedWord[i] = span[i].innerHTML;
      }
    });
  } else {
    theDraw[clickCount].style.display = "block";
    clickCount += 1;
  }
}
function scoreCheck() {
  if (
    clickCount === 7 &&
    randomValueName.toLowerCase() !== selectedWord.join("")
  ) {
    document.querySelector(".popup-lose span").innerHTML = randomValueName;
    lettersBox.forEach((l) => {
      l.classList.add("clicked", "disable");
    });
    document.querySelector(".popup-lose").style.display = "flex";
  } else if (
    clickCount < 7 &&
    randomValueName.toLowerCase() === selectedWord.join("")
  ) {
    lettersBox.forEach((l) => {
      l.classList.add("clicked", "disable");
    });
    document.querySelector(".popup-win").style.display = "flex";
  }
}

document.addEventListener("click", scoreCheck);

//Creat Alphabet input
lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let letterNode = document.createTextNode(letter);

  span.appendChild(letterNode);
  span.addEventListener("click", selectedLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: [
    "Syria",
    "Palestine",
    "Yemen",
    "Egypt",
    "Bahrain",
    "Qatar",
    "Algeria",
  ],
};

let allKeys = Object.keys(words);

let randomNumber = Math.floor(Math.random() * allKeys.length);
let randomProp = allKeys[randomNumber];

let randomValueNumber = Math.floor(Math.random() * words[randomProp].length);
let randomValueName = words[randomProp][randomValueNumber];

document.querySelector(".game-info span").innerHTML = randomProp;

let letterGuess = document.querySelector(".letters-guess");

let myChosenWord = [...randomValueName];

myChosenWord.forEach((letter) => {
  let span = document.createElement("span");
  if (letter === " ") {
    span.classList = "has-space";
  }
  letterGuess.appendChild(span);
});

//adding space to my reference value
if (randomValueName.includes(" ")) {
  selectedWord[randomValueName.indexOf(" ")] = " ";
}

let span = document.querySelectorAll(".letters-guess span");
let randomLetter = Math.floor(Math.random() * myChosenWord.length);
let lettersBox = document.querySelectorAll(".letter-box");
if (myChosenWord.length > 2) {
  //generate random letter from chosen word and putting it in output
  myChosenWord.forEach((e, i) => {
    if (myChosenWord[randomLetter].toLowerCase() === e.toLowerCase()) {
      span[i].innerHTML = myChosenWord[randomLetter].toLowerCase();
      selectedWord[i] = myChosenWord[randomLetter].toLowerCase();
    }
  });
  //disable given letter
  lettersBox.forEach((e, i) => {
    if (e.innerHTML === myChosenWord[randomLetter].toLowerCase()) {
      lettersBox[i].classList.add("clicked", "disable");
    }
  });
}

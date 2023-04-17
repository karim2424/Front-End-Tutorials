// selecting elements
let gitButton = document.querySelector(".git-button");
let reposSection = document.querySelector(".all-repos");
let url = [];
// global variables

// add event to button for starting fetch data
gitButton.addEventListener("click", () => {
  let userName = document.querySelector(".search-repos input").value;

  // fetch github api repos
  let url = "https://api.github.com/users/" + userName + "/repos";

  fetch(url)
    .then((Response) => Response.json())
    .then((result) => {
      return result;
    })
    .then((myReposArray) => {
      //get length of array for numbers of repos
      let reposNumber = myReposArray.length;
      createRepos(reposNumber, myReposArray);
    })
    .catch((error) => {
      console.log(error);
    });
});

// function that create all structure for displaying fetched data
function createRepos(arrayLength, array) {
  if (reposSection.hasChildNodes()) {
    let div = document.querySelectorAll(".repo-container");
    div.forEach((repo) => {
      repo.remove();
    });
  }
  for (let i = 0; i < arrayLength; i++) {
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let h1 = document.createElement("h1");
    let span = document.createElement("span");
    let span2 = document.createElement("span");
    let h1Text = document.createTextNode(array[i]["name"]);
    url.push(array[i]["html_url"]);
    let spanText = document.createTextNode("View");
    let span2Text = document.createTextNode("Delete");
    div.className = "repo-container";
    div2.className = "button-container";
    span.className = "view-button";
    span2.className = "delete-button";
    span.appendChild(spanText);
    span2.appendChild(span2Text);
    h1.appendChild(h1Text);

    div2.appendChild(span);
    div2.appendChild(span2);
    div.appendChild(h1);
    div.appendChild(div2);
    reposSection.appendChild(div);
  }
  eventToButtons();
}

//function that add event to view and delete buttons
function eventToButtons() {
  let span = document.querySelectorAll(".view-button");
  let span2 = document.querySelectorAll(".delete-button");
  span.forEach((sp, i) => {
    sp.addEventListener("click", () => {
      window.open(url[i], "_blank");
    });
  });
  span2.forEach((sp) => {
    sp.addEventListener("click", deleteRepo);
  });
}
//function that open repo
function openRepo(url) {
  location.href = url;
}

//function that delete a repo
function deleteRepo(evt) {
  evt.currentTarget.parentElement.parentElement.remove();
}

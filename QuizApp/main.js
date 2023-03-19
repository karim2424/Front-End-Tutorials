function getDataNonAsync() {
  fetch("QandA.json")
    .then((response) => response.json())
    .then((result) => {
      console.log(result["answers"]);
    })
    .catch((error) => {
      console.log(error);
    });
}
getDataNonAsync();
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

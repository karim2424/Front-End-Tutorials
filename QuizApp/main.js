function getDataNonAsync() {
  fetch("QandA.json")
    .then((response) => response.json())
    .then((result) => {
      return result["answers"];
    })
    .then((re) => {
      console.log(re[2]);
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

// some changes
window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApiUrl = 'https://getresumecounter03.azurewebsites.net/api/GetResumeCounter?code=wrqOLZobMNoC38sZc_czW3GstxpimMY40FeoLTgc-UQoAzFuBCe00Q=='
const localfunctionApi = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
  let count = 30;
  fetch(functionApiUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};


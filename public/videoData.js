'use strict';

sendGetRequest('/getMostRecent')
.then(function (data) {
  document.getElementById('c2').innerHTML = "\'" + data.nickname + "\'";
  console.log(data.url);
})
.catch(function (error) {
   console.error('Error:', error);
});

const continueButton = document.getElementById("continue_button");
continueButton.addEventListener("click", continueFunction);



async function sendGetRequest(url) {
  console.log("about to send GET request");
    let response = await fetch(url, {
      method: 'GET', 
      headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      throw Error(response.status);
    }
}

async function sendPostRequest(url, data) {
    console.log("about to send post request");
    let response = await fetch(url, {
      method: 'POST', 
      headers: {'Content-Type': 'text/plain'},
      body: data });
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      throw Error(response.status);
    }
  }

function continueFunction() {
  let info = "acknowledgement done!";
  
  sendPostRequest('/acknowledgement', info)
  .then(function (data) {
    console.log("got back the following string");
    console.log(data); 
    window.location = "/tiktokpets.html";
  })
  .catch(function (error) {
     console.error('Error:', error);
  });
}
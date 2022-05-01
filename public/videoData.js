'use strict';

let nickname = sessionStorage.getItem("nick");

let msg = c2.textContent;
msg = msg.replace("placeholder", nickname);
c2.textContent = msg;

const continueButton = document.getElementById("continue_button");
continueButton.addEventListener("click", continueFunction);

async function sendPostRequest(url, data) {
    console.log("about to send post request");
    let response = await fetch(url, {
      method: 'POST', 
      headers: {'Content-Type': 'text/plain'},
      body: data });
    if (response.ok) {
      let data = await response.text();
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
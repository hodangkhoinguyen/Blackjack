'use strict';

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
  const username = document.getElementsByName("username")[0].value;
  const url = document.getElementsByName("url")[0].value;
  const nickname = document.getElementsByName("nickname")[0].value;

  let info = username + " " + url + " " + nickname;

  sendPostRequest('/videoData', info)
// since this page appears at 
// https://POST-Example.profamenta.repl.co
// the POST request goes to 
// https://POST-Example.profamenta.repl.co/newlog
  .then(function (data) {
    console.log("got back the following string");
    console.log(data); 
    sessionStorage.setItem("nick",nickname);
    window.location = "/videoData.html";
  })
  .catch(function (error) {
     console.error('Error:', error);
  });
}


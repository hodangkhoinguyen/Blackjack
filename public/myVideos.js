'use strict'

const numLabels = 8;
let label = [];
let box = []
let video = [];
let deleteButton = [];
let addButton = document.getElementById("add");
addButton.addEventListener("click", addNew);

for (let i = 0; i < numLabels; i++) {
  label[i] = document.getElementsByClassName("label")[i];
  box[i] = document.getElementsByClassName("vtitle")[i];
  let button = document.getElementsByClassName("delete")[i];
  button.addEventListener("click", function() {
    deleteVideo(i);
  });
  deleteButton[i] = button;
}

reloadTheList().catch(function (error) {
  console.error('Error:', error);
});

function deleteVideo(i) {
  let content = label[i].textContent;
  if (content != "") {
    sendPostRequest("/deleteVideo", {'nickname' : content});
    reloadTheList();
  }
}

function addNew() {
  if (video.length == numLabels) {
    alert("There are enough videos");
  }
  else {
    window.location = "/tiktokpets.html";
  }
}

async function reloadTheList() {
  let list = await sendGetRequest("/getList");

  for (let i = 0; i < list.length; i++) {    
    box[i].style.borderStyle = "solid";
    label[i].textContent = list[i].nickname;
  }

  for (let i = list.length; i < numLabels; i++) {    
    box[i].style.borderStyle = "dashed";
    label[i].textContent = "";
  }
}

async function sendPostRequest(url, data) {
  console.log("about to send post request");
  let response = await fetch(url, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data) });
  console.log(typeof(response));
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    throw Error(response.status);
  }
}

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
'use strict'

for (let i=0; i<8; i++) { 
var parent = document.getElementById("video-holder");
var div = document.createElement("div"); div.classList.add("videoLine"); 
var p = document.createElement("p"); 
var x = document.createElement("button");
  p.classList.add("videoName"); 
  x.classList.add("x");
  let bt = x.textContent;
  bt = "X";
  div.appendChild(p); 
  div.appendChild(x);
  parent.appendChild(div); 
} 

let names = document.getElementsByClassname("videoName"); let buttons = document.getElementsByClassname("x");
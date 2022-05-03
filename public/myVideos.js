'use strict'

for (let i=0; i<8; i++) { 
parent = document.getElementById("video-holder");
div = document.createElement("div"); div.classList.add("videoLine"); 
p = document.createElement("p"); 
  p.classList.add("videoName"); 
  div.appendChild(p); 
  parent.appendChild(div); 
} 
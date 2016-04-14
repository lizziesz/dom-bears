// var headerArray = document.getElementsByTagName("h1");
//
// console.log(headerArray[1]);

// var bearliArray = document.getElementsByClassName("bearname");
// console.log(bearliArray[0]);

var bearImg = document.getElementById("mainpicture");
bearImg.src = "http://placekitten.com/344/543";
bearImg.className = "kittenImg";

var title = document.getElementsByTagName("h1")[0];
title.style.fontFamily = "Arial";
title.style.color = "green";

var newImg = document.createElement("img");
var newH1 = document.createElement("h1");
var newP = document.createElement("p");

newImg.src = "http://placekitten.com/444/567";
var body = document.getElementsByTagName("body")[0];
body.appendChild(newImg);
body.appendChild(newH1);
body.appendChild(newP);

newH1.innerText = "Cats have invaded!";
newP.innerText = "We're here to take over your page!";

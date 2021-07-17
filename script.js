// PASS IMAGES
var img1 =document.getElementById("i-img1");
var img2 =document.getElementById("i-img2");
var img3 =document.getElementById("i-img3");


// FACTS GENERATOR

var factList = [
  "Feels lightweight and so comfortable, you won’t believe it’s long wear. No touch ups needed.",
  "Our best foundation for long wear, Double Wear is the makeup that keeps up—no matter where your day takes you. Apply once and don’t think twice.",
  "24-hour wear. Flawless, natural, matte foundation."
];/*3*/


var fact = document.getElementById("f");
var randomIndex = Math.floor(Math.random()*factList.length);
var randomElement = factList[randomIndex];

fact.innerHTML = randomElement;

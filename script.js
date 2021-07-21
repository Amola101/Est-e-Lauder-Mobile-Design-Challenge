// PASS IMAGES
/*var img1= document.getElementById("i-img1");
var img2 =document.getElementById("i-img2");
var img3 =document.getElementById("i-img3");

var imglist= [
  img1, img2, img3
]

var back =document.getElementById("back");
var front =document.getElementById("front");

back.addEventListener('click', bAck);
front.addEventListener('click', fRont);

function bAck(){
  .style.display = "none";

} */

//Questions Appear

var count= 0;

document.getElementById("sum1").addEventListener("click", sumbtn1);
document.getElementById("sum2").addEventListener("click", sumbtn2);
document.getElementById("sum3").addEventListener("click", sumbtn3);

function sumbtn1 () {
  count++;
  if (count % 2 == 0 ){
    document.getElementById("a1").style.display = "block";
  }
  else {
    document.getElementById("a1").style.display = "none";
    }
}

function sumbtn2 () {
  count++;
  if (count % 2 == 0 ){
    document.getElementById("a2").style.display = "block";
  }
  else {
    document.getElementById("a2").style.display = "none";
    }
}

function sumbtn3 () {
  count++;
  if (count % 2 == 0 ){
    document.getElementById("a3").style.display = "block";
  }
  else {
    document.getElementById("a3").style.display = "none";
    }
}

//SHADE IMG CHANGER
document.getElementById("mimg1").onmouseover = function() { 
  document.getElementById("mimg1").style.display = "none";
  document.getElementById("mimg11").style.display = "block";
}

document.getElementById("mimg2").onmouseover = function() { 
  document.getElementById("mimg2").style.display = "none";
  document.getElementById("mimg21").style.display = "block";
}

document.getElementById("mimg3").onmouseover = function() { 
  document.getElementById("mimg3").style.display = "none";
  document.getElementById("mimg31").style.display = "block";
}

document.getElementById("mimg4").onmouseover = function() { 
  document.getElementById("mimg4").style.display = "none";
  document.getElementById("mimg41").style.display = "block";
}


document.getElementById("mimg1").onmouseout = function() { 
  document.getElementById("mimg11").style.display = "none";
  document.getElementById("mimg1").style.display = "block";
}

document.getElementById("mimg2").onmouseout = function() { 
  document.getElementById("mimg21").style.display = "none";
  document.getElementById("mimg2").style.display = "block";
}

document.getElementById("mimg3").onmouseout = function() { 
  document.getElementById("mimg31").style.display = "none";
  document.getElementById("mimg3").style.display = "block";
}

document.getElementById("mimg4").onmouseout = function() { 
  document.getElementById("mimg41").style.display = "none";
  document.getElementById("mimg4").style.display = "block";
}
// FACTS GENERATOR

var factList = [
  "Feels lightweight and so comfortable, you won’t believe it’s long wear. No touch ups needed.",
  "Our best foundation for long wear, Double Wear is the makeup that keeps up—no matter where your day takes you. Apply once and don’t think twice.",
  "24-hour wear. Flawless, natural, matte foundation."
];


var fact = document.getElementById("f");
var randomIndex = Math.floor(Math.random()*factList.length);
var randomElement = factList[randomIndex];

fact.innerHTML = randomElement;

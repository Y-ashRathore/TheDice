// METHOD 1

var random1 = Math.floor((Math.random()*6)+1);
var image1 = "dice" + random1 + ".png";
var source1 = "images/"+ image1;

document.querySelectorAll("img")[0].setAttribute("src",source1);

var random2 = Math.floor((Math.random()*6)+1);
var image2 = "dice" + random2 + ".png";
var source2 = "images/"+ image2;

document.querySelectorAll("img")[1].setAttribute("src",source2);

if(random1>random2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩  ";
}
else{
    document.querySelector("h1").innerHTML = "IS THAT A HARD NUMBER?";
    setTimeout(() => {location.replace("dicee.html");}, 2000);
       
}

function myfunction(){
    location.replace("index.html");
}

document.querySelector("button").onclick = function() {myfunction()};
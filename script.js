// alert("Welcome to the Dicee Challenge!")

var randomNumber1 = Math.random();

randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;
randomNumber2 = Math.floor(Math.random()*6)+1;

var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

// Which player is winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}

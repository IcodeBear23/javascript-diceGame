// Dice 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var randomPic = "dice" + randomNumber1 + ".png";
var sourceName = "./images/" + randomPic;
document.querySelector(".img1").setAttribute("src",sourceName);

// Dice 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomPic2 = "dice" + randomNumber2 + ".png";
var sourceName2 = "./images/" + randomPic2;
document.querySelector(".img2").setAttribute("src",sourceName2);

// Compare two dices
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw!";
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player1 Wins!🚩"; 
}

if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player2 Wins!🚩"; 
}
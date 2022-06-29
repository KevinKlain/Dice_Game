let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomNumberSource); 

let randomNumber2 = Math.floor(Math.random() * 6) +1;
let randomDiceSource2 = "image/dice" + randomNumber2 + ".png";
document.querySelectorAll("img").setAttribute("src", random);

if( randomNumber1 > randomNumber2 ) {
     document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if ( randomNumber1 < randomNumber2 ) {
     document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if ( randomNumber1 === randomNumber2 ) {
     document.querySelector("h1").innerHTML = "Draw!"; 
} else {
     document.querySelector("h1").innerHTML = "Refresh Me";
}
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);
console.log(document.getElementById("img1"));

if(randomNumber1 === 1) {
     document.getElementById("img1").setAttribute("src", "dice1.png");
} else if(randomNumber1 === 2) {
     document.getElementById("img1").setAttribute("src", "dice2.png");
} else if(randomNumber1 === 3) {
     document.getElementById("img1").setAttribute("src", "dice3.png");
} else if(randomNumber1 === 4) {
     document.getElementById("img1").setAttribute("src", "dice4.png");
} else if(randomNumber1 === 5) {
     document.getElementById("img1").setAttribute("src", "dice5.png");
} else {
     document.getElementById("img1").setAttribute("src", "dice6.png");
}

    if(randomNumber2 === 1) {
         document.getElementById("img2").setAttribute("src", "dice1.png");
    } else if(randomNumber2 === 2) {
         document.getElementById("img2").setAttribute("src", "dice2.png");
    } else if(randomNumber2 === 3) {
         document.getElementById("img2").setAttribute("src", "dice3.png");
    } else if(randomNumber2 === 4) {
         document.getElementById("img2").setAttribute("src", "dice4.png");
    } else if(randomNumber2 === 5) {
         document.getElementById("img2").setAttribute("src", "dice5.png");
    } else {
         document.getElementById("img2").setAttribute("src", "dice6.png");
    }

        if( randomNumber1 > randomNumber2 ) {
           document.querySelector("h1").innerHTML = "Player 1 Wins!";
        } else if ( randomNumber1 < randomNumber2 ) {
             document.querySelector("h1").innerHTML = "Player 2 Wins!";
        } else if ( randomNumber1 === randomNumber2 ) {
            document.querySelector("h1").innerHTML = "Draw!"; 
        } else {
            document.querySelector("h1").innerHTML = "Refresh Me";
        }





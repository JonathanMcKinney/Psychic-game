var winCount = document.getElementById("win");
var lossCount = document.getElementById("loss");
var guessCounter = document.getElementById("guessLeft");
var letterDisplay = document.getElementById("letter");

var goalStr = 'abcdefghijklmnopqrstuvwxyz'
var win = 0;
var loss = 0;
var guessLeft = 10;
var letter = [];


function createObjective() {
    objective = goalStr[Math.floor(Math.random() * goalStr.length)];
    console.log(objective);
}

function restart() {
    guessLeft = 10;
    letter = [];
    createObjective();
}

createObjective();


document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var guess = event.key;
        if (guess === objective) {
            win++;
            winCount.textContent = win;
            alert("You've won!")
            restart();
        }
        else {
            if (letter.indexOf(guess) === -1) {
                letter.push(guess);
                letterDisplay.textContent = letter;
                guessLeft--;
                guessCounter.textContent = guessLeft;
                if (guessLeft === 0) {
                    loss++;
                    lossCount.textContent = loss;
                    alert('Sorry, try again!')
                    restart();
                }
            }


        }
    }


}


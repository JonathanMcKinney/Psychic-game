var option = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winCount = document.getElementById("win");
var lossCount = document.getElementById("loss");
var guessCounter = document.getElementById("guessLeft");
var letterDisplay = document.getElementById("letter");

var win = 0;
var loss = 0;
var guessLeft = 10;
var letter = [];

function createObjective() {
    objective = option[Math.floor(Math.random() * option.length)];
}
createObjective();

document.onkeyup = function (event) {


    letter.push(event.key);
    letterDisplay.textContent = letter;
    var guess = event.key;

    if (guess === objective) {
        win++;
        winCount.textContent = win;
        guessLeft = 10;
        letter = [];
        createObjective();
    }
    else {
        guessLeft--;
        guessCounter.textContent = guessLeft;
        if (guessLeft === 0) {
            loss++;
            lossCount.textContent = loss;
            guessLeft = 10;
            letter = [];
            createObjective();

        }
    }
}



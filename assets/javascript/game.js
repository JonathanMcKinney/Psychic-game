/* Create an array of all letters,
upon initiation, a random letter is chosen from the array and set as the objective,
user presses a key, if key is a letter it is compared to the objective,
{if the key matches the objective the user wins, and wins++
if the key doesn't match, the letter is stored in "letters guessed" and the "guesses remaining" decreases by one,}
the above continues until the user wins or "guesses remaining" = 0
if "guesses remaining" = 0, losses++ */

var option = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

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

document.onkeyup = function(event) {

    if(event.key !== option[]) {
        alert("Please press a letter")
    } else{
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
    
}

// declare and initialize array
let game = ["BACON", "EGGS", "OMELETTE", "TOAST", "MUFFIN", "PANCAKE", "WAFFLE", "SAUSAGE", "SYRUP", "COFFEE"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
// moved variable found into the function, so it would reset to false each time.
let lettersUsed = []
let imageString = '';

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function (event) {
    let found = false;
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    for (let c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }
        output = output + display[c] + ' ';
    }
    if (found == false) {
        alert("Try again!")
        attemptsLeft--;
    }

    lettersUsed.push(userLetter.toUpperCase()); // adds the user's letter to the lettersUsed array, and makes it uppercase.

    document.getElementById("word").innerHTML = output;
    output = '';
    document.getElementById("guessed").innerHTML = `Letters used - ${lettersUsed.join(", ")}`; // displays the letters that have been used, comma separated and with a space for readability.

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

    // switch statement to set the hangman image based on the number of attempts remaining
    switch (attemptsLeft) {
        case 0:
            imageString = 'images/07.png';
            break;
        case 1:
            imageString = 'images/06.png';
            break;
        case 2:
            imageString = 'images/05.png';
            break;
        case 3:
            imageString = 'images/04.png';
            break;
        case 4:
            imageString = 'images/03.png';
            break;
        case 5:
            imageString = 'images/02.png';
            break;
        default:
            imageString = 'images/01.png';
    };
    document.getElementById("hangman").src = imageString;
});


//scirpt connected fine somereason the button and the script are not registering.
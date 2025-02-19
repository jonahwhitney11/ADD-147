let randomNum = 0;
let firstGuess = true;
let newNumDifference = 0;
let warmStreak = 0;
let coldStreak = 0;

function setRandomNum(min, max) {
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  alert(randomNum); // testing randomNum
}

function processGuess() {
  let userGuess = parseFloat(document.getElementById("guess").value);
  // alert(userGuess); - testing that userGuess is assigned correctly
  let numDifference = Math.abs(randomNum - userGuess);
  // alert(numDifference); - testing that numDifference is calculated correctly

  // handles non-number input
  if (isNaN(userGuess)) {
    document.getElementById("right-text").innerHTML = "Please enter a valid number.";
    return;
  }

  // check if first guess
  if (firstGuess) {
    if (userGuess === randomNum) {
      document.getElementById("right-text").innerHTML = `Correct! The number is ${randomNum}`;
    } else {
      document.getElementById("right-text").innerHTML = "Try again!";
    }
    newNumDifference = numDifference;
    warmStreak = 0;
    coldStreak = 0;
  } else if (userGuess === randomNum) {
    document.getElementById("right-text").innerHTML = `Correct! The number is ${randomNum}`;
  } else {
    if (numDifference < newNumDifference) {
      warmStreak++;
      coldStreak = 0; // Reset cold streak

      if (warmStreak >= 3) {
        document.getElementById("right-text").innerHTML = "HOT!";
      } else if (warmStreak === 2) {
        document.getElementById("right-text").innerHTML = "Even Warmer!";
      } else if (warmStreak === 1) {
        document.getElementById("right-text").innerHTML = "Warmer!";
      } else {
        document.getElementById("right-text").innerHTML = "Warmer";
      }
    } else if (numDifference > newNumDifference) {
      coldStreak++;
      warmStreak = 0; // Reset warm streak

      if (coldStreak >= 3) {
        document.getElementById("right-text").innerHTML = "ICE COLD!";
      } else if (coldStreak === 2) {
        document.getElementById("right-text").innerHTML = "Even Colder!";
      } else if (coldStreak === 1) {
        document.getElementById("right-text").innerHTML = "Colder!";
      } else {
        document.getElementById("right-text").innerHTML = "Colder";
      }
    } else {
      document.getElementById("right-text").innerHTML = "Not warmer or colder...";
    }
  }

  newNumDifference = numDifference; // Update for next guess
  firstGuess = false;
}

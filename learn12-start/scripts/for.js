// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html.
let lyrics = "";

for (let bottles = 99; bottles > 0; bottles--) {
  lyrics += `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.<br>`;
  lyrics += `Take one down and pass it around, `;

  if (bottles - 1 === 0) {
    lyrics += `no more bottles of beer on the wall.<br>`;
  } else {
    lyrics += `${bottles - 1} bottles of beer on the wall.<br>`;
  }
}

// Display the lyrics in an HTML element with id "song"
document.getElementById("beer").innerHTML = lyrics;


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = "";
for (let month in months) {
  currentMonth += `${months[month]}<br>`
}

document.getElementById("for-in").innerHTML = currentMonth;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string.
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
let string = "Ja'Marr Chase";

let stringText = "";
for (let x of string) {
  stringText += `${x}<br>`
}
document.getElementById("for-of").innerHTML = stringText;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let x = 50

let whileString = "";
while (x > 0) {
  whileString += `The number is ${x}<br>`;
  x--;
}
document.getElementById("while").innerHTML = whileString
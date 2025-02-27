/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list
Create a list of movies, books, or games at least 5 items long and
display them in the list paragraph
*/
let zeldas = ["Ocarina of Time", "Breath of the Wild", "Tears of the Kingdom", "Link's Awakening", "Link to the Past"];
let text = "";

for (let zelda of zeldas) {
    text += `${zelda}<br>`;
};

document.getElementById("list").innerHTML = text;



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)
*/
const songs = new Set(["Sade in the 90s", "Vitamins", "Juice", "Mint", "Cheap Talk"]);
let songText = "";
let songText2 = "";

for (let song of songs) {
    songText += `${song}<br>`
};

document.getElementById("set1").innerHTML = songText;
// add two more songs to the set then display in the set2 paragraph
songs.add("Black Sheep");
songs.add("Who is She");

for (let song of songs) {
    songText2 += `${song}<br>`
};

document.getElementById("set2").innerHTML = songText2;

/*
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const nameAndEmail = new Map([
    ["Jonah", "jonahEmail@yahoo.com"],
    ["Joe Burrow", "bestQB@bengals.com"],
    ["Ja'Marr Chase", "bestWR@bengals.com"],
    ["Princess Peach", "sorryButOurPrincessIsIn@anotherCastle.com"],
    ["Princess Daisy", "bestPrincess@mario.com"]
]);

let mapText = "";

nameAndEmail.forEach(function (value, key) {
    mapText += `${key} : ${value}<br>`
});

document.getElementById("map1").innerHTML = mapText;
// add two new names and emails and display in map2 use the forEach() method
let mapText2 = "";
nameAndEmail.set("Princess Rosalina", "weirdSpacePrincess@mario.com");
nameAndEmail.set("Princess Zelda", "wake_up_link@hyrule.com");

nameAndEmail.forEach(function (value, key) {
    mapText2 += `${key} : ${value}<br>`
});

document.getElementById("map2").innerHTML = mapText2;
// get and display the email of one person, display in map3
document.getElementById("map3").innerHTML = nameAndEmail.get("Joe Burrow");
// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//
var name1 = "Meri";

// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    const taxRate = .07; // This is a constant
    var firstName = "Meredith",
        lastName = "Engel";
    var name = "Jonah"
    //fix the errors
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHTML = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    // taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    let dog2 = "Nessie";
    // dog2 = "Nessie";
    var dog3 = "Paisley";
    { let dog2; }
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog3 = "Jabroni"
    document.getElementById("dog1-2").innerHTML = dog3;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    var breeds = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("new-doggos").innerHTML = dogs;
    document.getElementById("breeds").innerHTML = breeds;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 1 + 9;
    document.getElementById("addition").innerHTML = "1 + 9 = " + addition;
    let subtraction = 10 - 4;
    document.getElementById("subtraction").innerHTML = "10 - 4 = " + subtraction;
    let multiplication = 3 * 3;
    document.getElementById("multiplication").innerHTML = "3 * 3 = " + multiplication;
    let exponent = 4 ** 5;
    document.getElementById("exponent").innerHTML = "4 ** 5 = " + exponent;
    let division = 32 / 4;
    document.getElementById("division").innerHTML = "32 / 4 = " + division;
    let modulus = 32 % 5;
    document.getElementById("modulus").innerHTML = "32 % 3 = " + modulus;
    let x = 11
    const increment = x++;
    document.getElementById("increment").innerHTML = "11 ++ = " + x;
    let y = 11
    const decrement = y--
    document.getElementById("decrement").innerHTML = "11 -- = " + y
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var x = 10
    document.getElementById("equals").innerHTML = "x = 10 " + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1 " + "x = " + x;
    x -= 1
    document.getElementById("minus-equals").innerHTML = "x -= 1 " + "x = " + x;
    x *= 5
    document.getElementById("times-equals").innerHTML = "x *= 1 " + "x = " + x;
    x /= 5
    document.getElementById("divide-equals").innerHTML = "x += 1 " + "x = " + x;
    x %= 3
    document.getElementById("modulus-equals").innerHTML = "x += 1 " + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const videoGames = ["Zelda", "Pokemon", "Mario"];
    document.getElementById("array").innerHTML = "Video Games - " + videoGames

    const pokemon = {name:"Pikachu", pokedexNum:25, region:"Kanto"}
    document.getElementById("object").innerHTML = "Pokemon - " + pokemon.name + ", Pokedex Number - " + pokemon.pokedexNum + ", Region - " + pokemon.region
}

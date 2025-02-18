function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    let num = 11.12;

    document.getElementById("round").innerHTML = "round - " + Math.round(num);
    document.getElementById("ceil").innerHTML = "ceil - " + Math.ceil(num);
    document.getElementById("floor").innerHTML = "floor - " + Math.floor(-num);
    document.getElementById("trunc").innerHTML = "trunc - " + Math.trunc(num);
    document.getElementById("sign").innerHTML = "sign - " + Math.sign(num);
    document.getElementById("pow").innerHTML = "pow - " + Math.pow(4, 4);
    document.getElementById("min").innerHTML = "min - " + Math.min(1, 55, -10, 11, 66, -4);
    document.getElementById("random").innerHTML = "random - " + Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = getRandomInt(1, 100);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 10;
    let y = "10";
    let comparisons = `The difference between using == and === for comparisons is
    that == compares two values. === is a strict comparison that checks if two
    values are the same and if they are of the same type. For example, if the variable
    x = 10, which is an integer, and a variable y = "10", which is a string, == and ===
    will return different answers. x == y will return ${x == y}. x === y will return
    ${x === y}`;
    document.getElementById("comparisons").innerHTML = comparisons;


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
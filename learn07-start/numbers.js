function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Jonah Whitney";
    /*
        read/watch the associated reference and complete the directions in the comments.

    */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if
       you try to add a number and a string. Print to the add paragraph to
       display both the equation and the results.
    */
    let add = 1 + "1";
    document.getElementById("add").innerHTML = "1 + '1' = " + add;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let num = 93;
    num.toString();
    document.getElementById("to-string").innerHTML = num;

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let num2 = 9.33;
    document.getElementById("exponent").innerHTML = num2.toExponential(5);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    document.getElementById("fixed").innerHTML = num2.toFixed(3);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    document.getElementById("precision").innerHTML = num2.toPrecision(2) + " Specified length is 2";
    document.getElementById("precision2").innerHTML = num2.toPrecision(5) + " Specified length is 5";

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let num3 = "5.55";
    document.getElementById("float").innerHTML = parseFloat(num3) + 3;

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt(num3);


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    let understanding = `My understanding is that using '==' doesn't make a comparison in the strictest sense.
    For example if you were to compare the int 2 to a string '2', the comparison would be true using '==',
    but using '===' is a strict comparison. '===' would recognize that 2 is an int and '2' is a string. So if you need a
    strict comparison you should use '==='.`;
    document.getElementById("equals").innerHTML = understanding;
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    let understandingLogic = `'&&' and '||' have a specific order of precedence. While expressions are resolved from left to right,
    the '&&' has a higher precedence, so it is resolved first.`;
    document.getElementById("logic").innerHTML = understandingLogic;

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah

    function getAnswer(answer) {
        switch (answer) {
            case 1:
                return "The number is " + 1
                break;
            case 2:
                return "The number is " + 2
                break;
            case 3:
                return "The number is " + 3
                break;
            default:
                return "The limit does not exist..."
                break;
        }
    };

    let switchAnswer = getAnswer(1);
    let switchAnswer2 = getAnswer(2);
    let switchAnswer3 = getAnswer(3);
    let switchDefault = getAnswer("chuck sizzle")

    document.getElementById("switch").innerHTML = switchAnswer;
    document.getElementById("switch2").innerHTML = switchAnswer2;
    document.getElementById("switch3").innerHTML = switchAnswer3;
    document.getElementById("switchDefault").innerHTML = switchDefault;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph


}

function bestQB() {
    let qb = document.getElementById("qb").value;
    let quarterback = (qb === "Joe Burrow") ? "The best QB." : "Not the best QB."
    document.getElementById("ternary").innerHTML = quarterback;
}
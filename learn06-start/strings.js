function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    let myName = "Jonah Whitney"
    document.getElementById("name").innerHTML = myName;

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    let stringLength = myString.length;
    document.getElementById("length").innerHTML = stringLength;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let escapeSequences = "This is the \"END\". If I miss 1 shot out of 3, I went 2\\3.";
    let escapeSequences2 = ' It\'s Going to be a good day.';
    document.getElementById("escape").innerHTML = escapeSequences + escapeSequences2;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let name = "Jonah Ray Whitney";
    let firstName = name.slice(0, 5);
    document.getElementById("first").innerHTML = firstName;

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let middleName = name.substring(6, 9);
    document.getElementById("middle").innerHTML = middleName;

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let lastName = name.substr(10);
    document.getElementById("last").innerHTML = lastName;


    // replacing string content - in the following variable use the replace method to put your major
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    let myMajor = major.replace("Physical Therapy", "Software Design and Development");
    document.getElementById("major").innerHTML = myMajor;


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!";
    let uppercaseText = myText.toUpperCase();
    document.getElementById("upper").innerHTML = uppercaseText;

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimmedText = trimText.trim()
    document.getElementById("trim").innerHTML = trimmedText;

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let mayIndex = months.indexOf("May")
    document.getElementById("index").innerHTML = mayIndex;


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = `Jonah`
    let last = `Whitney`

    // Use Variable substitutions to create a greeting that incorporates your first and last name and
    // print to the greeting paragraph
    let myGreeting = `Welcome to the club, ${first} ${last}!`
    document.getElementById("greeting").innerHTML = myGreeting;
}
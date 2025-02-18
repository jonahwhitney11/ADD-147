/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
let newDate = new Date();
document.getElementById("basic").innerHTML = newDate;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
let today = new Date(2025, 1, 18);
document.getElementById("today").innerHTML = today;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
let myBirthday = new Date(87, 10, 12);
document.getElementById("birthday").innerHTML = myBirthday;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
document.getElementById("iso").innerHTML = newDate.toISOString();


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
let date1 = new Date("2022-2-2");
let date2 = new Date("88-5");
let date3 = new Date("Dec 15 2023");
document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
let candaceBDay = new Date("May 27 88");
document.getElementById("get1").innerHTML = "getFullYear() - " + candaceBDay.getFullYear();
document.getElementById("get2").innerHTML = "getMonth() - " + candaceBDay.getMonth();
document.getElementById("get3").innerHTML = "getDate() - " + candaceBDay.getDate();
document.getElementById("get4").innerHTML = "getDay() - " + candaceBDay.getDay();

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
candaceBDay.setFullYear("89");
document.getElementById("set1").innerHTML = "setFullYear() - " + candaceBDay;
candaceBDay.setMonth(3);
document.getElementById("set2").innerHTML = "setMonth() - " + candaceBDay;
candaceBDay.setDate(17);
document.getElementById("set3").innerHTML = "setDate() - " + candaceBDay;
candaceBDay.setHours(12, 30, 45);
document.getElementById("set4").innerHTML = "setHours() - " + candaceBDay;

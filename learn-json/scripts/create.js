function addme() {
  // create person object
  const person = {};

  // set person's attributes from form input
  person.firstName = document.getElementById("fname").value;
  person.lastName = document.getElementById("lname").value;
  person.email = document.getElementById("email").value;
  person.phone = document.getElementById("phone").value;

  // stringify person
  const personString = JSON.stringify(person);

  // display person after stringify
  document.getElementById("json-value").innerHTML = personString;

  console.log(person);
  console.log(personString);
}

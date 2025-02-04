// Functions, objects, and events
// Dog objects
const dog1 = {
  heading: "Bucket Case",
  image: "images/black-dog.jpg",
  caption: "Just hanging out waiting for water",
  altTag: "Black dog in bucket."
};

const dog2 = {
  heading: "Gold Dog",
  image: "images/gold-dog.jpg",
  caption: "Profile of a sweet gold doggo",
  altTag: "Profile of a sweet gold doggo"
}

const dog3 = {
  heading: "Dog Making a Snowman",
  image: "images/snow-dog.jpg",
  caption: "Doggo building a snowman",
  altTag: "Dog with a stick in its mouth to put on a snowman."
}

const dog4 = {
  heading: "Two White Dogs",
  image: "images/white-dogs.jpg",
  caption: "Two dogs nuzzling",
  altTag: "A big white dog and a smaller one nuzzling."
}

function chooseDog(dog) {
  if (dog == 1) {
    loadMe(dog1, 1); // don't put dog1 in quotes or it will pass a string not the object
  } else if (dog == 2) {
    loadMe(dog2, 2);
  } else if (dog == 3) {
    loadMe(dog3, 3);
  } else if (dog == 4) {
    loadMe(dog4, 4);
  }
}

function loadMe(dog, dogNum) {
  document.getElementById("heading" + dogNum).innerHTML = dog.heading;
  document.getElementById("img" + dogNum).src = dog.image;
  document.getElementById("img" + dogNum).style.display = "block";
  document.getElementById("p" + dogNum).innerHTML = dog.caption;
  document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}

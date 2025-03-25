class Beer {
  constructor(image, name, brewery, style, abv) {
    this.image = image;
    this.name = name;
    this.brewery = brewery;
    this.style = style;
    this.abv = abv;
  }

  beerInfo() {
    return `Name: ${this.name}. Brewery: ${this.brewery}. Style: ${this.style}. ABV: ${this.abv}.`
  }
}

// instances of Beer class
var kish1 = new Beer('https://fakeimg.pl/200x300', 'Pilsner', 'Kishwaukee', 'Pilsner', 5);
var kish2 = new Beer('https://fakeimg.pl/200x300', 'Birdie', 'Kishwaukee', 'Blonde', 5.5);
var kish3 = new Beer('https://fakeimg.pl/200x300', 'Woodpecker', 'Kishwaukee', 'Red Ale', 5);
var kish4 = new Beer('https://fakeimg.pl/200x300', 'Loro Lima', 'Kishwaukee', 'Lime Lager', 4.2);
var kish5 = new Beer('https://fakeimg.pl/200x300', 'Sandhill', 'Kishwaukee', 'Lager', 5);
var kish6 = new Beer('https://fakeimg.pl/200x300', 'Bufflehead', 'Kishwaukee', 'Brown Ale', 6.2);
var rev1 = new Beer('https://fakeimg.pl/200x300', 'Rev Pils', 'Revolution', 'Pilsner', 5.5);
var rev2 = new Beer('https://fakeimg.pl/200x300', 'Anti-Hero', 'Revolution', 'IPA', 5.5);
var rev3 = new Beer('https://fakeimg.pl/200x300', 'Fist City', 'Revolution', 'Pale Ale', 5.5);
var rev4 = new Beer('https://fakeimg.pl/200x300', 'Sun Crusher', 'Revolution', 'Wheat Pale Ale', 5.5);
var floyds1 = new Beer('https://fakeimg.pl/200x300', 'Gumballhead', '3 Floyds', 'Wheat Pale Ale', 5.5);
var floyds2 = new Beer('https://fakeimg.pl/200x300', 'Turbo Reaper', '3 Floyds', 'IPA', 7);
var floyds3 = new Beer('https://fakeimg.pl/200x300', 'Calumet Queen', '3 Floyds', 'Kolsch', 5.5);
var floyds4 = new Beer('https://fakeimg.pl/200x300', 'Jinxproof', '3 Floyds', 'Pilsner', 5.5);
var floyds5 = new Beer('https://fakeimg.pl/200x300', 'Chainsword', '3 Floyds', 'Pale Ale', 5.5);
var floyds6 = new Beer('https://fakeimg.pl/200x300', 'Zombie Dust', '3 Floyds', 'Pale Ale', 5.5);

var beerContainer = document.getElementById('beerContainer');

var beers = [kish1, kish2, kish3, kish4, kish5, kish6, rev1, rev2, rev3, rev4, floyds1, floyds2, floyds3, floyds4, floyds5, floyds6];

// function to create beer cards and display them on the page
function displayBeers() {
  for (var i = 0; i < beers.length; i++) {
    var beer = beers[i];

    var beerDiv = document.createElement("div");
    beerDiv.classList.add("beer-card");

    var beerImage = document.createElement("img");
    beerImage.src = beer.image || 'https://fakeimg.pl/200x300';

    var beerName = document.createElement("h2");
    beerName.textContent = beer.name;

    var brewery = document.createElement("p");
    brewery.textContent = beer.brewery + " Brewing";

    var style = document.createElement("p");
    style.textContent = beer.style;

    var abv = document.createElement("p");
    abv.textContent = beer.abv + " ABV";

    // add elements to beerDiv
    beerDiv.appendChild(beerImage);
    beerDiv.appendChild(beerName);
    beerDiv.appendChild(brewery);
    beerDiv.appendChild(style);
    beerDiv.appendChild(abv);

    // add beerDiv to the container
    beerContainer.appendChild(beerDiv);
  }
}

// function to populate filter dropdown options
function populateFilters() {
  var styleFilter = document.getElementById("styleFilter");
  var breweryFilter = document.getElementById("breweryFilter");

  var styles = [];
  var breweries = [];

  // get unique styles and breweries
  for (var i = 0; i < beers.length; i++) {
    var beer = beers[i];

    if (!styles.includes(beer.style)) {
      styles.push(beer.style);
    }
    if (!breweries.includes(beer.brewery)) {
      breweries.push(beer.brewery);
    }
  }

  // function to add options to filters
  function addOptions(selectElement, optionsArray) {
    for (var i = 0; i < optionsArray.length; i++) {
      var filterOption = document.createElement("option");
      filterOption.value = optionsArray[i];
      filterOption.textContent = optionsArray[i];
      selectElement.appendChild(filterOption);
    }
  }

  // adds options to filters
  addOptions(styleFilter, styles);
  addOptions(breweryFilter, breweries);
}

// function to filter beers that are displayed based on the user's dropdown selections
function filterBeers() {
  // bind dropdown selections to a var
  var styleFilter = document.getElementById('styleFilter').value;
  var breweryFilter = document.getElementById('breweryFilter').value;

  // use filter method to filter beers into new array of filtered beers
  var filteredBeers = beers.filter(function (beer) {
    return (styleFilter === "" || styleFilter === beer.style) && (breweryFilter === "" || breweryFilter === beer.brewery)
  });

  beerContainer.innerHTML = "" // clears the beers that are initially displayed

  // loop through filteredBeers and create cards to be displayed
  for (var i = 0; i < filteredBeers.length; i++) {
    var beer = filteredBeers[i];

    var beerDiv = document.createElement("div");
    beerDiv.classList.add("beer-card");

    var beerImage = document.createElement("img");
    beerImage.src = beer.image || 'https://fakeimg.pl/200x300';

    var beerName = document.createElement("h2");
    beerName.textContent = beer.name;

    var brewery = document.createElement("p");
    brewery.textContent = beer.brewery + " Brewing";

    var style = document.createElement("p");
    style.textContent = beer.style;

    var abv = document.createElement("p");
    abv.textContent = beer.abv + " ABV";

    // add elements to beerDiv
    beerDiv.appendChild(beerImage);
    beerDiv.appendChild(beerName);
    beerDiv.appendChild(brewery);
    beerDiv.appendChild(style);
    beerDiv.appendChild(abv);

    // add beerDiv to the container
    beerContainer.appendChild(beerDiv);
  }
}

document.getElementById("styleFilter").addEventListener("change", filterBeers);
document.getElementById("breweryFilter").addEventListener("change", filterBeers);

// testing that instance of beer was created
// console.log(kish1);
// console.log(kish1.beerInfo());
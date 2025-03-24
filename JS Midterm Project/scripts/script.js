class Beer {
  constructor(name, brewery, style, abv) {
    this.name = name;
    this.brewery = brewery;
    this.style = style;
    this.abv = abv;
  }

  beerInfo() {
    return `Name: ${this.name}. Brewery: ${this.brewery}. Style: ${this.style}. ABV: ${this.abv}.`
  }
}

var kish1 = new Beer('Pilsner', 'Kishwaukee', 'Pilsner', 5);
var kish2 = new Beer('Birdie', 'Kishwaukee', 'Blonde', 5.5);
var kish3 = new Beer('Woodpecker', 'Kishwaukee', 'Red Ale', 5);
var kish4 = new Beer('Loro Lima', 'Kishwaukee', 'Lime Lager', 4.2);
var kish5 = new Beer('Sandhill', 'Kishwaukee', 'Lager', 5);
var kish6 = new Beer('Bufflehead', 'Kishwaukee', 'Brown Ale', 6.2);
var rev1 = new Beer('Rev Pils', 'Revolution', 'Pilsner', 5.5);
var rev2 = new Beer('Anti-Hero', 'Revolution', 'IPA', 5.5);
var rev3 = new Beer('Fist City', 'Revolution', 'Pale Ale', 5.5);
var rev4 = new Beer('Sun Crusher', 'Revolution', 'Wheat Pale Ale', 5.5);
var floyds1 = new Beer('Gumballhead', '3 Floyds', 'Wheat Pale Ale', 5.5);
var floyds2 = new Beer('Turbo Reaper', '3 Floyds', 'IPA', 7);
var floyds3 = new Beer('Calumet Queen', '3 Floyds', 'Kolsch', 5.5);
var floyds4 = new Beer('Jinxproof', '3 Floyds', 'Pilsner', 5.5);
var floyds5 = new Beer('Chainsword', '3 Floyds', 'Pale Ale', 5.5);
var floyds6 = new Beer('Zombie Dust', '3 Floyds', 'Pale Ale', 5.5);

var beerContainer = document.getElementById('beerContainer');

var beers = [kish1, kish2, kish3, kish4, kish5, kish6, rev1, rev2, rev3, rev4, floyds1, floyds2, floyds3, floyds4, floyds5, floyds6];

beers.forEach(beer => {
  const beerDiv = document.createElement('div');
  beerDiv.classList.add('beer-card');
  beerDiv.innerHTML = `<h2>${beer.name}</h2><p>${beer.brewery} Brewing</p><p>${beer.style}</p><p>${beer.abv} ABV</p>`

  beerContainer.appendChild(beerDiv);
})

console.log(kish1);
console.log(kish1.beerInfo());
var orderTotal = 0
var dogPrice = 7
var sidesPrice = 0
var drinksPrice = 0

function getDogPrice() {
  let customerName = document.getElementById("name").value

  let dogStyle = parseFloat(document.getElementById("style").value)
  let baconCheckbox = document.getElementById("bacon").checked
  let baconPrice = parseFloat(document.getElementById("bacon").value)
  let cheeseCheckbox = document.getElementById("cheese").checked
  let cheesePrice = parseFloat(document.getElementById("cheese").value)
  let addChiliCheckbox = document.getElementById("addChili").checked
  let addChiliPrice = parseFloat(document.getElementById("addChili").value)
  let dogQuantity = parseFloat(document.getElementById("hotdogQuantity").value)
  dogPrice += dogStyle

  if (baconCheckbox) {
    dogPrice += baconPrice

    // alert(dogPrice) - Checking that dogPrice is being updated.
  }

  if (cheeseCheckbox) {
    dogPrice += cheesePrice

    // alert(dogPrice) - Checking that dogPrice is being updated.
  }

  if (addChiliCheckbox) {
    dogPrice += addChiliPrice

    // alert(dogPrice) - Checking that dogPrice is being updated.
  }

  dogPrice *= dogQuantity
  alert("Hotdog(s) added to order. Total for hotdogs is: " + orderTotal)

  return dogPrice
}

function getSidesPrice() {
  let friesQuantity = parseFloat(document.getElementById("friesQuantity").value)
  var friesTotal = friesQuantity * 2
  let chipsQuantity = parseFloat(document.getElementById("chipsQuantity").value)
  var chipsTotal = chipsQuantity * 2
  let taterTotsQuantity = parseFloat(document.getElementById("taterTotsQuantity").value)
  var taterTotsTotal = taterTotsQuantity * 2
  let soupQuantity = parseFloat(document.getElementById("soupQuantity").value)
  var soupTotal = soupQuantity * 4
  let chiliQuantity = parseFloat(document.getElementById("chiliQuantity").value)
  var chiliTotal = chiliQuantity * 6

  sidesPrice += friesTotal
  sidesPrice += chipsTotal
  sidesPrice += taterTotsTotal
  sidesPrice += soupTotal
  sidesPrice += chiliTotal

  alert("Side(s) added to order. Total for sides is: " + sidesPrice)
  return sidesPrice
}

function getDrinksPrice() {
  let sodaQuantity = parseFloat(document.getElementById("sodaQuantity").value)
  var sodaTotal = sodaQuantity * 2
  let milkshakeQuantity = parseFloat(document.getElementById("milkshakeQuantity").value)
  var milkshakeTotal = milkshakeQuantity * 5
  let coffeeQuantity = parseFloat(document.getElementById("coffeeQuantity").value)
  var coffeeTotal = coffeeQuantity * 2
  let beerQuantity = parseFloat(document.getElementById("beerQuantity").value)
  var beerTotal = beerQuantity * 4
  let cocktailQuantity = parseFloat(document.getElementById("cocktailQuantity").value)
  var cocktailTotal = cocktailQuantity * 6

  if (sodaQuantity >= 0) {
    drinksPrice += sodaTotal
  }
  if (milkshakeQuantity >= 0) {
    drinksPrice += milkshakeTotal
  }
  if (coffeeQuantity >= 0) {
    drinksPrice += coffeeTotal
  }
  if (beerQuantity >= 0) {
    drinksPrice += beerTotal
  }
  if (cocktailQuantity >= 0) {
    drinksPrice += cocktailTotal
  }
  alert("Drinks(s) added to order. Total for drinks is: " + drinksPrice)
  return drinksPrice
}
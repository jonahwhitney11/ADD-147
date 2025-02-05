const rock1 = {
  name: "Amazonite",
  image: "images/amazonite.jpeg",
  shape: "Tumble",
  chakra: "Heart and Throat Chakra",
  properties: "Can relieve emotional burdens, and encourage open and honest communication."
};

const rock2 = {
  name: "Amethyst",
  image: "images/amethyst.jpeg",
  shape: "Tumble",
  chakra: "Crown Chakra",
  properties: "Promotes calmness, clarity, and spiritual enlightenment."
};

const rock3 = {
  name: "Lepidolite",
  image: "images/lepidolite.jpeg",
  shape: "Sphere",
  chakra: "Crown and Heart Chakra",
  properties: "Promotes emotional balance, reduces stress, and can improve sleep."
};

const rock4 = {
  name: "Moonstone",
  image: "images/moonstone.jpeg",
  shape: "Palm Stone",
  chakra: "Heart and Throat Chakra",
  properties: "Can help with spiritual growth, intuition, and oneness with the universe."
};

const rock5 = {
  name: "Pistachio Calcite",
  image: "images/pistachio_calcite.jpeg",
  shape: "Sphere",
  chakra: "Heart Chakra",
  properties: "Opens ones heart to receive love and encourages tolerance, compassion, and understanding."
};

function display() {
  let html = `<h2>${rock1.name}</h2>` +
    `<h3>${rock1.shape}</h3>` + `<img src="${rock1.image}">` +
    `<h3>Metaphysical Properties</h3>` + `<p>${rock1.chakra}</p>` +
    `<p>${rock1.properties}</p>`;

  let html2 = `<h2>${rock2.name}</h2>` +
    `<h3>${rock2.shape}</h3>` + `<img src="${rock2.image}">` +
    `<h3>Metaphysical Properties</h3>` + `<p>${rock2.chakra}</p>` +
    `<p>${rock2.properties}</p>`;

  let html3 = `<h2>${rock3.name}</h2>` +
    `<h3>${rock3.shape}</h3>` + `<img src="${rock3.image}">` +
    `<h3>Metaphysical Properties</h3>` + `<p>${rock3.chakra}</p>` +
    `<p>${rock3.properties}</p>`;

  let html4 = `<h2>${rock4.name}</h2>` +
    `<h3>${rock4.shape}</h3>` + `<img src="${rock4.image}">` +
    `<h3>Metaphysical Properties</h3>` + `<p>${rock4.chakra}</p>` +
    `<p>${rock4.properties}</p>`;

  let html5 = `<h2>${rock5.name}</h2>` +
    `<h3>${rock5.shape}</h3>` + `<img src="${rock5.image}">` +
    `<h3>Metaphysical Properties</h3>` + `<p>${rock5.chakra}</p>` +
    `<p>${rock5.properties}</p>`;

  document.getElementById('rock1').innerHTML = html;
  document.getElementById('rock2').innerHTML = html2;
  document.getElementById('rock3').innerHTML = html3;
  document.getElementById('rock4').innerHTML = html4;
  document.getElementById('rock5').innerHTML = html5;
};
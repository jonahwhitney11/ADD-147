class Rock {
  constructor(type, shape, color, chakra) {
    this.type = type;
    this.shape = shape;
    this.color = color;
    this.chakra = chakra
  }

  rockDetails() {
    return `This rock is ${this.type}. It is a ${this.color} ${this.shape}. It is connected to your ${this.chakra}.`
  }
}

const amethyst = new Rock('amethyst', 'sphere', 'purple', 'third eye');
const lepidolite = new Rock('lepidolite', 'tumble', 'purple', 'third eye');
const moonstone = new Rock('moonstone', 'palm stone', 'white and black', 'crown');
const pCalcite = new Rock('pistachio calcite', 'sphere', 'green', 'heart and throat');

document.getElementById('amethyst').innerHTML = amethyst.rockDetails();
document.getElementById('lepidolite').innerHTML = lepidolite.rockDetails();
document.getElementById('moonstone').innerHTML = moonstone.rockDetails();
document.getElementById('pCalcite').innerHTML = pCalcite.rockDetails();

// console.log(amethyst);
// console.log(amethyst.rockDetails());
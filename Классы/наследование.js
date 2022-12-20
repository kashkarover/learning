class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    console.log(`${this.name} стоит неподвижно.`);
  }
}

let animal = new Animal('Животное');

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется.`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit('Кролик');
rabbit.run(8);
rabbit.stop();

class Cow extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

let cow = new Cow('Корова');
console.log(cow.name);
cow.stop();

// let animal = {
//     eats: true
// };
// function Rabbit(name) {
//     this.name = name;
//     //this.__proto__ = animal;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit('Bugaga');
// console.log(rabbit.eats);

// function Rabbit() {}
// console.log(Rabbit.prototype.constructor == Rabbit)
// let rabbit = new Rabbit();
// console.log(rabbit.constructor == Rabbit)

// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }
// let rabbit = new Rabbit('asdasd');
// let rabbit2 = new rabbit.constructor('wqewe');

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};
let rabbit = new Rabbit();
Rabbit.prototype.eats = false;
console.log(rabbit.eats); //false

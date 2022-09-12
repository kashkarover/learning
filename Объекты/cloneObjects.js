// Простое клонирование

let user = {
  name: 'Millie',
  age: 18,
};

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

clone.name = 'Eleven';
console.log(user.name);

//Метод Object.assign

let earth = {
  mass: 1242141,
};

let param1 = { diameter: 13000 };
let param2 = { pop: '8b' };

Object.assign(earth, param1, param2);
console.log(earth);

// Глубокое клонирование, _.cloneDeep(obj) (библиотека lodash)
const _ = require('./lodash.js');

let shape = {
  id: 'square',
  sizes: {
    height: 100,
    width: 50,
  },
};

let deepClone = _.cloneDeep(shape);
deepClone.sizes.width = 100;
console.log(shape);
console.log(deepClone);

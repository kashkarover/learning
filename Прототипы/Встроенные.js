// function f() {
//     console.log("Hello!");
//   }

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms)
// }
// f.defer(1000);

// function f(a, b) {
//   console.log(a + b);
// }

// Function.prototype.defer = function (ms) {
//   let f = this;
//   return function (...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   };
// };

// f.defer(1000)(1, 2);

//Методы прототипов

// let obj = Object.create(null);
// obj.name = 'Ravil';
// console.log(obj)

let dictionary = Object.create(null);

dictionary.toString = function () {
  console.log(Object.keys(this).join());
};

Object.defineProperty(dictionary, 'toString', { enumerable: false });

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
  console.log(key);
}

console.log(dictionary);
dictionary.toString();

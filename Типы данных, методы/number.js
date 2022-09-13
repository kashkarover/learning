console.log(5.69e11);

console.log(0xff);

let a = 0b11111111;
let b = 0o377;
console.log(a == b);

let num = 25535325;
console.log(num.toString(16));
console.log(num.toString(36));
console.log((255).toString(16));

let c = 3.1;
let d = -1.1;
console.log(Math.floor(c));
console.log(Math.floor(d));
console.log(Math.ceil(c));
console.log(Math.ceil(d));
console.log(Math.round(c));
console.log(Math.round(d));
console.log(Math.trunc(c));
console.log(Math.trunc(d));

let num1 = 12.34;
let num2 = 12.36;

console.log(num1.toFixed(1));
console.log(num2.toFixed(1));
console.log(typeof num1.toFixed(1));
console.log(typeof +num1.toFixed(1));
console.log(num2.toFixed(5));

console.log(0.1 + 0.2);
console.log(+(0.1 + 0.2).toFixed(2));
console.log(9999999999999999);
console.log(-0 == 0);

console.log(isNaN(NaN));
console.log(isNaN('string'));
console.log(NaN === NaN);

console.log('---------------------------------------------------------------');

console.log(isFinite('15'));
console.log(isFinite('string'));
console.log(isFinite(Infinity));

console.log('---------------------------------------------------------------');

console.log(Number.isNaN(NaN));
console.log(Number.isNaN('string' / 2));
console.log(Number.isNaN('string'));

console.log('---------------------------------------------------------------');

console.log(Number.isFinite(123));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(2 / 0));
console.log(Number.isFinite('123'));

console.log('---------------------------------------------------------------');

console.log(parseInt('100px'));
console.log(parseInt('12.3'));
console.log(parseInt('a123'));
console.log(parseFloat('12.5em'));
console.log(parseFloat('12.5.6'));

console.log(parseInt('0xff', 16));

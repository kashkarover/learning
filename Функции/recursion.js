/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:
С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(46));

function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo(100));

// function sumTo(n) {
//   let d = 1;
//   let a = 1;
//   return ((2 * a + d * (n - 1)) / 2) * n;
// }
// console.log(sumTo(100));

//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
  if (n == 1 || n == 2) return n;
  return n * factorial(n - 1);
}

console.log(factorial(2));

//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// function fib(n) {
//   if (n == 1 || n == 2) return 1;
//   return fib(n - 1) + fib(n - 2);     // O(2^n)
// }

// console.log(fib(77));

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

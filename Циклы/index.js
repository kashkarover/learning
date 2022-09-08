let i = 0;
while (++i < 5) console.log(i); // префиксная форма

let j = 0;
while (j++ < 5) console.log(j); // постфиксная форма

//При помощи цикла for выведите чётные числа от 2 до 10.

for (let q = 2; q <= 10; q++) {
  if (q % 2 == 0) console.log(q);
}

/* Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let w = 0; w < 3; w++) {
   console.log( `number ${w}!` );
} 
*/

let w = 0;
while (w < 3) {
  console.log(`number ${w}`);
  w++;
}

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 100;

label: for (let e = 2; e <= n; e++) {
  for (let r = 2; r < e; r++) {
    if (e % r == 0) continue label;
  }

  console.log(e);
}

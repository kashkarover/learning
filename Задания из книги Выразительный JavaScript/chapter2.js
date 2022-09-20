// 1. Построение треугольника в цикле
for (let i = '#'; i.length < 8; i += '#') console.log(i);

// 2. FizzBuzz
for (let i = 0; i <= 100; i++) {
  let answer = '';
  if (i % 3 === 0) {
    answer += 'Fizz';
  }
  if (i % 5 === 0) {
    answer += 'Buzz';
  }
  console.log(answer || i);
}

// 3. Шахматная доска
let h = 50;
let output = '';

for (let i = 0; i < h; i++) {
  for (let j = 0; j < 2 * h; j++) {
    if ((i + j) % 2 == 0) {
      output += ' ';
    } else {
      output += '#';
    }
  }
  output += '\n';
}

console.log(output);

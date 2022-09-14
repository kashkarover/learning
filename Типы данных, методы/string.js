function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`);

console.log('----------------------------------------------');

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList);

console.log('----------------------------------------------');

console.log('\u00A9');
console.log('\u{20331}');
console.log('\u{1F60D}');

console.log('----------------------------------------------');

let str = 'JavaScript';

console.log(str[0]);
console.log(str.charAt(4));
console.log(str[100]);
console.log(str.charAt(100));

console.log('----------------------------------------------');

console.log('JavaScript'.toUpperCase());
console.log('JavaScript'.toLowerCase());
console.log('JavaScript'[0].toUpperCase());

console.log('----------------------------------------------');

let str1 = 'Widget with id';

console.log(str1.indexOf('Widget'));
console.log(str1.indexOf('widget'));
console.log(str1.indexOf('id'));
console.log(str1.indexOf('id', 2));

console.log('----------------------------------------------');

let str3 = 'Ослик Иа-Иа посмотрел на виадук';
let target = 'Иа';
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1;
}

console.log('----------------------------------------------');

let str4 = '';

for (let i = 65; i <= 220; i++) {
  str4 += String.fromCodePoint(i);
}
console.log(str4);

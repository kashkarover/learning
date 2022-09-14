// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
let str = 'asfasdfafas';

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(str));

/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

let str1 = 'test';

function checkSpam(str1) {
  str1 = str1.toLowerCase();

  if (str1.includes('viagra') || str1.includes('xxx')) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam('innocent viagra');

/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate(str2, maxlength) {
  if (str2.length > maxlength) {
    console.log(
      (str2 = str2.slice(-str2.length, maxlength - str2.length) + '...')
    );
  } else {
    console.log(str2);
  }
}

truncate('kajsfh', 16);

/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(curr) {
  return +curr.slice(1);
}

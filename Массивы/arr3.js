/*
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
*/
function unique(arr) {
  return Array.from(new Set(arr));
}

/*
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/

function aclean(arr1) {
  let map = new Map();

  for (let word of arr1) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
    console.log(map.set(sorted, word));
  }

  return Array.from(map.values());
}

let arr1 = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr1));

/*
У вас есть массив объектов user, и в каждом из них есть user.name. 
Напишите код, который преобразует их в массив имён.
*/
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

console.log(names);

/*
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
*/

let misha = { name: 'Миша', surname: 'Пупкин', id: 1 };
let tolya = { name: 'Толя', surname: 'Иванов', id: 2 };
let katya = { name: 'Катя', surname: 'Петрова', id: 3 };

let users1 = [misha, tolya, katya];

let usersMapped = users1.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);

/*
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
*/

let luntik = { name: 'Лунтик', age: 25 };
let kuzya = { name: 'Кузя', age: 30 };
let mila = { name: 'Мила', age: 29 };

let arr = [luntik, kuzya, mila];

function sortByAge(users) {
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}

sortByAge(arr);
console.log(arr);

/*
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
*/

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

console.log(getAverageAge(arr));

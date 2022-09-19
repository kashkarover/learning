/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
сли объект salaries пуст, то результат должен быть 0.
*/

function sumSalaries(salaries) {
  let count = 0;
  let salariesArr = Object.values(salaries);
  for (let num of salariesArr) {
    count += num;
  }
  return count;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));

//Напишите функцию count(obj), которая возвращает количество свойств объекта:

function count(user) {
  return Object.keys(user).length;
}

console.log(count(salaries));

//У нас есть объект:
let user = {
  name: 'John',
  years: 30,
};
/*
Напишите деструктурирующее присваивание, которое:
свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

//У нас есть объект sal с зарплатами:
let sal = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
/*
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

function topSalary(salaries) {
  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalary(sal));

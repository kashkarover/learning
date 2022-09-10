/* Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
1. Используя оператор ?
2. Используя оператор || */

function checkAge(age) {
  return age > 18 ? console.log(true) : console.log('Родители разрешили?');
}
checkAge(19);

function cheacAge1(age1) {
  return age1 > 18 || console.log('Родители разрешили?');
}

cheacAge1(17);

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  if (a > b) {
    console.log(b);
    return b;
  }
  console.log(a);
  return a;
}

min(6, 6);

//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
//P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

function pow(x, n) {
  if (n >= 1 && Number.isInteger(n)) {
    console.log(x ** n);
    return x ** n;
  } else {
    console.log('n должен быть натуральным');
    return;
  }
}

pow(5, 5);

/* Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */

let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  'Вы согласны?',
  function () {
    alert('Вы согласились.');
  },
  function () {
    alert('Вы отменили выполнение.');
  }
);

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidationError extends MyError {
  constructor(message) {
    super(message);
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('Нет свойства: ' + property);
    this.property = property;
  }
}

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError('age');
  }

  if (!user.name) {
    throw new PropertyRequiredError('name');
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError('Синтаксическая ошибка', err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError('Ошибка валидации', err);
    } else {
      throw err;
    }
  }
}

try {
  readUser('{"age": 25}');
} catch (e) {
  if (e instanceof ReadError) {
    console.log(e);
    console.log('Исходная ошибка:' + e.cause);
  } else {
    throw e;
  }
}

//Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
//Класс должен поддерживать свойства message, name и stack.

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}

let err = new FormatError('ошибка форматирования');
console.log(err);

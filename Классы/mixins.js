let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

let sayHiMixin = {
  __proto__: sayMixin,
  sayHi() {
    super.say(`Привет, ${this.name}`);
  },
  sayBye() {
    super.say(`Пока ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

new User(`Вася`).sayHi();

// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(this.name)
//     }
// };
// let user = new User('Millie');
// user.sayHi()

// let User = class {
//     sayHi() {
//         console.log('Hello')
//     }
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 2) {
//             console.log('Short name');
//             return;
//         }
//         this._name = value;
//     }
// };

// let user = new User('w');
// user = new User('Millie');
// console.log(user.name)

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000,
});
clock.start();

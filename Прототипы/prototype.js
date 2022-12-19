let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log('куян гуляет');
    } else {
      console.log('куян уянмаган эле');
    }
  },
  sleep() {
    this.isSleeping = true;
    console.log('куян йоклай');
  },
  wakeup() {
    this.isSleeping = false;
    console.log('куян уянды');
  },
};

let rabbit = {
  __proto__: animal,
  name: 'Bugaga',
};

Object.defineProperty(animal, 'sleep', { enumerable: false });

console.log(Object.keys(rabbit));

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Собственное свойство: ${prop}`);
  } else {
    console.log(`Унаследованное свойство: ${prop}`);
  }
}

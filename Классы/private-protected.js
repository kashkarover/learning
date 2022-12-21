// class CoffeeMachine {
//     _waterAmount = 0;
//     set waterAmount(value) {
//         if (value < 0) {
//             throw new Error(`Отрицательное количество воды`);
//         } else if (value > 1500) {
//             throw new Error(`Слишком много воды`);
//         }
//         this._waterAmount = value;
//         console.log(`Уровень воды в кофеварке: ${value} мл.`)
//     }
//     get waterAmount() {
//         return this._waterAmount;
//     }
//     constructor(power) {
//         if (power < 0) {
//             throw new Error(`Мощность не может быть отрицательной`);
//         } else if (power > 3500) {
//             throw new Error(`Слишком большая мощность кофеварки.`);
//         }
//         this._power = power;
//         console.log(`Мощность кофеварки: ${power} Вт.`)
//     }
//     get power() {
//         return this._power;
//     }
// }

// let coffeeMachine = new CoffeeMachine(800);
// coffeeMachine.waterAmount = 1400;
// coffeeMachine.power = 1000;

class CoffeeMachine {
  #waterLimit = 1500;

  #checkWater(value) {
    if (value < 0) throw new Error('Отрицательный уровень воды');
    if (value > this.#waterLimit) throw new Error('Слишком много воды');
  }
}

let coffeeMachine = new CoffeeMachine();

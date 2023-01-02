// =======================================================//
// пример 1
let turn = 'right';
// если (turn ровно right) { то выведи в консоль'You need to turn to the right'}
if (turn === 'right') {
  console.log('You need to turn to the right');
} else {
  console.log('Elseee');
}
// в другом случае в консоль выведи  'Elseee'
// =======================================================//
// пример 2
let ringWay = 0;
// if (ringWay === 1) {
//   console.log('It`s first');
// } else if (ringWay === 2) {
//   console.log('It`s second');
// } else if (ringWay === 3) {
//   console.log('It`s third');
// }
// SWITCH CASE для этого примера
switch (ringWay) {
  case 1: // если case 1
    console.log('It`s first'); // то выведи в консоль 'It`s first'
    break; // дальше не пропускает
  case 2: // если case 2
    console.log('It`s second'); // то выведи в консоль 'It`s second'
    break; // дальше не пропускает
  case 3: // если case 3
    console.log('It`s third'); // то выведи в консоль 'It`s third'
    break; // дальше не пропускает
  default: // алтернатива else
    console.log(ringWay); // то выведи в консоль значение переменной  ringWay
}
// =======================================================//
// пример 3
let time = 18; // время 18
// если (время больше-ровно 9 и время меньше ровно 17){ выведи в консоль 'WORK time!' }
if (time >= 9 && time <= 17) {
  console.log('WORK time!');
} else {
  console.log('GOOD BYE!');
}
// в другом случае в консоль выведи  GOOD BYE!
// (TERNARY) тернарный оператор для этого примера (используется только если условие короткие один if один else )
// condition ? {if} : {else}
time >= 9 && time <= 17 ? console.log('WORK time!') : console.log('GOOD BYE!');
// =======================================================//

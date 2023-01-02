// cycles while и do while(не часто используюся )
// while(condition - тело(условие) ) { stament - тело}  до тех пор пака не выполнится условие не будет
// пример 1
// let max = 10;
// let start = 0;
// let current = 0;
// while (current <= max) {
//   // до тех пор пока current меньше или ровно max выведи в консоль 'ок!'
//   console.log('ok!'); //11 ok! (11 потому что началось с 0)
//   current += 1; // при этом current изменяй, каждый раз добавляй на 1
// }
// // пример 2 прохой сценарии
// max = 10;
// start = 0;
// current = 11;
// while (current <= max) {
//   console.log('ok!'); // ничего не выведится в консоль так как current больше max
//   current += 1;
// }

// // do{stament - тело } while (condition - тело(условие) )
// do {
//   console.log('ok!'); // ok!
//   current += 1;
// } while (current <= max);
// // ключивое отличие while от do while, при  while сначала проверяется условие потом ужи выполняется действие(если условие не подходят то действия не будет), а в do while ,будет одно действие даже при плохих условиях(так как сначала делется дейтсвие а потом проверятеся условие)

//  for часто используют цикл со счетчиком
// for (start, condition, step) {
// 	statement
// }
// индекс   0123456789 и так далее
let text = 'I Love JavaScript';
console.log(text.length); //17
// i || о || k старт
for (let i = 0; i < text.length; i += 2) {
  // 0  меньше чем 17 тогда выведи на консоль I (начало 0 это I) затем добавляй на 2,  это буква L и так далее
  console.log(text[i]); //I L v  aa с i t
}

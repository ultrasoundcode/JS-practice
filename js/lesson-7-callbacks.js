function myFunc1() {
  // console.log('myFunc-1 is called');
}
function myFunc2() {
  // console.log('myFunc-2 is called');
}
function myFunc3() {
  // console.log('myFunc-3 is called');
}
function myFunc4() {
  // console.log('myFunc-4 is called');
}
function mainFunction(callback) {
  // console.log('Attention!!!');
  callback();
}
mainFunction(myFunc1);
mainFunction(myFunc2);
mainFunction(myFunc3);
mainFunction(myFunc4);

/* функц метод массива forEach
 [].for.Each((element, index, array)=>{

})
*/
function funcWithAnyCallback(...callbacks) {
  // console.log(callbacks);
  // for (const func of callbacks) {
  // 	console.log(func);
  // 	func();

  // }
  callbacks.forEach((func) => {
    // console.log('forEach :', func);
    func();
  });
}
funcWithAnyCallback(myFunc1, myFunc2, myFunc3, myFunc1);
const numbers = [1, 2, 3, 4, 5, 6, 7];
// FUNCTIONAL METODS
let result;
console.log(result);

// ====  array.map()  ====
result = numbers.map((number) => {
  console.log('number: ', number);
  return number + '';
});
console.log('result .map(): ', result);

// ====  array.filter()  ====
result = numbers.filter((item) => {
  console.log('item: ', item);
  /*пример
   if (item > 5) {
     return item; //[6, 7]
   }
	 */
});
console.log('result .filter(): ', result); //[пустой массив]

// ====  array.find()  =====
result = numbers.find((el) => {
  console.log('el: ', el);
  if (el % 2 === 0) {
    return el; //1 вернет первое совпадение
  }
});
console.log('result .find(): ', result); // 2

// ====  reduce()  ====
result = numbers.reduce((memo, element) => {
  memo.push(element * 2);
  // 1 * 2
  // 2 * 2
  // 3 * 3
  // 4 * 2
  // 5 * 2
  // 6 * 2
  // 7 * 2
  return memo; //[2, 4, 6, 8, 10, 12, 14]
}, []);
console.log('result .reduce(): ', result); // [2, 4, 6, 8, 10, 12, 14]

// ====  array.some() ====
result = numbers.some((x) => {
  return x === 3;
});
console.log('result .some(): ', result); //result .some():  true потому что некототые  элементы массивы соответствует условиям

result = numbers.some((x) => {
  return x > 7;
});
console.log('result .some(): ', result); //result .some():  false потому что некоторые элементы не больше 7
// ====  array.every()  ====
result = numbers.every((x) => {
  return x === 3;
});
console.log('result .every(): ', result); //result .every():  false потому что не все Элементы соответсвует условиям

result = numbers.every((x) => {
  return x > 0;
});
console.log('result .every(): ', result); // result .every():  true потому что каждый элемент больше нуля

const numberValues = [2, 1, 13, 56, 724, 34, 76];
// ====  array.sort()  ====
result = numberValues.sort((min, max) => {
  return min - max; // от меньшего к большему
});
console.log('result .sort(): ', result); // [1, 2, 13, 34, 56, 76, 724]

const stringValues = [
  'Lewis Hamilton',
  'Sebastian Vettel',
  'Kimi Raikkonen',
  'Charles Leclerc',
];
result = stringValues.sort();
console.log('My lovely drivers ', result); // ['Charles Leclerc', 'Kimi Raikkonen', 'Lewis Hamilton', 'Sebastian Vettel'] сортирует по буквам в алфавитном порядке

const stringValues2 = [
  'Lewis Hamilton',
  'Sebastian Vettel',
  'Kimi Raikkonen',
  'Charles Leclerc',
];
result = stringValues2.sort().reverse(); // в обратном порядке
console.log('My lovely drivers ', result); // ['Sebastian Vettel', 'Lewis Hamilton', 'Kimi Raikkonen', 'Charles Leclerc']

// ====  array.flatMap()  ====
const user = {
  name: 'Salamon',
  age: 34,
};
const values = Object.entries(user);
console.log('values :', values);
result = values.flatMap((elem) => {
  console.log(elem); //  ['name', 'Salamon'] ['age', 34]
  return elem;
});
console.log('result .flatMap(): ', result); //['name', 'Salamon', 'age', 34]

// ====  array.findIndex()  ====
result = numbers.findIndex((elem) => {
  return elem === 0;
});
console.log('result .findIndex(): ', result); // -1

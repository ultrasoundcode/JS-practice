// ==to NUMBER==
//==любое строчное значение к ЧИСЛУ==
let value = "Bla Bla Bla";
// 1 способ
let toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber); // Bla Bla Bla, через конструктор Number(): NaN
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber
); //тип данных $(value), через конструктор Number(): number

// 2 способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber); //Bla Bla Bla, через унарный +: NaN
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber); //тип данных $(value), через унарный +: number
//Пример//
//1 способ
value = "JavaScript is Awesome";
toNumber = Number(value);
console.log(toNumber); // NaN
console.log(typeof toNumber); // number
//2 способ
toNumber = +value;
console.log(toNumber); // NaN
console.log(typeof toNumber); // number

//==строчное число к ЧИСЛУ==
value = "1987";
// 1 способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber); // 1987, через конструктор Number(): 1987
console.log(
  `тип данных ${value}, через конструктор Number():`,
  typeof toNumber
); //тип данных 1987, через конструктор Number(): number

// 2 способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber); // 1987, через унарный +: 1987
console.log(`тип данных ${value}, через унарный +:`, typeof toNumber); // тип данных 1987, через унарный +: number
// пример //
//1 способ
value = "1992";
toNumber = Number(value);
console.log(toNumber); // 1992

//2 способ
toNumber = +value;
console.log(typeof toNumber); // number

//==пустая строка к ЧИСЛУ==
value = "";
// 1 способ
toNumber = Number(value);
console.log(`пустая строка${value}, через конструктор Number():`, toNumber); // пустая строка, через конструктор Number(): 0
console.log(
  `тип данных пустой строки ${value}, через конструктор Number():`,
  typeof toNumber
); //тип данных пустой строки , через конструктор Number(): number

// 2 способ
toNumber = +value;
console.log(`пустая строка ${value}, через унарный +:`, toNumber); // пустая строка , через унарный +: 0
console.log(
  `тип данных пустой строки ${value}, через унарный +:`,
  typeof toNumber
); // тип данных пустой строки , через унарный +: number
// примеры//
value = "";
// 1 способ
toNumber = Number(value);
console.log(toNumber); // 0
console.log(typeof toNumber); // number

// 2 способ
toNumber = +value;
console.log(toNumber); //  0
console.log(typeof toNumber); //  number

//==строка с пробелом (не пустая строка) к ЧИСЛУ==
value = " ";
// 1 способ
toNumber = Number(value);
console.log(
  `строка с пробелом ${value}, через конструктор Number():`,
  toNumber
); // строка с пробелом  , через конструктор Number(): 0
console.log(
  `тип данных строки с пробелом ${value}, через конструктор Number():`,
  typeof toNumber
); //тип данных строки с пробелом  , через конструктор Number(): number

// 2 способ
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +:`, toNumber); // строка с пробелом  , через унарный +: 0
console.log(
  `тип данных строки с пробелом ${value}, через унарный +:`,
  typeof toNumber
); // тип данных строки с пробелом  , через унарный +: number
// пример//
value = " ";
// 1 способ
toNumber = Number(value);
console.log(toNumber); // 0
console.log(typeof toNumber); // number

// 2 способ
toNumber = +value;
console.log(toNumber); //  0
console.log(typeof toNumber); //number

// ==Boolean к Числу (true)==
value = true;
// 1 способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber); // true, через конструктор Number(): 1
console.log(
  `тип данных boolean ${value}, через конструктор Number():`,
  typeof toNumber
); //тип данных boolean true, через конструктор Number(): number

// 2 способ
toNumber = +value;
console.log(` ${value}, через унарный +:`, toNumber); // true, через унарный +: 1
console.log(`тип данных boolean ${value}, через унарный +:`, typeof toNumber); //тип данных boolean true, через унарный +: number
//ПРИМЕР//
value = true;
// 1 способ
toNumber = Number(value);
console.log(toNumber); // 1
console.log(typeof toNumber); // number

// 2 способ
toNumber = +value;
console.log(toNumber); //  1
console.log(typeof toNumber); // number

// ==Boolean к Числу (false)==
value = false;
// 1 способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber); // false, через конструктор Number(): 0
console.log(
  `тип данных boolean ${value}, через конструктор Number():`,
  typeof toNumber
); //тип данных boolean false, через конструктор Number(): number

// 2 способ
toNumber = +value;
console.log(` ${value}, через унарный +:`, toNumber); //  false, через унарный +: 0
console.log(`тип данных boolean ${value}, через унарный +:`, typeof toNumber); //тип данных boolean false, через унарный +: number
//ПРИМЕР//
value = false;
// 1 способ
toNumber = Number(value);
console.log(toNumber); // 0
console.log(typeof toNumber); // number

// 2 способ
toNumber = +value;
console.log(toNumber); //  0
console.log(typeof toNumber); // number

//==undefined к ЧИСЛУ==
value = undefined;
// 1 способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber); // undefined, через конструктор Number(): NaN
console.log(
  `тип данных boolean ${value}, через конструктор Number():`,
  typeof toNumber
); //тип данных boolean undefined, через конструктор Number(): number

// 2 способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber); //  undefined, через унарный +: NaN
console.log(`${value}, через унарный +:`, typeof toNumber); // undefined, через унарный +: number
// пример//
value = undefined;
// 1 способ
toNumber = Number(value);
console.log(toNumber); //NaN
console.log(typeof toNumber); // number

// 2 способ
toNumber = +value;
console.log(toNumber); //  //NaN
console.log(typeof toNumber); // number

//==null к ЧИСЛУ==
value = null;
// 1 способ
toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber); // null, через конструктор Number(): 0
console.log(
  `тип данных boolean ${value}, через конструктор Number():`,
  typeof toNumber
); //тип данных boolean null, через конструктор Number(): number

// 2 способ
toNumber = +value;
console.log(`${value}, через унарный +:`, toNumber); //  null, через унарный +: 0
console.log(`${value}, через унарный +:`, typeof toNumber); // null, через унарный +: number
// пример//
value = null;
// 1 способ
toNumber = Number(value);
console.log(toNumber); // 0
console.log(typeof toNumber); // number

// 2 способ
toNumber = +value;
console.log(toNumber); // 0
console.log(typeof toNumber); // number

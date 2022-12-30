// ==TO BOOLEAN==
//1==любое строчное значение к BOOLEAN==
let value = "JavaScript";
// 1 способ
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean); //JavaScript, через конструктор Boolean(): true
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных JavaScript, через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean); //JavaScript, через !!: true
console.log(`тип данных ${value}, через !!:`, typeof toBoolean); //тип данных JavaScript, через !!: boolean
//ПРИМЕР..
value = "JavaScript";
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

//2==любое строчное значение к BOOLEAN==
value = "123";
// 1 способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean); //123, через конструктор Boolean(): true
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных 123, через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean); // через !!: true
console.log(`тип данных ${value}, через !!:`, typeof toBoolean); //тип данных 123, через !!: boolean
//ПРИМЕР..
value = "2023";
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

//3==Пустая строка к BOOLEAN==
value = "";
// 1 способ
toBoolean = Boolean(value);
console.log(`пустая строка${value}, через конструктор Boolean():`, toBoolean); //пустая строка, через конструктор Boolean(): false
console.log(
  `тип данных пустой строки ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных пустой строки , через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`пустая строка${value}, через !!:`, toBoolean); // пустая строка, через !!: false
console.log(`тип данных пустой строки ${value}, через !!:`, typeof toBoolean); //тип данных пустой строки , через !!: boolean
//ПРИМЕР..
value = "";
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

//4 Не пустая строка (строка с пробелом) к BOOLEAN==
value = " ";
// 1 способ
toBoolean = Boolean(value);
console.log(
  `строка с пробелом ${value}, через конструктор Boolean():`,
  toBoolean
); //строка с пробелом  , через конструктор Boolean(): true
console.log(
  `тип данных строки с пробелом ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных строки с пробелом  , через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`строка с пробелом ${value}, через !!:`, toBoolean); // строка с пробелом  , через !!: true
console.log(
  `тип данных строки с пробелом ${value}, через !!:`,
  typeof toBoolean
); //тип данных строки с пробелом  , через !!: boolean
//ПРИМЕР..
value = " ";
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

//5 Число к BOOLEAN==
value = 0;
// 1 способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean); //0, через конструктор Boolean(): false
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных 0, через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean); // 0, через !!: false
console.log(`тип данных ${value}, через !!:`, typeof toBoolean); //тип данных 0, через !!: boolean
//ПРИМЕР..
value = 0;
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean
//ПРИМЕР 2
value = 1;
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

//6 undefined к BOOLEAN==
value = undefined;
// 1 способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean); //undefined, через конструктор Boolean(): false
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных undefined, через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean); // undefined, через !!: false
console.log(`тип данных ${value}, через !!:`, typeof toBoolean); //тип данных undefined, через !!: boolean
//ПРИМЕР //
value = undefined;
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

//7 null к BOOLEAN==
value = null;
// 1 способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean); //null, через конструктор Boolean(): false
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных null, через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean); // null, через !!: false
console.log(`тип данных ${value}, через !!:`, typeof toBoolean); //тип данных null, через !!: boolean
//ПРИМЕР //
value = null;
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

//8==NaN к BOOLEAN==
value = NaN;
// 1 способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean); //NaN, через конструктор Boolean(): false
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных NaN, через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean); // NaN, через !!: false
console.log(`тип данных ${value}, через !!:`, typeof toBoolean); //тип данных NaN, через !!: boolean
//ПРИМЕР //
value = NaN;
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //false
console.log(typeof toBoolean); //boolean

//9==infinity к BOOLEAN==
value = Infinity;
// 1 способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean():`, toBoolean); //Infinity, через конструктор Boolean(): true
console.log(
  `тип данных ${value}, через конструктор Boolean():`,
  typeof toBoolean
); //тип данных Infinity, через конструктор Boolean(): boolean

// 2 способ
toBoolean = !!value;
console.log(`${value}, через !!:`, toBoolean); // Infinity, через !!: true
console.log(`тип данных ${value}, через !!:`, typeof toBoolean); //тип данных Infinity, через !!: boolean
//ПРИМЕР //
value = Infinity;
// 1 способ
toBoolean = Boolean(value);
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

// 2 способ
toBoolean = !!value;
console.log(toBoolean); //true
console.log(typeof toBoolean); //boolean

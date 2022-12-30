// to STRING
//  ЧИСЛО К СТРОКЕ//
let value = 0;
// 1 способ
let toString = String(value);
console.log(`$(value), через конструктор String():`, toString); //$(value), через конструктор String(): 0
console.log(
  `тип данных $(value), через конструктор String():`,
  typeof toString
); //тип данных $(value), через конструктор String(): string

// 2 способ
toString = value + "";
console.log(`$(value), через конкатенацио:`, toString); //$(value), через конкатенацио: 0
console.log(`тип данных $(value), через конкатенацио:`, typeof toString); //тип данных $(value), через конкатенацио: string

//  П Р И М Е Р //
value = 2023;
// 1 способ
toString = String(value);
console.log(toString); //2023
console.log(typeof toString); // string

// 2 способ
toString = value + "";
console.log(toString); // 2023
console.log(typeof toString); // string

// значение бесконечности к СТРОКЕ//
value = Infinity;
// 1 способ
toString = String(value);
console.log(`$(value), через конструктор String():`, toString); //$(value), через конструктор String(): Infinity
console.log(
  `тип данных $(value), через конструктор String():`,
  typeof toString
); //тип данных $(value), через конструктор String(): string

// 2 способ
toString = value + "";
console.log(`$(value), через конкатенацио:`, toString); //$(value), через конкатенацио: Infinity
console.log(`тип данных $(value), через конкатенацио:`, typeof toString); //тип данных $(value), через конкатенацио: string
//  П Р И М Е Р //
value = Infinity;
// 1 способ
toString = String(value);
console.log(toString); // Infinity
console.log(typeof toString); // string

// 2 способ
toString = value + "";
console.log(toString); // Infinity
console.log(typeof toString); // string

// не число к СТРОКЕ//
value = NaN;
// 1 способ
toString = String(value);
console.log(`$(value), через конструктор String():`, toString); //$(value), через конструктор String(): NaN
console.log(
  `тип данных $(value), через конструктор String():`,
  typeof toString
); //тип данных $(value), через конструктор String(): string

// 2 способ
toString = value + "";
console.log(`$(value), через конкатенацио:`, toString); //$(value), через конкатенацио: NaN
console.log(`тип данных $(value), через конкатенацио:`, typeof toString); //тип данных $(value), через конкатенацио: string
//  П Р И М Е Р //
value = NaN;
// 1 способ
toString = String(value);
console.log(toString); // NaN
console.log(typeof toString); // string

// 2 способ
toString = value + "";
console.log(toString); // NaN
console.log(typeof toString); // string

//Булевое(логическое) true к СТРОКЕ//
value = true;
toString = String(value);
console.log(`$(value), через конструктор String():`, toString); //$(value), через конструктор String(): true
console.log(
  `тип данных $(value), через конструктор String():`,
  typeof toString
); //тип данных $(value), через конструктор String(): string

// 2 способ
toString = value + "";
console.log(`$(value), через конкатенацио:`, toString); //$(value), через конкатенацио: true
console.log(`тип данных $(value), через конкатенацио:`, typeof toString); //тип данных $(value), через конкатенацио: string
//  П Р И М Е Р //
value = true;
toString = String(value);
console.log(toString); // true
console.log(typeof toString); //  string

// 2 способ
toString = value + "";
console.log(toString); // true
console.log(typeof toString); // string

//Булевое(логическое) false к СТРОКЕ//
// 1 способ
value = false;
toString = String(value);
console.log(`$(value), через конструктор String():`, toString); //$(value), через конструктор String(): false
console.log(
  `тип данных $(value), через конструктор String():`,
  typeof toString
); //тип данных $(value), через конструктор String(): string

// 2 способ
toString = value + "";
console.log(`$(value), через конкатенацио:`, toString); //$(value), через конкатенацио: false
console.log(`тип данных $(value), через конкатенацио:`, typeof toString); //тип данных $(value), через конкатенацио: string
//  П Р И М Е Р //
// 1 способ
value = false;
toString = String(value);
console.log(toString); // false
console.log(typeof toString); // string

// 2 способ
toString = value + "";
console.log(toString); // false
console.log(typeof toString); // string

// undefined к СТРОКЕ//
// 1 способ
value = undefined;
toString = String(value);
console.log(`$(value), через конструктор String():`, toString); //$(value), через конструктор String(): undefined
console.log(
  `тип данных $(value), через конструктор String():`,
  typeof toString
); //тип данных $(value), через конструктор String(): string

// 2 способ
toString = value + "";
console.log(`$(value), через конкатенацио:`, toString); //$(value), через конкатенацио: undefined
console.log(`тип данных $(value), через конкатенацио:`, typeof toString); //тип данных $(value), через конкатенацио: string
//  П Р И М Е Р //
// 1 способ
value = undefined;
toString = String(value);
console.log(toString); // undefined
console.log(typeof toString); // string

// 2 способ
toString = value + "";
console.log(toString); // undefined
console.log(typeof toString); // string

// null к СТРОКЕ//
//1 способ
value = null;
toString = String(value);
console.log(`$(value), через конструктор String():`, toString); //$(value), через конструктор String(): null
console.log(
  `тип данных $(value), через конструктор String():`,
  typeof toString
); //тип данных $(value), через конструктор String(): string

// 2 способ
toString = value + "";
console.log(`$(value), через конкатенацио:`, toString); //$(value), через конкатенацио: null
console.log(`тип данных $(value), через конкатенацио:`, typeof toString); //тип данных $(value), через конкатенацио: string
//  П Р И М Е Р //
//1 способ
value = null;
toString = String(value);
console.log(toString); // null
console.log(typeof toString); // string

// 2 способ
toString = value + "";
console.log(toString); // null
console.log(typeof toString); // string

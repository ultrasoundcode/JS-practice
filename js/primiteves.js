console.log("primitives");

// 1 STRING строки
let stringData = "string Data";
console.log(stringData);
// typeof - оператор определения типа данных
console.log(typeof stringData); //string

stringData = "";
console.log(stringData);
console.log(typeof stringData); //string

stringData = " "; // поставил пробел
console.log(stringData);
console.log(typeof stringData); // все равно значение string

// 2 NUMBER числа
let number = 1;
console.log(number); // 1
console.log(typeof number); // значение number

number = 2e56;
console.log(number); //  2e+56
console.log(typeof number); // значение number

number = Infinity;
console.log(number); //  Infinity
console.log(typeof number); //значение number

number = NaN;
console.log(number); //  NaN
console.log(typeof number); //значение number

// 3 Boolean true || false логические
let isOnline = true;
console.log(isOnline); // true
console.log(typeof isOnline); //значение boolean

isOnline = false;
console.log(isOnline); // false
console.log(typeof isOnline); // значение boolean

// 4 undefined
let message;
console.log(message); // undefined
console.log(typeof message); //значение undefined

// 5 null
let user = null;
console.log(user); //null
console.log(typeof user); // значение object, спец допущенная ошибка javascript, притивный тип данных, говорить что он обьект но он не обьект он притив

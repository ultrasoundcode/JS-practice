// // variables
// var student = "Askhat"; // gthеменная var
// console.log(student); //Askhat

// let number = 35; // переменная let
// console.log(number); //35

// let age; // переменная let  можно обьявить без значения
// console.log(age); //undefined

// age = 35; //значение можно изменить позже
// console.log(age); //35
// age = 30;
// console.log(age); //30

// const userName = "Zhadyra"; //переменная const обьявляется сразу со значением
// console.log(userName); //Zhadyra
// let lastName = "Anarbayev";
// console.log(lastName);
// lastName = "Anlamassova";
// console.log("lastName: ", lastName); // lastName:  Anlamassova
//
//  ============${}interpolation ======================== //
// let firstName = 'Askhat';
// let lastName = 'Anarbayev';
// let sayHello = `Hello, ${firstName} `;
// console.log(sayHello); //Hello, Askhat
// sayHello = `Hello, ${firstName} ${lastName} `;
// console.log(sayHello);//Hello, Askhat Anarbayev
//  =========метед trim убирает пробелы перед первым словом и после последнего============
// let fullName = '     Askhat Anarbayev    ';
// console.log(fullName); //    Askhat Anarbayev
// console.log(fullName.length); // 25
// fullName = fullName.trim();
// console.log(fullName); //Askhat Anarbayev
// console.log(fullName.length); // 16
// // =====metod toLowerCase() and toUpperCase()
// fullName = fullName.toLowerCase();
// console.log(fullName);//askhat anarbayev
// fullName = fullName.toUpperCase();
// console.log(fullName); //ASKHAT ANARBAYEV
// =====number=========
let a = '3';
let b = '2';
let result = a + b;
console.log(result); // 32
console.log(typeof result); // string
a = Number(a);
b = Number(b);
result = a + b; // 5
console.log(result);
console.log(typeof result); // number
let c = '18.56djdjd';
let d = '20';
result = c + d;
console.log(result); // 18.56djdjd20
console.log(typeof result); // string
// parseInt  переобразовывает в число
c = parseInt(c);
d = parseInt(d);
result = c + d;
console.log(result); //38
console.log(typeof result); // number
// parseFloat  переобразовывает в число
c = parseFloat(c);
d = parseFloat(d);
result = c + d;
console.log(result);
//  NaN// isNaN-является ли не числом
console.log(isNaN('1')); //false
console.log(isNaN('Askhat')); //true
console.log(isNaN('5.5AMG')); //true
console.log(isNaN(null)); //false
console.log(isNaN(undefined)); //true
console.log(isNaN(false)); //false
console.log(isNaN(true)); //false

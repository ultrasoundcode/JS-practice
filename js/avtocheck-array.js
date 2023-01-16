//============ avtocheck array ============

//================ Задача 2/32 ================
/*Функция checkPassword получает пароль пользователя в параметр password,
проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

удали переменную message
удали else
код должен работать так же, как и до оптимизации
Объявлена функция checkPassword(password)
Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"
*/
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }
//================ Задача 3/32 ================
/*Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
 Она принимает два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

Объявлена функция checkStorage(available, ordered)
Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
Вызов checkStorage(70, 0) возвращает "Your order is empty!"
Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
Вызов checkStorage(150, 0) возвращает "Your order is empty!"
*/
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = 'Your order is empty!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   return message;
//   // Change code above this line
// }
// //===   решение =====
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }

//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';

//   return message;
// }
//================ Задача 13/32 ================
/*Термин slug - это человеко-понятный уникальный идентификатор,
 который используется в веб-разработке для создания читабельных URL-адресов.
Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx,
 можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.
Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title,
 и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире
Объявлена функция slugify(title)
Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
Вызов slugify("English for developer") возвращает "english-for-developer"
Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"

function slugify(title) {
   // Change code below this line
  // Change code above this line
 }
 */

// function slugify(title) {
//   let words = title.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].toLowerCase();
//   }
//   let slug = words.join('-');
//   return slug;
// }
/*Данная функция сначала разделяет строку title на массив слов, используя пробел в качестве разделителя с помощью split().
Затем циклом for перебирает массив слов, преобразует каждое слово в нижний регистр с помощью toLowerCase() и записывает результат обратно в массив.
Затем функция использует join() чтобы объединить элементы массива в строку, используя тире в качестве разделителя. И возвращает результат.
*/
//================ Задача 14/32 ================

/*Задача 14/32
Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
Объявлена переменная firstTwoEls
Значение переменной firstTwoEls это массив ["apple", "plum"]
Объявлена переменная nonExtremeEls
Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
Объявлена переменная lastThreeEls
Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = ;
const nonExtremeEls = ;
const lastThreeEls = ;
*/
//=решение=
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);
//================ Задача 15/32 ================

/*Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

Объявлена переменная oldClients
Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
Объявлена переменная newClients
Значение переменной newClients это массив ["Peach", "Houston"]
Объявлена переменная allClients
Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
Переменной allClients присвоен массив после применения метода concat с правильными аргументами

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = ; // Change this line
*/
//=решение=
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
//================ Задача 16/32 ================
/* Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength,
функция должна вернуть копию массива длиной maxLength элементов.
В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line



    // Change code above this line
  }
*/
//=решение=
// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (maxLength == 0) return [];
//   else if (newArray > maxLength) return newArray.slice(0, maxLength);
//   else {
//     return newArray;
//   }
// }
//================ Задача 20/32 ================
/*Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
 и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total,
  которая возвращается, как результат работы функции.

Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // Change code above this line
  return total;
}
*/
// function calculateTotalPrice(order) {
//   // Инициализируем переменную total для хранения суммы элементов
//   let total = 0;
//   // Проходимся по элементам массива order
//   for (let i = 0; i < order.length; i++) {
//     // Добавляем текущий элемент к общей сумме
//     total += order[i];
//   }
//   // Возвращаем общую сумму элементов
//   return total;
// }

//================ Задача 21/32 ================
/*Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string)
 и возвращает самое длинное слово в этой строке.

Объявлена функция findLongestWord(string)
Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
Вызов функции findLongestWord("Google do a roll") возвращает Google
Вызов функции findLongestWord("May the force be with you") возвращает force
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

function findLongestWord(string) {
  // Change code below this line



  // Change code above this line
}
*/

// function findLongestWord(string) {
//   // Разбиваем входную строку на слова с помощью пробелов
//   let words = string.split(' ');
//   // Инициализируем переменную для хранения длины текущего слова
//   let maxLength = 0;
//   // Инициализируем переменную для хранения самого длинного слова
//   let longestWord = '';
//   // Проходимся по массиву слов
//   for (let i = 0; i < words.length; i++) {
//     // Проверяем, длиннее ли текущее слово текущего максимума
//     if (words[i].length > maxLength) {
//       // Если да, обновляем максимум и записываем текущее слово как самое длинное
//       maxLength = words[i].length;
//       longestWord = words[i];
//     }
//   }
//   // Возвращаем самое длинное слово
//   return longestWord;
// }
//================ Задача 27/32 ================
/*Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

Объявлена функция filterArray(numbers, value)
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
//
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

*/
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
//================ Задача 29/32 ================
/*Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
 Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

Объявлена функция getEvenNumbers(start, end)
Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
Вызов функции getEvenNumbers(8, 8) возвращает [8]
Вызов функции getEvenNumbers(7, 7) возвращает []
Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

*/
// function getEvenNumbers(start, end) {
//   // Инициализируем массив для хранения четных чисел
//   const evenNumbers = [];
//   // Используем цикл for для перебора чисел от start до end
//   for (let i = start; i <= end; i++) {
//     // Если число делится на 2 без остатка, то добавляем его в массив
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   // Возвращаем массив с четными числами
//   return evenNumbers;
// }
//================ Задача 30/32 ================

/*Задача 30/32
Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

Объявлена переменная start со значением 6
Объявлена переменная end со значением 27
Объявлена переменная number без инициализации
Итоговое значение переменной number равно 10
В цикле for используется break для выхода до завершения всех итераций цикла

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
  }
}
*/

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break; // добавленная строка, для выхода из цикла после нахождения первого числа, которое делится на 5 без остатка
//   }
// }
//================ тестовая задача ================
/* Напиши скрипт поиска самого большого числа в массиве 
при условии что числа уникальные(не повторяются)
*/
// const numbers = [99, 3, 4, 6, 666, 7659, 8574,  99, 44];
// let biggestNumber = numbers[0];
// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log(biggestNumber);
//================ тестовая задача ================
/* Напиши скрипт поиска самого маленько числа числа в массиве 
при условии что числа уникальные(не повторяются)
*/
// const numbers = [99, 3, 4, 6, 666, 7659, 8574, 99, 44];
// let smallerNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallerNumber) {
//     smallerNumber = number;
//   }
// }
// console.log(smallerNumber);
//======================================================================

/*Несколько лайфхаков при работе с массивами
Как быстро очистить массив
*/
// const fruits = [
//   'banana',
//   'apple',
//   'orange',
//   'watermelon',
//   'apple',
//   'orange',
//   'grape',
//   'apple',
// ];
// fruits.length = 0;
// console.log(fruits); // вернет []
// Как объединить более двух массивов
// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // вернет ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
// Как получить рандомное значение массива
const fruits = [
  'banana',
  'apple',
  'orange',
  'watermelon',
  'apple',
  'orange',
  'grape',
  'apple',
];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit); // вернет рандомный фрукт из массива
// =======================================

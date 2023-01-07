//======================== Задача 1 ==============================//
/*Запроси у пользователя ввести его возраст в всплывающем окне браузера.
Проверь введенные пользователем данные: -- если это число от 0 до 18, не включая 18,
то выведи в ответ сообщение, что далее он не может пользоваться данным ресурсом,
-- если это число от 18 включительно и до 65, не включая его, то сообщите, что пользователь может пройти регистрацию,
-- если число от 65 и выше - предложить пользователю связаться с центром обслуживания,
-- если введено не число, вывести сообщение об ошибке.
*/
// let userInput = prompt('Enter your age');
// console.log(userInput, typeof userInput, isNaN(userInput));
// let chackedValue = parseInt(userInput); // для целлого числа
// // let chackedValue = parseFloat(userInput);// для дробного
// let cancelValue = isNaN(userInput);
// console.log(chackedValue);
// if (cancelValue) {
//   alert('Incorrect value! Plese enter number');
// } else if (chackedValue < 18) {
//   alert('You cannot to use it, sorry!');
// } else if (chackedValue > 18 && chackedValue < 65) {
//   alert('You can authorized');
// } else if (chackedValue > 65) {
//   alert('Please call to customer service');
// } else {
//   console.log('User clicked CANCEL');
// }
//======================== Задача 2 ==============================//
/*Сделай калькулятор.
Пусть пользователь вводит выражения типа "2+2" или "5-3" и так далее,
а при нажатии на Ok, выводи ему результат выражения:
-- если его возможно вычислить и сообщение об ошибке,
-- если выражение было введено не корректно.
*/
// let expression = prompt('Enter the expression');
// expression = ' 21  +  3   ';
// //                012
// console.log('EXPRESSION:', expression, typeof expression);
// // console.log(Number(expression));

// const isPlusExist = expression.includes('+');
// const isMinusExist = expression.includes('-');
// const isMultypleExist = expression.includes('*');
// const isDirExist = expression.includes('/');
// const isRestExist = expression.includes('%');
// const isPowExist = expression.includes('**');

// // if (!isPlusExist && !isMinusExist && !isMultypleExist && !isDirExist && !isRestExist && !isPowExist) {
// //     alert('Incorrect expression!')
// // }
// let result;
// if (isPlusExist) {
//   let idx = expression.indexOf('+');
//   // console.log('idx:', idx);
//   let firstNumber = Number(expression.slice(0, idx));
//   // console.log('firstNumber:', firstNumber, typeof firstNumber);
//   let lastNumber = Number(expression.slice(idx + 1));
//   // console.log('lastNumber:', lastNumber, typeof lastNumber);
//   result = firstNumber + lastNumber;
// } else if (isMinusExist) {
//   let idx = expression.indexOf('-');
//   // console.log('plusIdx:', idx);
//   let firstNumber = Number(expression.slice(0, idx));
//   // console.log('firstNumber:', firstNumber, typeof firstNumber);
//   let lastNumber = Number(expression.slice(idx + 1));
//   // console.log('lastNumber:', lastNumber, typeof lastNumber);
//   result = firstNumber - lastNumber;
// } else if (isMultypleExist) {
//   let idx = expression.indexOf('*');
//   // console.log('plusIdx:', idx);
//   let firstNumber = Number(expression.slice(0, idx));
//   // console.log('firstNumber:', firstNumber, typeof firstNumber);
//   let lastNumber = Number(expression.slice(idx + 1));
//   // console.log('lastNumber:', lastNumber, typeof lastNumber);
//   result = firstNumber * lastNumber;
// } else if (isDirExist) {
//   let idx = expression.indexOf('/');
//   // console.log('plusIdx:', idx);
//   let firstNumber = Number(expression.slice(0, idx));
//   // console.log('firstNumber:', firstNumber, typeof firstNumber);
//   let lastNumber = Number(expression.slice(idx + 1));
//   // console.log('lastNumber:', lastNumber, typeof lastNumber);
//   result = firstNumber / lastNumber;
// } else if (isRestExist) {
//   let idx = expression.indexOf('%');
//   // console.log('plusIdx:', idx);
//   let firstNumber = Number(expression.slice(0, idx));
//   // console.log('firstNumber:', firstNumber, typeof firstNumber);
//   let lastNumber = Number(expression.slice(idx + 1));
//   // console.log('lastNumber:', lastNumber, typeof lastNumber);
//   result = firstNumber % lastNumber;
// } else if (isPowExist) {
//   let idx = expression.indexOf('**');
//   // console.log('plusIdx:', idx);
//   let firstNumber = Number(expression.slice(0, idx));
//   console.log('firstNumber:', firstNumber, typeof firstNumber);
//   let lastNumber = Number(expression.slice(idx + 2));
//   console.log('lastNumber:', lastNumber, typeof lastNumber);
//   result = firstNumber ** lastNumber;
// } else {
//   alert('Incorrect expression!');
// }

// console.log('result:', result);
//===== 2 вариант ======
// function calculator() {
//   let num1 = prompt('Введите первое число:');
//   let num2 = prompt('Введите второе число:');
//   let operation = prompt('Введите операцию (+, -, *, /):');
//   let result;

//   num1 = parseFloat(num1);
//   num2 = parseFloat(num2);

//   if (operation === '+') {
//     result = num1 + num2;
//   } else if (operation === '-') {
//     result = num1 - num2;
//   } else if (operation === '*') {
//     result = num1 * num2;
//   } else if (operation === '/') {
//     result = num1 / num2;
//   } else {
//     alert('Неизвестная операция!');
//   }

//   alert(`Результат: ${result}`);
// }

// calculator();
//======================== Задача 3 ==============================//
/*Попроси пользователя ввести свое имя и фамилию
и выведи ему именное приветствие со значением имени и фамилии в регистре CamelCase
или со значением anonymous, если имя не было введено.
*/
// let name = prompt('Enter your name');
// let uName = '  John    Doe  '; // => false
// uName = uName.trim();

// let firstName, lastName;

// if (uName.includes(' ')) {
//   let idx = uName.indexOf(' ');
//   firstName = uName.slice(0, idx);
//   lastName = uName.slice(idx).trim();
// }

// if (!uName) {
//   uName = 'anonymous';
// }
// if (lastName) {
//   uName = firstName + ' ' + lastName;
// }

// let greeting = `Hello, ${uName}`;
// console.log(greeting);
//======================== Задача 4 ==============================//

/* Проверь полученную строку на наличие лишних пробелом перед началом,
внутри и в конце строки, верни исправленное значение.*/
// function fixString(input) {
//   return input.replace(/\s+/g, ' ').trim();
// }

// console.log(fixString('   Hello,    Motherfucker!   ')); // "Hello, Motherfucker!"
//======================== Задача 5 ==============================//
//Найди и замени все символы "+" в строках на символ пробела: hrevtsova+123@yahoo.com s.hrevtsova+2453+22@gmail.com
//Для того, чтобы найти и заменить все символы "+" в строке на символ пробела, ты можешь использовать функцию replace:
// let input1 = '0x.ultrasound+@gmail.com';
// let input2 = '0x.+ultrasound+@gmail.com';
// let output1 = input1.replace(/\+/g, ' ');
// let output2 = input2.replace(/\+/g, ' ');
// console.log(output1); //0x.ultrasound @gmail.com
// console.log(output2); //0x. ultrasound @gmail.com
/*Функция replace принимает два аргумента:
первый - это регулярное выражение, которое определяет, какие символы нужно заменить,
а второй - это строка, на которую нужно заменить найденные символы.В данном случае пустая строка
Символ + является специальным символом в регулярных выражениях,
поэтому я использую \+ в регулярном выражении, чтобы указать, что я хочу найти именно символ +,
а не указатель на один или более предыдущих символов.
Флаг g указывает, что нужно заменить все совпадения, а не только первом 
*/
//======================== Задача 6 ==============================//
/* Посчитай и выведи результат, сколько гласных букв в строке:
"Есть только две бесконечные вещи: Вселенная и глупость.
Хотя насчет Вселенной я не уверен."
"Теория — это когда все известно, но ничего не работает.
Практика — это когда все работает, но никто не знает почему.
Мы же объединяем теорию и практику: ничего не работает… и никто не знает почему!"
"Образование — это то, что остаётся после того, как забывается всё выученное в школе."
*/
//======================== Задача 7 ==============================//
/* Попроси пользователя ввести дату рождения в формате: дд.мм.гггг

Выведи ответ пользователю с информацией: был ли этот год високосным и через сколько лет наступит его год по Восточному календарюю.
Если пользователь указал дату в неверном формате, попроси его ввести ее снова, если он нажал cancel, то не запрашивай.
*/

function birthday() {
  let date;
  while (!date) {
    date = prompt('Введите дату рождения в формате ‘дд.мм.гггг’:');
    // Если пользователь нажал кнопку "Отмена", прекратить работу функции
    if (date === null) {
      return;
    }
  }
  // Разбить дату рождения на отдельные части: день, месяц и год
  let parts = date.split('.');
  // Преобразовать части в числа
  let day = parseInt(parts[0]);
  let month = parseInt(parts[1]);
  let year = parseInt(parts[2]);
  // Проверить, является ли год високосным
  if (year % 4 !== 0) {
    console.log('Год не високосный.');
  } else if (year % 100 !== 0) {
    console.log('Год високосный.');
  } else if (year % 400 !== 0) {
    console.log('Год не високосный.');
  } else {
    console.log('Год високосный.');
  }
  // Рассчитать сколько лет прошло с момента рождения
  let currentYear = new Date().getFullYear();
  let age = currentYear - year;
  // Рассчитать сколько високосных лет было за это время
  let leapYears = Math.floor(age / 4);
  let days = age * 365 + leapYears;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;
  console.log(`Год наступит через ${seconds} секунд.`);
}
birthday();

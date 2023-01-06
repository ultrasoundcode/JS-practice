/*Запроси у пользователя ввести его возраст в всплывающем окне браузера.
Проверь введенные пользователем данные: -- если это число от 0 до 18, не включая 18,
то выведи в ответ сообщение, что далее он не может пользоваться данным ресурсом,
-- если это число от 18 включительно и до 65, не включая его, то сообщите, что пользователь может пройти регистрацию,
-- если число от 65 и выше - предложить пользователю связаться с центром обслуживания,
-- если введено не число, вывести сообщение об ошибке.
*/
let userInput = prompt('Enter your age');
console.log(userInput, typeof userInput, isNaN(userInput));
let chackedValue = parseInt(userInput); // для целлого числа
// let chackedValue = parseFloat(userInput);// для дробного
let cancelValue = isNaN(userInput);
console.log(chackedValue);
if (cancelValue) {
  alert('Incorrect value! Plese enter number');
} else if (chackedValue < 18) {
  alert('You cannot to use it, sorry!');
} else if (chackedValue > 18 && chackedValue < 65) {
  alert('You can authorized');
} else if (chackedValue > 65) {
  alert('Please call to customer service');
} else {
  console.log('User clicked CANCEL');
}

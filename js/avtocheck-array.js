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
function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = 'Your order is empty!';
  } else if (ordered > available) {
    message = 'Your order is too large, not enough goods in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }

  return message;
  // Change code above this line
}
//===   решение =====
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  }

  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }

  return 'The order is accepted, our manager will contact you';

  return message;
}
//================ Задача 4/32 ================

# JS-practice

//== ARRAY ==//
Шпаргалка по методам массивов:
split/join -- преобразует строку в массив и обратно.
push () - добавляет элементы в конец,
pop() -- удаляет элемент с конца,
shift() -- удаляет элемент с начала,
unshift() -- добавляет элементы в начало.
splice(index, deleteIndex, ...arr) -- начиная с индекса index, удаляет deleteIndex элементов и вставляет arr. slice(start, end) -- создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
Функция должна делать только то, что явно подразумевается её названием. И это должно быть одним действием. Если кратко и понятно: Одна функция -- одно действие.
Шпаргалка по объявления функций в JS:
Функциональное выражение (function expression)
const greet = function (name) { return `Hello, ${name}`; };
Объявление функции (function declaration)
function greet(name) { return `Hello, ${name}!`; }
Для того чтобы что-то вернуть из функции/метода или из условия, можно использовать оператор return. Так же из функции можно возвращать сразу любой типа данных, например return 'hello' // (вернем строку) или return true // (вернем буль) или return [1, 2] // (вернем массив)
Паттерн ранний возврат, говорит о том, что если условие внутри нашего if вернет true, то нам сразу же нужно что-то вернуть из тела этого условия, с помощью return.
Не забывайте что оператор = это оператор присвоения, а не сравнения

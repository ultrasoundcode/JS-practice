//=================//ARRAY//==================//

// let arr = [3, 5, 6, 6.6, 'JavasCript'];
// console.log(arr); // индекс начинается с 0;(5) [3, 5, 6, 6.6, 'JavasCript'] индекс 0: 3,  индекс 1: 5, индекс 2: 6, индекс 3: 6.6, индекс 4: 'JavaScript'
//=========//
// переопределение значения определенного эдемента внутри массива

// let arr = [3, 5, 6, 6.6, 'JavasCript'];
// arr[3] = 'Cool'; // менияем значение индекса 3: 6.6
// console.log(arr); //(5) [3, 5, 6, 'Cool', 'JavasCript']
//=========//
// let arr = [3, 5, 6, 6.6, 'JavasCript'];
// arr[3] = 'Cool';
// console.log(arr[3]); // выводим в консоль конкретный элемент :  Cool

//=========//
// через метод length узнаем длину массива
// let arr = [3, 5, 6, 6.6, 'JavasCript'];
// console.log(arr.length); // 5 // то есть 5 элементов
//=========//
//========================// многомерные массивы // ===========================//
// let matrix = [
//   [4, 56, 5.5],
//   ['JavasCript', 'Pyton', 'Swift'],
//   [-100, -55],
// ];
// console.log(matrix);
// /* чтобы поменять 'Pyton' на другое значение
// обращаемся к переменно matrix [1][1] = 'program' первая цифра 1 индекс массива а второя индекс элемента */
// matrix[1][1] = 'program'; // теперь в консоле отображается 'JavasCript', 'program', 'Swift'. Ранее был  'JavasCript', 'Pyton', 'Swift'
//========================// Присвоение по ссылке и по значению // ===========================//
//======== метод push добавляет элемент в конец массива.========
const userName = ['Lewis'];
const userName2 = userName;
console.log(userName); //[ 'Lewis' ]
userName.push('Hamilton'); // метод push добавляет элемент в конец массива. Можно добавлять как одну как и несколько(через запятую). В данном примере тольку одну добавил
console.log(userName); //(2) ['Lewis', 'Hamilton']

//======== метод pop удаляет последний элемент========
const fullName = ['Anlamassova', 'Zhadyra', 'Toqtakhunovna'];
console.log(fullName); //(3) ['Anlamassova', 'Zhadyra', 'Toqtakhunovn
fullName.pop();
console.log(fullName); //(2) ['Anlamassova', 'Zhadyra']

//======== метод unshift добавляте элемент в начало массива ========
const anotherFullName = ['Lewis', 'Hamilton'];
console.log(anotherFullName); //(2) ['Lewis', 'Hamilton'];
anotherFullName.unshift('Carl-Davidson');
console.log(anotherFullName); //(3) ['Carl-Davidson', 'Lewis', 'Hamilton']

/*=================== метод concat создает новый массив,
в который копирует данные из других массивов и дополняет значение(в конец массива)
синтаксис array(argument1, argument2 ...) 
=====================*/
let arra1 = ['Almaty', 'Astana'];
console.log(arra1); //(2) ['Almaty', 'Astana']
let arra2 = arra1.concat('Taraz');
console.log(arra2); //(3)['Almaty', 'Astana', 'Taraz']
/*=================== метод slice coplftn новый массив,
в который копирует часть либо весь массив.
синтаксис array.slice([start], [end]) не включая [end] 
=====================*/
// копируем часть массива
let someValue = ['Maksat', 'Askhat', 'Gany'];
console.log(someValue); //(3) ['Maksat', 'Askhat', 'Gany']
// начиная с 1 индекса 'Askhat' до 2 индекса 'Gany'(но не включая)
let someValue2 = someValue.slice(1, 2);
console.log(someValue2); //['Askhat']

// копируем весть массив
let someValue3 = someValue.slice();
console.log(someValue3); //['Maksat', 'Askhat', 'Gany']
// ================== ПЕРЕОБРОЗОВАНИЕ МАССИВОВ ================
/*======== метод split переобразовывает строку в массив по задонному разделителю
сиснтаксис sting.split(delim)========*/

let stroka = 'Lewis, Carl-Davidson, Hamilton';
console.log(stroka, typeof stroka); // Lewis, Carl-Davidson, Hamilton тип = string
let stroka2 = stroka.split(',');
console.log(stroka2); //(3) ['Lewis', ' Carl-Davidson', ' Hamilton']
// можно ограничить количество элементов которые попадут в массив
let stroka3 = stroka.split(',', 2);
console.log(stroka3); // (2) ['Lewis', ' Carl-Davidson'] убрали второй элемент по индексу(' Hamilton')
/*======== метод join переобразовывает массив в строку с заданным разделителем
сиснтаксис array.join(glue)========*/
let someArray = ['Hamilton', 'Vettel', 'Alonso'];
console.log(someArray); //(3) ['Hamilton', 'Vettel', 'Alonso']
let someStroka = someArray.join(','); // можно исп другие символы кроме напимер ;
console.log(someStroka, typeof someStroka); //Hamilton,Vettel,Alonso тип = string

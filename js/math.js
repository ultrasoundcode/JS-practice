// Math
let result = Math.min(1, 2, 3, 3.5, 200); //выбирает минимальное значение, в данном случае минимальное значение 1
console.log(result); // 1

result = Math.max(3, 5, 6, 7.7, 500); // вибирает максимальное значение, в данном случает максимальное значение 500
console.log(result); // 500

result = 100 / 35;
console.log(result); //2.857142857142857
let count = Math.floor(result); //округляем через Math.floor в меньшую сторону
console.log(count); // 2

count = Math.ceil(result); //округляем через Math.floor в большую сторону
console.log(count); //3

let x = 2.51;
result = Math.round(x); // //округляем через Math.round до ближайшего
console.log(result); //3

result = 333 / 4.6;
console.log(result); // 72.3913043478261
let newValue = result.toFixed(2); // через toFixed(2) округляем до сотых
console.log(newValue); // 72.39
console.log(typeof newValue); //значение данных стала  string
newValue = Number(result.toFixed(2)); // Через Number переопределяем значение
console.log(typeof newValue); // number

// const div = document.querySelector('div');
// console.log(div);
// const div2 = document.querySelector('.root');
// console.log(div2);
// const div3 = document.querySelector('#root');
// console.log(div3);
// console.log(document.querySelector('img')); // null

// const divs = document.querySelectorAll('div');
// console.log(divs);
// divs.forEach((div) => console.log(div));
//=========
// const p = document.querySelector('p');
// console.log(p.parentNode);
// const list = document.querySelector('.list1');
// console.log(list.children);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// const items = list.querySelectorAll('li');
// console.log(items);
//===========
// const input = document.querySelector('input');
// console.log(input.name); // age
// input.value = 19; // добавление нового своиства
// console.log(input.value);
// //===========
// const paragraph = document.querySelector('.text');
// console.log(paragraph.textContent); //Lorem ipsum dolor sit amet.
// paragraph.textContent = 'Hello!'; //переопределение текствого своиства
//===========
// const paragraph = document.querySelector('.text');
// paragraph.classList.add('color'); // добавление класса color
// paragraph.classList.remove('color'); // удаление класса color
// console.log(paragraph.classList.contains('color')); //проверка на наличие класса color
//=========== inline styles
// const paragraph = document.querySelector('.text');
// paragraph.style.backgroundColor = 'violet';
// paragraph.style.color = '#ffffff';
// paragraph.style.fontSize = '50px';
//=========== добавление атрибута alt на тег img
// const image = document.querySelector('img');
// console.log(image.hasAttribute('alt')); // проверка на наличие атрибута alt
// console.log(image);
// // image.setAttribute('alt', 'photo'); 1 вариант
// image.alt = 'photo'; //  2 вариант короткий
//============ селектор дата атрибутов
const saveBtn = document.querySelector('[data-action="save"]');
const closeBtn = document.querySelector('[data-action="close"]');
console.log(saveBtn.dataset.action); // save
console.log(closeBtn.dataset.action); // close

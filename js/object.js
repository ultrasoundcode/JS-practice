// операция spread
//распыляем массив
const lastWeekTemps = [1, 2, 3];
const currentWeekTemp = [4, 5, 6];
const nextWeekTemp = [7, 8, 9];
const allWeekTemps = [...lastWeekTemps, ...currentWeekTemp, ...nextWeekTemp];
console.log(allWeekTemps); //[1, 2, 3, 4, 5, 6,7, 8, 9];

// распыляем обьект
const a = { x: 1, y: 45 };
const b = { x: 0, z: 50 };
const c = { ...a, ...b };
console.log(c);

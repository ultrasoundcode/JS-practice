console.log('Reques data...');

// const promMise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preraring data...');
//     const backEndData = {
//       server: 'localhost',
//       port: 3000,
//       status: 'ok',
//     };
//     resolve(backEndData);
//   }, 2000);
// });
// promMise
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//       }, 2000);
//     });
//   })
//   .then((clientData) => {
//     // console.log('data recived', clientData);
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then((data) => {
//     console.log('Modified Data :', data);
//   });
// ======

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
sleep(2000).then(() => console.log('after 2 sec'));
sleep(3000).then(() => console.log('after 3 sec'));

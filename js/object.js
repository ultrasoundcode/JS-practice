// операция spread
//================== распыляем массив ===============
const lastWeekTemps = [1, 2, 3];
const currentWeekTemp = [4, 5, 6];
const nextWeekTemp = [7, 8, 9];
const allWeekTemps = [...lastWeekTemps, ...currentWeekTemp, ...nextWeekTemp];
console.log(allWeekTemps); //[1, 2, 3, 4, 5, 6,7, 8, 9];
// ==================================================
// ================= распыляем обьект ===================

const a = { x: 1, y: 45 };
const b = { x: 0, z: 50 };
const c = { ...a, ...b };
console.log(c);
// второй пример
const defailtSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};
const userSettings = {
  theme: 'night',
  showNotifications: false,
  hideSidebar: true,
};
const finalSettings = {
  ...defailtSettings,
  ...userSettings,
};
console.log(finalSettings); //{ theme: 'night', showNotifications: false, hideSidebar: true }
// ============================================
// ======== Декструктизация обьекта ===========/*const {} = playlist;*/
const playlist = {
  nameOfPlaylist: 'My super playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3', 'track-5'],
  trackCount: 4,
};

const { nameOfPlaylist, rating, tracks, trackCount } = playlist;
console.log(nameOfPlaylist);
console.log(rating);
console.log(tracks);
console.log(trackCount);
//============ глубокая десктуризация =========
const profile = {
  nameOfUser: 'Lewis Hamilton',
  age: 39,
  titles: 7,
  location: 'Great Britain',
  statsOfInstagram: {
    followers: 35000000,
    likes: 8700000000000000,
    views: 9000498589928928289239749749,
  },
};

const {
  nameOfUser,
  age,
  titles,
  location,
  statsOfInstagram: { followers, likes, views },
} = profile;
console.log(nameOfUser, age, titles, location, followers, likes, views); //Lewis Hamilton 39 7 Great Britain 3500 87000 90004

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const dayofweek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(min);
console.log(sec);
console.log(dayofweek);

const date2 = new Date();
date2.setFullYear(2024);
// no method chaining
let user_name = window.prompt("enter your username");
user_name = user_name.trim();
let letter = user_name.charAt(0).toUpperCase();
let other_char = user_name.slice(1).toLowerCase();
user_name = letter + other_char;
console.log(user_name);
// with method chaining
user_name2 = user_name.trim().indexOf(0).toUpperCase() + user_name.trim().slice(1).toLowerCase();
console.log(user_name2);

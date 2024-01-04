let numbers = [1, 2, 3, 4, 5];
let max_number = Math.max(...numbers);/// ... (unpacking elements)
console.log(max_number);
let min_number = Math.min(...numbers);
console.log(min_number);
////////
let username = "rania abassi";
let letters =  [...username].join('-');
console.log(letters);
/////
let fruits = ["apple", "orange", "kiwi"];
let vegetables = ["carrots", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs"];
console.log(foods);
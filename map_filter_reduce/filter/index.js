// filter() creates a new array by filtering out elements
let numbers = [1, 2, 3, 4, 5];
let even_numbers = numbers.filter(iseven);
console.log(even_numbers);
function iseven(number){
    return  number % 2 === 0;
}
///
const ages = [12, 20, 40];
const adults = ages.filter(isadult);
console.log(adults);
function isadult(age){
    return age >= 18;
}

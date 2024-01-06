/// reduce() reduces the elemnts of an array to a single value
const prices = [5, 30, 10];
const total = prices.reduce(sum);
console.log(`$${total}`);
function sum (prev, next){
    return prev + next;
}
//// iterations of fucntion 
// 0 + 5
// 5 + 30
// 30 + 10
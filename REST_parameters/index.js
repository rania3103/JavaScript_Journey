//// spread = expands an array into seperate elements.
//// rest bundles seperate elements into an array.
function open_fridge(...foods){//to bundle into an array
    console.log(...foods);// to unpack
}
function get_food(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "pasta";
const food3 = "sushi";
open_fridge(food1, food2, food3);
////////////////////////////
function sum(...numbers){
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}
console.log(`your total is ${sum(1, 2, 8, 49, 68)}`);
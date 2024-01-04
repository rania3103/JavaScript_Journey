//forEach() is a method used to iterate over
// the elments of an array and apply a specified function
// (callback) to each element
let numbers = [1, 2, 3, 4];
numbers.forEach(square);
numbers.forEach(add_one);
numbers.forEach(display);

function add_one(element, index, array){
    array[index] = element + 1;
}
function square (element, index, array){
    array[index] = Math.pow(element, 2);
}

function display(element){
    console.log(element);
}
//////other example
let infos = ["rania", "abassi"];
infos.forEach(upper);
infos.forEach(low);
infos.forEach(cap);
infos.forEach(display);

function upper(element, index, array){
    array[index] = element.toUpperCase();
}

function low(element, index, array){
    array[index] = element.toLowerCase();
}

function cap(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

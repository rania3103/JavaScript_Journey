// map is similar to forEach but it returns a new array
const numbers = [1, 2, 3, 4, 5];

const res = numbers.map(square);
const res2 = numbers.map(Cube);
console.log(res);
console.log(res2);

function square(element){
    return Math.pow(element, 2);
}

function Cube(element){
    return Math.pow(element, 3);
}
/// another example
const dates = ["2024-1-31", "2024-1-20", "2024-1-19"];
const formatted_dates = dates.map(format_date);
console.log(formatted_dates);

function format_date(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
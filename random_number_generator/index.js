///for console
let random_numb = Math.random();
console.log(random_numb);
// random number between 0 and 5
random_numb = Math.floor(Math.random() * 6);
console.log(random_numb);
// increase the minum (1<=random_num<=5)
random_numb = Math.floor(Math.random() * 5) + 1;
console.log(random_numb);
// random number generator
const min = 50;
const max = 100;
random_numb = Math.floor(Math.random() * (max-min)) + min;
console.log(random_numb);
///////////////////
// for html page
const btn = document.getElementById("btn");
const label_cont = document.getElementById("label_cont");
const min_num = 1;
const max_num = 11;
let random_number;
btn.onclick= function(){
    random_number= Math.floor(Math.random() * (max-min)) + min;
    label_cont.textContent = random_number;
}
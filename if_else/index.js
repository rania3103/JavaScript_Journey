/////////console
let age = 20;

if (age >= 18){
    console.log("you are old enough to enter this site");
}
else if (age < 0){
    console.log("your age can't be below 0");
}
else {
    console.log("you must be 18+ to enter this site");
}
/////////////////////

let time = 9;

if (time < 12){
    console.log("good morning");
}
else{
    console.log("good afternoon");
}
////////////////

let is_student = false;

if (is_student){
    console.log("you are a student");
}
else{
    console.log("you are not a student");
}
//////////////////////////
/////project
const Age = document.getElementById("Age");
const user_name = document.getElementById("name");
const content = document.getElementById("content");
const btn = document.getElementById("btn");
btn.onclick=function(){
    content.textContent = `Hello ${user_name.value}, You are ${Age.value} years old`;
}
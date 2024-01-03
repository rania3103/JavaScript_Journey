let user_name = window.prompt("enter your name plz");
function happynewyear(user_name){
    console.log(`HAPPY NEW YEAR ${user_name} !`);
}
happynewyear(user_name);
////
function add (a, b){
    return a+b;
}
function sub (a, b){
    return a-b;
}
function multiply (a, b){
    return a*b;
}
console.log(add(4,5));
console.log(sub(-2,-3));
console.log(multiply(12,2));
///////////////////////
function iseven(x){
    return x%2 === 0 ?true:false;
}
console.log(iseven(5));
//////////////////////
function isvalid_email(email){
    email = email.trim();
    if (email.indexOf("@") != -1 && email.lastIndexOf(".") != -1){
        console.log("valid");
    }
    else{
        console.log("invalid");
    }
}
console.log(isvalid_email("hh@gmail.com"));
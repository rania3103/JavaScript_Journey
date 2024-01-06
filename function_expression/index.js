// is a way to define functions as values or variables
const hello = function(){
    console.log("hello");
}
hello();
//////
setTimeout(function(){console.log("hello world"), 5000});
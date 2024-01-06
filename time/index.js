///setTimeOut(callback, delay)
function hello(){
    window.alert("hello world");
}
setTimeout(hello, 4000);
setTimeout(function(){window.alert("hello rania")}, 5000);
// arrow function with clear
const time = setTimeout(()=>window.alert("welcome"), 5000);
clearTimeout(time);
//now we gonna deal with time
console.time("test");
for (let index = 0; index < 50; index++) {
    
}
console.timeEnd("test");

function func1(){
    let x = 1;
    console.log(x);
}
function func2(){
    let y = 2;
    console.log(x);
}
func1();
func2();
////we will get an error in func 2 cuz x is a local scope and not accessible
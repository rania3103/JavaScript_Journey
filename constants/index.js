const pi = 3.14159;
let radius;
let circumference;
//pi = 42; // we will get an error because when we use const we can't change value
radius = window.prompt("enter plz the radius of the circle");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log(circumference);
/////
document.getElementById("btn").onclick= function(){
    let rad = document.getElementById("rad").value;
    document.getElementById("res").value = Number(rad) * pi * 2;
    document.getElementById("h6").textContent = Number(rad) * pi * 2;
    document.getElementById("h6").style.color = "green";
}
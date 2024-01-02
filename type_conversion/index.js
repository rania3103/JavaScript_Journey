let age = window.prompt("how old are you?");// string
age = Number(age); //number
age += 1;
console.log(age);

let x = "rania";
let y = "rania";
let z = "rania";
//convert
x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

let a = "";
let b = 1;
let c = false;
let d = 0;
a = Boolean(a);
b = Boolean(b);
c = Number(c);
d = String(d);
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
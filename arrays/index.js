let infos = ["rania", "abassi"];
console.log(infos[0]);
infos.push(20);// add element at the end
infos.unshift("tatou");// add element at the beginning
infos.pop(); // remove an element at the end
infos.shift(); // remove the first element
console.log(infos);
console.log(infos.length);//number of elemnts
console.log(infos.indexOf("rania"));
console.log(infos.indexOf("rania3103"));//return -1 when element is not found
/////
for (let index = 0; index < infos.length; index++) {
    console.log (infos[index]);
}
console.log("-------------------");
for (let index = infos.length - 1; index >=0 ; index--) {
    console.log (infos[index]);  
}
console.log("-------------------");
//enhanced for loop
for (let info of infos) {
    console.log(info);
}
console.log(infos.sort().reverse())
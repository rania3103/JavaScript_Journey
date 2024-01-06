//arrow functions is a way to write function expressions  (parameter)=> {code}
const hello = (Name, age) =>{
    console.log(`hello ${Name}, you are ${age} years old.`);
}
hello("Rania", 20);
///// 
setTimeout(() =>console.log(`hello world.`), 3000);

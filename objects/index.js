// object is a collection of related properties and/or methods
// can represent real world objects(people, state, places, city)
//object = {key, value}
const person = {
    firstname :"rania",
    lastname: "abassi",
    age:20,
    isstudent: true,
    sayhello: function(){console.log("hi my name is rania")},
    eat: () => console.log("i'm eating pizza"),
}
console.log(person.sayhello());
console.log(person.age);
console.log(person.eat());
/////////////////this(refernce to the object) and it doesn't work with arrow function
const person1 = {
    name:"rania",
    age:20,
    sayhello: function(){console.log(`hello my name is ${this.name}, i'm ${this.age} years old`)}
}
person1.sayhello();
console.log(this);// will return window object
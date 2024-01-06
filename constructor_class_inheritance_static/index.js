// constructor special method for defining the properties and methods of an object
// this it's like self in python if you are familiar with python
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`you drive the ${color} ${model}`)}
}
const car1 = new Car("ford", "mustang", 2024, "red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
///////////////////classes////////////////////////////
// class ES6 feature to work with objects
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayproduct(){
        console.log(`product: ${this.name} | Price: ${this.price}`);
    }
    calculate_tax(tax){
        return this.price * tax;
    }
}
const product1 = new Product("skirt", 20);
product1.displayproduct();
console.log(`Tax: ${product1.calculate_tax(0.03)}`);
///////////////////static//////////////////////////////
/// static is a keyword that defines properties or methods that
// belongs to a class itself rather than the objects created from that class
class math{
    static PI = 3014159;
    static getDiameter(radius){
        return radius * 2;
    }
    static area(radius){
        return this.PI * Math.pow(radius, 2);
    }
}
console.log(math.PI);
console.log(math.getDiameter(30));
console.log(math.area(10));
////////////////////
class User{
    static count = 0;
    constructor (name){
        this.name = name;
        User.count += 1;
    }
}
const user1 = new User("rania");
const user2 = new User("salma");
const user3 = new User("houssem");
console.log(User.count);
///////////inheritance/////////////////////
// allows a new class to inherit properties and or methods from another class
class Animal{
    alive = true;
    alive(){
        console.log(`${this.alive}`);
    }
    hello(){
        console.log(`hello ${this.name}`);
    }
}
class Cat extends Animal{
    name = "cat";
}
class Dog extends Animal{
    name = "dog";
}
const cat = new Cat();
const dog = new Dog();
cat.hello();
dog.hello();
// super to call (constructor/ properties/methods) of a parent
class Teacher{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Student extends Teacher{
    constructor(name, age, mark){
        super(name, age);
        this.mark = mark;
    }
    info(name, mark){
        console.log(`Name: ${this.name} | Mark: ${this.mark}`);
    }
}
const student1 = new Student("rania", 20, 18);
const student2 = new Student("salma", 20, 17);
student1.info();
student2.info();
//////////////getter and setter ////////////////
//getter makes a property readble
//getter makes a property writeable
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(value){
        if (value > 0){
            this.__width = value;
        }
    }
    set height(value){
        if (value > 0){
            this.__height = value;
        }
    }
    get widht(){
        return this.__width;
    }
    get height(){
        return this.__height;
    }
    get area(){
        return this.__width * this.__height
    }
}
const rec = new Rectangle(5, 7);
console.log(rec.widht);
console.log(rec.height);
console.log(rec.area);
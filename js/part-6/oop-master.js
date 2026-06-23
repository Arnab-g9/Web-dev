let car = {
    make: "Toyota",
    modal: "Camry",
    year: 2020,

    start: function(){
        return `${this.make} car got started in ${this.year}`
    }
}

console.log(car.start()); // cannot create much copies of it


function Person(name, age){
    this.name = name,
    this.age = age
}

let john = new Person("John Doe", 20);
console.log((john.name));  // can create as much as i can 


function Animal (type){
    this.type = type
}

Animal. prototype.speak = function(){ // using prototypeal chain.
    return `${this.type} makes a sound`;
}

Array.prototype.hitesh = function(){
    return `custom method ${this}`
}

let myArray= [1,2,3];
let myNewArray = [1, 2, 3, 4, 5];

console.log(myArray.hitesh());
console.log(myNewArray.hitesh());


class Vehicle{
    contructor(make, modal){
        this.make = make
        this.modal = modal
    }
    start(){
        return `${this.make} is car from ${this.make}`
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make}: This is an inheritance example`
    }
}


let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());


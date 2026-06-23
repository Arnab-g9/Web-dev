function Person(name, age){
     this.name = name,
     this.age = age
}

function Car(make, modal){
    this.make = make,
    this.modal = modal
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);


function Tea(type){
    this.type = type,
    this.describe = function (){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea('lemon tea');
console.log(lemonTea.describe());

let dudhTea = new Tea("dudh tea");
console.log(dudhTea.describe());


function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){ //chaining properties with prototypes in constructor function.
    return `${this.species} makes a sound`
}

let dog = new Animal("Dog");
console.log(dog.sound());

// check whether somebody creating the object using new or without the new so that i can probably i can throw them siome error
function Drink(name){

    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee");

console.log(tea)
// console.log(coffee);


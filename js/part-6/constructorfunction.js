// function Person(name, age){
//      this.name = name,
//      this.age = age
// }

// function Car(make, modal){
//     this.make = make,
//     this.modal = modal
// }

// let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

// let myNewCar = new Car("Tata", "Safari");
// console.log(myNewCar);


// function Tea(type){
//     this.type = type,
//     this.describe = function (){
//         return `this is a cup of ${this.type}`
//     }
// }

// let lemonTea = new Tea('lemon tea');
// console.log(lemonTea.describe());

// let dudhTea = new Tea("dudh tea");
// console.log(dudhTea.describe());


// function Animal(species){
//     this.species = species
// }

// Animal.prototype.sound = function(){ //chaining properties with prototypes in constructor function.
//     return `${this.species} makes a sound`
// }

// let dog = new Animal("Dog");
// console.log(dog.sound());

// // check whether somebody creating the object using new or without the new so that i can probably i can throw them siome error
// function Drink(name){

//     if(!new.target){
//         throw new Error("Drink must be called with new keyword");
//     }
//     this.name = name;
// }

// let tea = new Drink("tea");
// let coffee = Drink("coffee");

// console.log(tea)
// // console.log(coffee);


// Encapsulation -- simple concept of blocking direct access of data object
class BankAccount {
    #balance = 0;  

    deposite(amount){
        this.#balance += amount;
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount();
// console.log(account.balance);
console.log(account.getBalance())

// Abstarction -- hide the complex implementation details
class CoffeMachine{
    start(){
        // call Db
        // filter value
        return 'Starting the machine...'
    }
    brewCoffee(){
        // complex calculation
        return "Brewing coffee"
    }
    pressStartButton(){
        let message1 = this.start();
        let message2 = this.brewCoffee();
        return `${message1} + ${message2}`
    }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());


// polymorphism -- something that can take multiple forms
class Bird{
    fly(){
        return 'Flying...'
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguins can't fly`;
    }
}
let bird = new Bird();
let penguine = new Penguin();
console.log(bird.fly());
console.log(penguine.fly());


// static method
class Calculator{
    static add(a, b){
        return a+b;
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));

console.log(Calculator.add(2,3))


// Getters and Setters
class Employee {
    #salary;
  constructor(name, salary) {
    if(salary < 0){
        throw new Error("Salary ca not be -ve");
    }
    ((this.name = name), (this._salary = salary));
  }
  get salary() {
    return `you are nto allowed to see salary`
  }
  set salary(sal){
    if(sal < 0){
        console.error("Invalid salary");
    }else  this.#salary = sal
  }
}

let emp = new Employee('Alice', -50000);
console.log(emp.salary);
emp.salary = -50000;




let computer = {
    cpu: 12,
}

let lenovo = {
    screen: "HD",
    __proto__: computer // link up all the properties of computer to the lenovo object. this is also the old way to set prototype
}

let tomhardware = {}


let genericCar = {tyres: 4, galss: 4}


// new way of set prototype
let tesla = {
    driver: "AI"
}


Object.setPrototypeOf(tesla, genericCar) // set the prototype of tesla to genericCar

// console.log("tesla", tesla.tyres);
console.log('tesla', Object.getPrototypeOf(tesla));



console.log('computer', computer.__proto__);
console.log("lenovo", lenovo.__proto__);

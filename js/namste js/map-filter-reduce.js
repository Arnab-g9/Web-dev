const arr = [5,1,3,2,6];
// double lements of array - [10,2,6,4,12]
// tripple elements of the array [15,3,9,6,18]
// Binary representation of the array elements [101,1,11,10,110]

const doubleArr = arr.map((num, _idx)=>{ // this is an example of higher order function. map is a higher order function because it takes a callback function as an argument.
    return num*2;
})

const trippleArr = arr.map((num, _idx)=>{
    return num*3
})

const binaryArr = arr.map((num, _idx)=>{
    return num.toString(2) // gives the binary string the toString method.
})

console.log(doubleArr);
console.log(trippleArr);
console.log(binaryArr);


// filter method - filter method is used to filter the elements of an array based on a condition. It returns a new array with the elements that pass the condition.

const filteredArr = arr.filter((item)=>{
    return item%2==1;
})

console.log(filteredArr); // [5,1,3] - odd numbers

const objArr = [
  {
    name: "john",
    age: 30,
  },
  {
    name: "Malik",
    age: 30,
  },
  {
    name: "",
    age: 30,
  },
  {
    name: "",
    age: 30,
  },
];

const filterObjArr = objArr.filter((item)=>{
    return item.name
});

console.log(filterObjArr); // [{name: "john", age: 30}, {name: "Malik", age: 30}] - only objects with name property

// reduce method - reduce method is used to reduce the elements of an array to a single value. It takes a callback function as an argument and returns a single value.

const sum = arr.reduce((acc, curr)=>{
    return acc+curr
})

console.log(sum); // 17 - sum of all elements of the array

// find max using reduce method
const output = arr.reduce(function(acc, cur){
    if(cur > acc){
        acc = cur;
    }
    return acc;
}, 0)

console.log(output);

const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const output1 = users.reduce((acc, curr)=>{
   if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
   }else{
    acc[curr.age] = 1;
   }
   return acc;
}, {})

console.log(output1); // { '26': 2, '50': 1, '75': 1 } - count of users by age

const newArr = [1,2,3,4,5];
const newReducedValue = newArr.reduce((acc, cur)=>{
    return acc+cur;
}, 5);

console.log(newReducedValue); // 20 - sum of all elements of the array + initial value 5
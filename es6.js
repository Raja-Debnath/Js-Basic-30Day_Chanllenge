const Name = "raja"
const Gen = "M"
const Age = 18

// task 1,2
// console.log(`My name is ${Name}, im ${Age} year old `);


// Array destructuring tsk 3
const numbers = [10, 20, 30, 40, 50];

// const [firstNumber, secondNumber] = numbers;
const fst = numbers[3]

// console.log(fst); // Output: 10
// console.log(snd); // Output: 20

// task 4 
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };
  
const {title,author}=book
const year = book.year  
//   console.log(title); // Output: The Great Gatsby
//   console.log(author); // Output: F. Scott Fitzgerald
//   console.log(year);
  
// task 5 spread op

const ar =[1,2,3,4,5,6]
const ar1=[6,7]
const {a,b}=ar1

const newAR=[...ar,...ar1]
// console.log(newAR);



const arr =[1,2,3,4,5]
// task 6 rest op 
function sum(...params) {
  
  let  s = 0
  for (let e of params) {
    s+=e
  }
  return s 
}

// console.log(sum(arr));
// as above func returning arr in str , i calculated sum of arr
let n =arr.reduce((a,b)=>a+b,0)
// console.log(n);

// task 7 defaut parameter

function product(a,b=10) {
  return console.log(a*b);
}
// product(6)

// task 8 

const ob = {
  name:"Raja",
  age:18,
  drinkingAllowed(){
    if (isNaN(this.age)) {
      console.log("invalade age");
      
    }
    this.age>=18? console.log(`My name is ${this.name} and Im of Dringking age `):console.log("not allowed");
    
  }
}
// console.log(ob);
// ob.drinkingAllowed()

const name = "Raja"
const age = "12"

const person={
  [name]:"Rajesh",
  [age]:15
}
console.log(person);











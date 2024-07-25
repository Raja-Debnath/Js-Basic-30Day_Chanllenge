// task 1 

// function EvenOdd(a) {
//     return a%2==0 ? "even":"odd"
// }
// console.log(EvenOdd(21));

// task 2

// function square(a) {
//     return a*a
// }
// console.log(square(7));

// task 3 

// function maxNum(a,b) {
//     return a<b?b:a
    
// }
// console.log(maxNum(2,1));

// task 4

// function concat(a,b) {
//     return a+b
// }
// console.log(concat("raja ","debnath"))

// task 5 

// const add =(a,b)=> a+b
// console.log(add(5,8));

// task 6 

// const check = (a)=>{
//     return a.includes("$")?true : false
// }
// console.log(check("raja$aa"));


// task 7 

// function product(a,b=10) {
//     return a*b
// }

// console.log(product(5));

//  task 8 

// const name1 = "Raja"
// // const age = 21
// function greet(a,b=18) {
//     return `Hello ${a} and ${b}`
    
// }
// console.log(greet(name1,45));

// higher order func 

// task 9 
// repeat 



// function repeat(a,b) {
//     for (let i = 1; i <=b; i++) {
//         a()
//     }
// }
// function a() {
//     console.log("hello");
// }
// repeat(a,5)

// task 10 


function fn1() {
    return 80000* 83.7
}

function fn2() {
    return fn1() * 0.000015
}

function name1(fn1,fn2,a) {
   
    
   
    console.log(fn2);    

}
name1(fn1(),fn2(),)
// task 1 

// const input = process.argv
// const check =Math.floor(input[2])

// if (check==0){
//     console.log("zero");
// }else if (check<=0) {
//     console.log("negative");
    
// }else if (check>=0) {
//     console.log("positive");
// }


// or
// const input = process.argv
// const check=Math.floor(input[2])
// console.log(check) // if remove log throws error 

// (check==0) ? console.log("zero") : (check<=0) ? console.log("negative"): console.log("positive");

// task 2

// const input = process.argv
// const age = input[2]

// if(age>=21){
//     console.log("yes , can vote ");
// }else{
//     console.log("no , age is less than 21");
// }


// task 3

// let a =1
// let b= 30
// let c=2
// if (a>b) {
//     if (a>c) {
//         console.log(`${a} is greater`);
//     }else{console.log(`${c} is greater`);}
// }else if (b>a) {
//     if (b>c) {
//         console.log(`${b} is greater`);
//     }else{
//         console.log(`${c} is greater`);
//     }
// }


// task 4 switch case

// const week = 1

// switch (week) {
//     case 1:
//         console.log("mon");
//         break;
//     case 2:
//         console.log("tue");
//         break;
//     case 3:
//         console.log("wed");
//         break;
//     case 4:
//         console.log("thur");
//         break;
//     case 5:
//         console.log("fri");
//         break;
//     case 6:
//         console.log("sat");
//         break;
//     case 7:
//         console.log("sun");
//         break;

//     default:
//         console.log("out of scope");
// }

// task 5 

//
// let input2 =600
// switch (input2) {
//     case  900: // A grade (scores 900 and above)
//       console.log("A grade");
//       break;
//     case  800: // B grade (scores from 800 to 899)
//       console.log("B grade");
//       break;
//     case 700: // C grade (scores from 700 to 799)
//       console.log("C grade");
//       break;
//     case 600: // D grade (scores from 600 to 699)
//       console.log("D grade");
//       break;
//     default: // F grade (scores below 600)
//       console.log("F grade");
//       break;
//   }

// task6 ternary operator

// const value = 27
// value%2==0?console.log(`${value} is even`):console.log("value is odd");

// task 7 leap year , devisible by 4,100 & 400

// const year = 2000

// if (year%4==0) {
    
//      year%400==0&&year%100==0?console.log(`${year} is leap year`):console.log("not a leap year");
    
// }

// or

// if (year%4==0) {
//     if (year%400==0&&year%100==0) {
//         console.log("leap year");
//     }else{console.log('not a leap year');}
// }
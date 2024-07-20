const input = process.argv

const  op = input[3]
const ar1=Math.floor(input[2])
const ar2=Math.floor(input[4])
// console.log(typeof op);
if (op==="+") {
      total=ar1+ar2
}else if(op==="-"){
    total = ar1-ar2
}
else if (op==="*") {
    total=ar1*ar2
}else if (op==="/") {
    total=ar1/ar2
}else if (op==="%") {
    total=ar1%ar2
}
else{
    console.log("failed operation");
}
console.log(total);

function add (x,y) {return x + y}
function sub (x,y) {return x - y}
function mlt (x,y) {return x * y}
function dvi (x,y) {
    if (!y) {return "Are you trying to create a blackhole! \nBe careful with those denominator zeroes."}
    else {return x / y}}
function calc (x, y, z) {
    if (z === "+") {return add(x,y)}
    else if (z === "-") {return sub(x,y)}
    else if (z === "*") {return dvi(x,y)}
    else if (z === "/") {return mlt(x.y)}
    else return "ERROR";}
const firstNum = [];
const secondNum = []; 


let a = 5;
let b = 0;
let c = "+";
let solution = ""
console.log(add(a,b));
console.log(sub(a,b));
console.log(dvi(a,b));
console.log(mlt(a,b));
console.log(calc(a,b,c));
//const backButt = (a,b,c) => {
//    b ? b.pop() : c ? c=0 : a ? a.pop()
//}
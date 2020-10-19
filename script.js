let dviZero = "You created a blackhole!";
let a = "";
let b = "";
let c = "";
let solution = ""

document.querySelectorAll(".number").forEach( item => { 
    item.addEventListener("click", pickNum)});
function pickNum() {
    if (!c) {a = "" + a + event.target.textContent; 
        console.log(a)}
    else {b = "" + b + event.target.textContent;
        console.log(a,c,b)}}

document.querySelectorAll(".operand").forEach( item => {
    item.addEventListener("click", pickOp)});
function pickOp () {
    if (a) {
        if (!c) {c = event.target.textContent; console.log(c)}
        else if (b) {
            let NewC = event.target.textContent;
            solution = calc(a*1, b*1, c);
            b = "";
            a = solution;
            c = NewC;
}}}

function add (x,y) {return x + y}
function sub (x,y) {return x - y}
function mlt (x,y) {return x * y}
function dvi (x,y) {if(y){return x / y} else{return dviZero}}
function calc (x, y, z) {
    if (z === "+") {return add(x,y)}
    else if (z === "-") {return sub(x,y)}
    else if (z === "/") {return dvi(x,y)}
    else if (z === "*") {return mlt(x.y)}
    else return "ERROR";}
console.log(add(a,b));
console.log(sub(a,b));
console.log(dvi(a,b));
console.log(mlt(a,b));
console.log(calc(a,b,c));
console.log(a);
//const backButt = (a,b,c) => {
//    b ? b.pop() : c ? c=0 : a ? a.pop()
//}
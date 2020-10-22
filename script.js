let zeroMessage = "You created a blackhole!"; //Dividing by 0
let a = ""; //First Number
let b = ""; //Second Number
let c = ""; //Operand
let solution = ""
const display = document.querySelector("#display")

//Number buttons
document.querySelectorAll(".number").forEach( item => { 
    item.addEventListener("click", pickNum)});
function pickNum() {
    if (!c) {
        if (!a) {
            display.textContent = a = event.target.textContent} 
        else if (a.length < 13) {
            display.textContent = a += "" + event.target.textContent}}
    else {
        if (!b) {
            b = event.target.textContent; 
            display.textContent = `${a} ${c} ${b}`}
        else if (b.length < 13) {
            b += ("" + event.target.textContent);
            display.textContent = `${a} ${c} ${b}`}}}

//Zero Button
document.querySelector("#zero").addEventListener("click", pickZero)
function pickZero() {
    if (!c) {
        if (!a) {
            a = "0"; display.textContent = a}
        else if (a.length < 13) {
            a += "" + 0; 
            display.textContent = a;}}
    else {
        if (!b) {
            b = "0"; 
            display.textContent = `${a} ${c} ${b}`}
        else if (b.length < 13) {
            b += "" + 0; 
            display.textContent = `${a} ${c} ${b}`;}}}

//Operand Buttons
document.querySelectorAll(".operand").forEach( item => {
    item.addEventListener("click", pickOp)});
function setOp() {
    c = event.target.textContent; 
    display.textContent = a + c}
function pickOp () {
    if (a) {
        if (!c) {setOp()}
        else if (b) {
                let NewC = event.target.textContent;
                calc(a, b, c);
                display.textContent = solution + NewC;
                a = solution; b = ""; c = NewC;}
            else {setOp()}}}

//Adds decimal point
document.querySelector("#dot").addEventListener("click", addDot)
function addDot () {
    if (!a) {
        display.textContent = a = "0."}
    else if (a && !c && a.indexOf(".")<0) {
        display.textContent = a += "."} 
    else if (c && !b) {
        b = "0.";
        display.textContent = `${a} ${c} ${b}`}
    else if (b && b.indexOf(".")<0) {
        b += "."; 
        display.textContent = `${a} ${c} ${b}`;}}

/* Original Dot Funtion, it couldn't display the whole equation while changing the operators
   But it's a pretty nested ternary, so i wanted to keep it, for learning.
function addDot () {
    !a ? display.textContent = a = "0." :
    a && !c && a.indexOf(".")<0 ? display.textContent = a += "." : 
    c && !b ? display.textContent = b = "0." :
    b && b.indexOf(".")<0 ? display.textContent = b += "."; : 
    () => {return}}
*/

// Toggles positive and negative
document.querySelector("#negative").addEventListener("click", negate)
function negate () {
    if (!c) {
        if (a<0) {
            a = a.substring(1);
            display.textContent = a} 
        else if (a>0) {
            a = "-" + a; 
            display.textContent = a}}
    else if (b<0) {
        b = b.substring(1); 
        display.textContent = `${a} ${c} ${b}`}
        else if (b>0) {
            b = "-" + b; 
            display.textContent = `${a} ${c} ${b}`}}
        
//Backspace Button
document.querySelector("#back").addEventListener("click", back)
function back () {
    if (a && !c) {
        a = a.slice(0,-1); 
        display.textContent = a}
    else if (b) {
        b = b.slice(0,-1); 
        display.textContent = `${a} ${c} ${b}`}}

//Equals Button
document.querySelector("#equals").addEventListener("click", equals)
function equals () {
    if (b) {
        console.log(solution);
        solution = calc(a,b,c);
        display.textContent = solution;
        console.log(solution);
        cleanSlate();}}

//"C" Button, Clears all variables
document.querySelector("#clearAll").addEventListener("click", clearAll)
function clearAll() {
    cleanSlate(); 
    display.textContent = ""}
function cleanSlate() {a = ""; b = ""; c = ""}

//"CE" Button, Clears current number(Del key triggered below)
document.querySelector("#clearEntry").addEventListener("click", clearEntry)
function clearEntry() {
    if(!c) {
        display.textContent = a = ""} 
    else {
        b = ""; display.textContent = a + c}}

//Keboard Number Strokes
function keyedNum() { 
    if (!c) { 
        if (!a) {
            a = event.key; display.textContent = a}
        else if (a.length < 18) {
            a += ("" + event.key); 
            display.textContent = a}}
    else if (!b) {
            b = event.key; 
            display.textContent = `${a} ${c} ${b}`} 
        else if (b.length < 18) {
                b += ("" + event.key); 
                display.textContent =`${a} ${c} ${b}`}}

//Keyboard Operand Strokes
function keyedOp () {
    if (a) {
        if (!c) {
            c = event.key; 
            display.textContent = a + c}
        else if (b) {
            let NewC = event.key;
            calc(a, b, c);
            display.textContent = solution + NewC;
            a = solution; b = ""; c = NewC;}
            else {c = event.key; display.textContent = a + c}}}

//Keyboard functionality
window.document.addEventListener("keydown", (event) => {
    event.preventDefault();
    if (event.code === "KeyC") {clearAll()}
    else if (event.code === "Delete") {clearEntry()}
    else if (event.code === "Backspace") {back()}
    else if (event.code === "Equal" || event.key === "Enter") {equals()}
    else if (event.code === "Minus") {negate()}
    else if (event.key === ".") {addDot()}
    else if (event.key == 0) {pickZero()}
    else if (event.key > 0) {keyedNum()}
    else if (event.key === "/" || event.key === "*" || event.key === "+" || event.key === "-") {keyedOp()}})

//Does MATH!
function add (x,y) {return x + y}
function sub (x,y) {return x - y}
function mlt (x,y) {return x * y}
function dvi (x,y) {if(y){return x / y} else{return zeroMessage}}
function calc (x, y, z) {
    if (z === "+") {solution = add((x*1),(y*1))}
    else if (z === "-") {solution = sub((x*1),(y*1))}
    else if (z === "/") {solution = dvi((x*1),(y*1))}
    else if (z === "*") {solution = mlt((x*1),(y*1))}
    return solution}
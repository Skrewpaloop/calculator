let zeroMessage = "You created a blackhole!"; //Dividing by 0
let a = ""; //First Number
let b = ""; //Second Number
let c = ""; //Operand
let solution = ""
const display = document.querySelector("#display")



//Number button listener and function
document.querySelectorAll(".number").forEach( item => { 
    item.addEventListener("click", pickNum)});
function pickNum() {
    if (!c) {
        if (!a) {a = event.target.textContent; display.textContent = a} 
        else {a += ("" + event.target.textContent);display.textContent = a;}}
    else {if (!b) {b = event.target.textContent; display.textContent = b}
        else {b += ("" + event.target.textContent);display.textContent = b;}}}

//Zero Button
document.querySelector("#zero").addEventListener("click", pickZero)
function pickZero() {
    if (!c) {
        if (!a) {a = "0"; display.textContent = a}
        else {a += "" + 0; display.textContent = a;}}
    else {if (!b) {b = "0"; display.textContent = b}
        else {b += "" + 0; display.textContent = b;}}}

//Operand listener and function
document.querySelectorAll(".operand").forEach( item => {
    item.addEventListener("click", pickOp)});
function pickOp () {
    if (a) {
        if (!c) {c = event.target.textContent; display.textContent = a + c}
        else if (b) {
            let NewC = event.target.textContent;
            calc(a, b, c);
            display.textContent = solution + NewC;
            a = solution; b = ""; c = NewC;}
            else {c = event.target.textContent; display.textContent = a + c}}}

//Adds decimal point
document.querySelector("#dot").addEventListener("click", addDot)
function addDot () {
    !a ? display.textContent = a = "0." :
    a && !c && a.indexOf(".")<0 ? display.textContent = a += "." : 
    c && !b ? display.textContent = b = "0." :
    b && b.indexOf(".")<0 ? display.textContent = b += "." : 
    () => {return}}

// Toggles positive and negative
document.querySelector("#negative").addEventListener("click", negate)
function negate () {
    if (!c) {
        if (a<0) {a = a.substring(1);display.textContent = a} 
        else if (a>0) {a = "-" + a; display.textContent = a}}
    else if (b<0) {b = b.substring(1); display.textContent = b}
        else if (b>0) {b = "-" + b; display.textContent = b}}

//Backspace on current number
document.querySelector("#back").addEventListener("click", back)
function back () {
    if (a && !c) {a = a.slice(0,-1); display.textContent = a}
    else if (b) {b = b.slice(0,-1); display.textContent = b}}

//Launches input variable calculation and reset
document.querySelector("#equals").addEventListener("click", equals)
function equals () {if (b) {display.textContent = calc(a,b,c); cleanSlate()}}

//Resets input variables
document.querySelector("#clearAll").addEventListener("click", clearAll)
function clearAll () {cleanSlate(); display.textContent = ""}
function cleanSlate () {a = ""; b = ""; c = ""}

//Clears current number
document.querySelector("#clearEntry").addEventListener("click", clearEntry)
function clearEntry () {
    if(!c) {display.textContent = a = ""} 
    else {b = ""; display.textContent = a + c}}

//Keboard number function
function keyedNum() { 
    if (!c) { 
        if (!a) {a = event.key; display.textContent = a} 
        else {a += ("" + event.key); display.textContent = a}}
    else if (!b) {b = event.key; display.textContent = b} 
        else {b += ("" + event.key); display.textContent =b}}

//Keyboard Operand Function
function keyedOp () {
    if (a) {
        if (!c) {c = event.key; display.textContent = a + c}
        else if (b) {
            let NewC = event.key;
            calc(a, b, c);
            display.textContent = solution + NewC;
            a = solution; b = ""; c = NewC;}
            else {c = event.key; display.textContent = a + c}}}

//Keyboard functionality
window.document.addEventListener("keydown", (event) => { 
    if (event.code === "KeyC") {clearAll()}
    else if (event.code === "Delete") {clearEntry()}
    else if (event.code === "Backspace") {back()}
    else if (event.code === "Equal" || event.key === "Enter") {equals()}
    else if (event.code === "Minus") {negate()}
    else if (event.key === ".") {addDot()}
    else if (event.key == 0) {pickZero()}
    else if (event.key > 0) {keyedNum()}
    else if (event.key === "/" || event.key === "*" || event.key === "+" || event.key === "-") {
        event.preventDefault(); keyedOp()}
})

//Calculates output from inputs
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


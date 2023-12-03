/** JavaScript Conditionals in version ES6 and above Examples **/

/** if...else...else if...  Statement **/

let a = 10;
if (a > 10) {
    console.log("a is greater than 10");
} else if (a < 10) {
    console.log("a is less than 10");
} else {
    console.log("a is equal to 10");
}

/** switch...case... Statement **/

let b = 10;
switch (b) {
    case 10:
        console.log("b is equal to 10");
        break;
    case 20:
        console.log("b is equal to 20");
        break;
    default:
        console.log("b is not equal to 10 or 20");
        break;
}

/** Conditional ternary operator **/

let c = 10;
let d = c > 10 ? "c is greater than 10" : "c is less than or equal to 10";
console.log(d); // c is less than or equal to 10

/** Conditional Nullish Coalescing Operator **/

let e = null;
let f = e ?? "e is null or undefined";
console.log(f); // e is null or undefined


/** Continue Statement **/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

/** Break Statement **/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

/** Return Statement **/

function add(a, b) {
    return a + b;
}

let g = add(10, 20);
console.log(g); // 30

/** Throw Statement **/

function divide(a, b) {
    if (b === 0) {
        throw new Error("b cannot be zero");
    }
    return a / b;
}

let h = divide(10, 0);
console.log(h); // Uncaught Error: b cannot be zero

/** Try...Catch...Finally Statement **/

try {
    let i = divide(10, 0);
    console.log(i);
} catch (error) {
    console.log(error);
} finally {
    console.log("finally block");
}

/** Debugger Statement **/

let j = 10;
debugger;
j++;
console.log(j); // 11


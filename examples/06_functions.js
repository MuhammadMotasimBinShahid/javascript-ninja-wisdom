/** JavaScript Functions **/

/** Function Declaration **/
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30

/** Function Expression **/
let sum = function (a, b) {
    return a + b;
}

console.log(sum(10, 20)); // 30

/** Arrow Function **/

let addition = (a, b) => {
    return a + b;
}

console.log(addition(10, 20)); // 30

/** Function Constructor **/

let sumNumbers = new Function("a", "b", "return a + b");
console.log(sumNumbers(10, 20)); // 30

/** Immediately Invoked Function Expression (IIFE) **/

(function () {
    console.log("Hello World!");
}
)();

/** Function Scope **/
function sub(a, b) {
    let c = a - b;
    return c;
}

console.log(sub(10, 20)); // -10

/** Function Hoisting **/
console.log(multiply(10, 20)); // 200

function multiply(a, b) {
    return a * b;
}

/** Function Parameters **/
function divide(a, b) {
    return a / b;
}

console.log(divide(10, 20)); // 0.5

/** Function Arguments **/
function multiplyNumbers(a, b) {
    return a * b;
}

console.log(multiplyNumbers(10, 20)); // 200

/** Default Parameters **/
function multiplyNumbersHavingDefaultParameters(a, b = 10) {
    return a * b;
}

console.log(multiplyNumbersHavingDefaultParameters(10)); // 100

/** Rest Parameters **/
function multiplyNumbersHavingRestParameters(...numbers) {
    let product = 1;
    numbers.forEach(function (number) {
        product *= number;
    });
    return product;
}

console.log(multiplyNumbersHavingRestParameters(10, 20, 30)); // 6000

/** Function Call **/
function addNumbers(a, b) {
    return a + b;
}

let result = addNumbers.call(null, 10, 20);

console.log(result); // 30

/** Function Apply **/

function addNumbersUsingApply(a, b) {
    return a + b;
}

let result1 = addNumbers.apply(null, [10, 20]);

console.log(result1); // 30

/** Function Bind **/

function addNumbersUsingBind(a, b) {
    return a + b;
}

let result2 = addNumbers.bind(null, 10, 20);

console.log(result2()); // 30

/** Function Closure **/

function addNumbersUsingClosure(a) {
    return function (b) {
        return a + b;
    }
}

let result3 = addNumbersUsingClosure(10);

console.log(result3(20)); // 30

/** Function Currying **/

function addNumbersUsingCurrying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

let result4 = addNumbersUsingCurrying(10);

console.log(result4(20)(30)); // 60

/** Function Recursion **/

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
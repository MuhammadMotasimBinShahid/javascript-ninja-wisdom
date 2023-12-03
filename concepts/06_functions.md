# JavaScript Functions

Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

## Defining functions

### Function declarations

A function definition (also called a function declaration, or function statement) consists of the `function` keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, `{ }`.
- The following example defines a function that adds two numbers:

```javascript
function sum(a, b) {
  return a + b;
}
```

### Function expressions

While the function declaration above is syntactically a statement, functions can also be created by a function expression. Such a function can be anonymous; it does not have to have a name. For example, the function `sum` could have been defined as:

```javascript
const sum = function(a, b) {
  return a + b;
};
```

However, a name can be provided with a function expression and can be used inside the function to refer to itself, or in a debugger to identify the function in stack traces:

```javascript

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
```

## Calling functions

Defining a function does not execute it. Defining the function simply names the function and specifies what to do when the function is called. Calling the function actually performs the specified actions with the indicated parameters. For example, if you define the function `square`, you could call it as follows:

```javascript
square(5);
```

The preceding statement calls the function with an argument of 5. The function executes its statements and returns the value 25.

## Function scope

Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined. In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function and any other variable to which the parent function has access.

## Function hoisting

An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your function and then call it. Function expressions in JavaScript are not hoisted.

```javascript
hoisted(); // logs "foo"

function hoisted() {
  console.log("foo");
}
```

```javascript
notHoisted(); // TypeError: notHoisted is not a function

const notHoisted = function() {
   console.log("bar");
};
```

## Types of functions

### Named function

Named functions are defined using the `function` keyword followed by the name of the function.

```javascript

function name(param, param, ...param) {
   statements
}
```

### Anonymous function

Anonymous functions are defined using the `function` keyword followed by a set of parentheses and a set of curly braces.

```javascript

function name(param, param, ...param) {
   statements
}
```

### Immediately invoked function expressions (IIFE)

An immediately invoked function expression (IIFE) is a function that is called immediately after it is defined.

```javascript

(function() {
   statements
})();
```

### Arrow function

An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the `this` value (does not bind its own `this`, arguments, super, or new.target). Arrow functions are always anonymous.

```javascript

(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
singleParam => { statements }

// A function with no parameters requires parentheses:
() => { statements }

```

### Closure function

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```javascript

function init() {
  let name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // Mozilla
  }
  displayName();
}
init();
```

### Recursive function

A recursive function is a function that calls itself. Recursive functions are often used to solve mathematical problems, such as calculating the factorial of an integer, calculating the Fibonacci number sequence, or performing exponentiation. When a recursive function calls itself, the parameters of the call are stored on the call stack. This means that every time the function calls itself, a new set of parameters is stored on the stack.

```javascript

function factorial(n) {
  if ((n === 0) || (n === 1)) {
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
}

console.log(factorial(3)); // 6
```

### Currying function

Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

```javascript

function addBase(base) {
  return function(num) {
    return base + num;
  }
}

let addTen = addBase(10);
addTen(5); // 15
addTen(80); // 90

let addFive = addBase(5);
addFive(5); // 10

```

## Function parameters

### Default parameters

In JavaScript, parameters of functions default to `undefined`. However, in some situations it might be useful to set a different default value. This is where default parameters can help.

In the past, the general strategy for setting defaults was to test parameter values in the function body and assign a value if they are `undefined`. If in the following example, no value is provided for `b` in the call, its value would be `undefined` when evaluating `a * b` and the call to multiply would have returned `NaN`. However, this is caught with the second line in this example:

```javascript

function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

multiply(5); // 5
```

With default parameters in ES2015, checks in the function body are no longer necessary. Now, you can assign default values directly to parameters in the function head:

```javascript

function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

### Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array. In the example, we use the rest parameters to collect arguments from the second one to the end. We then multiply them by the first one. This example is using an arrow function, which is introduced in the next section.

```javascript

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Function properties

### Function.length

The `length` property indicates the number of parameters expected by the function.

```javascript

function func1() {}
function func2(a, b) {}
function func3(a, b, ...theArgs) {}

console.log(func1.length); // 0
console.log(func2.length); // 2
console.log(func3.length); // 2
```

### Function.prototype

Allows the addition of properties to a function.

```javascript

function myFunction() {
  return true;
}

myFunction.prototype.hello = () => {
  console.log('hello');
};

myFunction.hello(); // "hello"
```

## Function methods

### Function.prototype.apply()

The `apply()` method calls a function with a given `this` value, and `arguments` provided as an array (or an array-like object).

```javascript

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max); // expected output: 7
```

### Function.prototype.bind()

The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript

const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

### Function.prototype.call()

The `call()` method calls a function with a given `this` value and arguments provided individually.

```javascript

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);

// expected output: "cheese"
```

### Function.prototype.toString()

The `toString()` method returns a string representing the source code of the function.

```javascript

function sum(a, b) {
  return a + b;
}

console.log(sum.toString());

// expected output: "function sum(a, b) {
//                     return a + b;
//                  }"
```


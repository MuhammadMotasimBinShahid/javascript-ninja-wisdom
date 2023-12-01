# JavaScript Variables

Variables are fundamental in JavaScript as they allow you to store and manipulate data. Let's dive into the basics of working with variables.

## Declaration and Assignment

In JavaScript, you can declare a variable using the `var`, `let`, or `const` keyword:

```javascript
// Using var (avoid using var in modern JavaScript)
var name = "John";

// Using let (for variables that can be reassigned)
let age = 25;

// Using const (for variables that should not be reassigned)
const PI = 3.14;
```

## Naming Variables

When naming variables, you should follow these rules:

- Variable names can only contain letters, numbers, underscores, and dollar signs.
- Variable names cannot start with a number.
- Variable names cannot contain spaces.
- JavaScript is case-sensitive, so **myVariable** and **myvariable** are different.

## Reassigning Variables

Variables declared with `var` and `let` can be reassigned:

```javascript
// Using var
var name = "John";

// Reassigning the variable
name = "Jane";

// Using let
let age = 25;

// Reassigning the variable
age = 30;
```

Variables declared with `const` cannot be reassigned:

```javascript
// Using const
const PI = 3.14;

// This will throw an error
PI = 3.14159;
```

## Variable Scope

Variables declared with `var` are function-scoped, meaning they are accessible anywhere within the function they are declared in:

```javascript
// Using var
function myFunction() {
  var name = "John";
  console.log(name);
}

// This will print "John"
myFunction();

// This will throw an error
console.log(name);
```

Variables declared with `let` and `const` are block-scoped, meaning they are accessible only within the block they are declared in:

```javascript
// Using let
function myFunction() {
  let name = "John";
  console.log(name);
}

// This will print "John"
myFunction();

// This will throw an error
console.log(name);
```

## Hoisting

Variables declared with `var` are hoisted to the top of the function they are declared in:

```javascript
// Using var
function myFunction() {
  console.log(name);
  var name = "John";
}

// This will print "undefined"
myFunction();
```

Variables declared with `let` and `const` are not hoisted:

```javascript
// Using let
function myFunction() {
  console.log(name);
  let name = "John";
}

// This will throw an error
myFunction();
```

## Global Variables

Variables declared outside of a function are global variables, meaning they are accessible anywhere in your code:

```javascript
// Using var
var name = "John";

function myFunction() {
  console.log(name);
}

// This will print "John"
myFunction();
```

Global variables declared with `var` can be reassigned:

```javascript
// Using var
var name = "John";

function myFunction() {
  name = "Jane";
  console.log(name);
}

// This will print "Jane"
myFunction();

// This will print "Jane"
console.log(name);

// This will throw an error
var name = "John";
```

Global variables declared with `let` and `const` cannot be reassigned:

```javascript
// Using let
let name = "John";

function myFunction() {
  name = "Jane";
  console.log(name);
}

// This will print "Jane"
myFunction();

// This will throw an error
name = "John";

// Using const
const PI = 3.14;

function myFunction() {
  console.log(PI);
}

// This will print "3.14"
myFunction();

// This will throw an error
PI = 3.14159;

// This will throw an error
const PI = 3.14159;
```

## Shadowing

Variables declared with `var` can be shadowed, meaning they can be redeclared within a function:

```javascript
// Using var
var name = "John";

function myFunction() {
  var name = "Jane";
  console.log(name);
}

// This will print "Jane"
myFunction();

// This will print "John"
console.log(name);
```

Variables declared with `let` and `const` cannot be shadowed:

```javascript
// Using let

let name = "John";

function myFunction() {
  let name = "Jane";
  console.log(name);
}

// This will print "Jane"
myFunction();

// This will print "John"
console.log(name);

// Using const
const PI = 3.14;

function myFunction() {
  const PI = 3.14159;
  console.log(PI);
}

// This will print "3.14159"
myFunction();

// This will print "3.14"
console.log(PI);
```

## Summary

- **Variables**: Fundamental in JavaScript for storing and manipulating data.
- **Declaration**: Use `var`, `let`, or `const` to declare variables.
- **Naming Rules**: Follow specific rules for variable names, e.g., no spaces, no starting with a number.

- **Reassignment**:
    - `var` and `let` can be reassigned.
    - `const` cannot be reassigned.

- **Scope**:
    - `var` is function-scoped.
    - `let` and `const` are block-scoped.

- **Hoisting**:
    - `var` is hoisted to the top within a function.
    - `let` and `const` are not hoisted.

- **Global Variables**:
    - `var` can be reassigned globally.
    - `let` and `const` cannot be reassigned globally.

- **Shadowing**:
    - `var` allows variable shadowing.
    - `let` and `const` do not allow variable shadowing.

- **Best Practices**:
    - Use `const` unless reassignment is necessary.
    - Avoid using `var` in modern JavaScript.
    - Minimize the use of global variables, shadowing, and hoisting.

- **Recommendations**:
    - Use `let` for variables that may be reassigned.
    - Use `const` for variables that should not be reassigned.

- **Modern JavaScript Practices**:
    - Minimize use of `var`.
    - Limit global variables, shadowing, and hoisting.
    - Prefer `let` and `const` for improved code quality.
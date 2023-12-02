# JavaScript Operators

## Operators

Operators are used to perform operations on variables and values.

JavaScript has the following types of operators:

- Assignment operators
- Comparison operators
- Arithmetic operators
- Logical operators
- String operators
- Conditional (ternary) operator
- Comma operator
- Unary operators
- Relational operators
- Spread operator
- typeof operator
- Nullish coalescing operator
- Optional chaining operator
- Delete operator
- in operator
- instanceof operator
- Comma operator
- Bitwise operators


### Assignment operators

Assignment operators are used to assign values to JavaScript variables.

```javascript

// Assignment
let x = 10;

// Addition assignment
x += 5; // x = x + 5

// Subtraction assignment
x -= 5; // x = x - 5

// Multiplication assignment
x *= 5; // x = x * 5

// Division assignment
x /= 5; // x = x / 5

// Remainder assignment
x %= 5; // x = x % 5

// Exponentiation assignment
x **= 5; // x = x ** 5

```

### Comparison operators

Comparison operators are used in logical statements to determine equality or difference between variables or values.

```javascript

// Equal to
x == y

// Equal value and equal type
x === y

// Not equal
x != y

// Not equal value or not equal type
x !== y

// Greater than
x > y

// Less than
x < y

// Greater than or equal to
x >= y

// Less than or equal to
x <= y

// Ternary operator
condition ? expr1 : expr2

```

### Arithmetic operators

Arithmetic operators are used to perform arithmetic between variables and/or values.

```javascript
    
// Addition
x + y

// Subtraction
x - y

// Multiplication
x * y

// Division
x / y

// Remainder
x % y

// Exponentiation
x ** y

// Increment
++x

// Decrement
--x

```

### Logical operators

Logical operators are used to determine the logic between variables or values.

```javascript

// Logical AND
x && y

// Logical OR
x || y

// Logical NOT
!x

```

### String operators

String operators are used to concatenate strings.

```javascript

// Concatenation
'Hello ' + 'World!'

```

### Conditional (ternary) operator

The conditional operator assigns a value to a variable based on a condition.

```javascript

// Ternary operator
condition ? expr1 : expr2

```

### Comma operator

The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

```javascript

// Comma operator
var x = 1, y = 2, z = 3;

```

### Unary operators

A unary operation is an operation with only one operand.

```javascript

// Unary negation
-x

// Unary plus
+x

// Increment
++x

// Decrement
--x

// Logical NOT
!x

// Bitwise NOT
~x

// delete
delete x

```

### Relational operators

A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

```javascript

// in
prop in object

```

### Spread operator

The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

```javascript

// Spread operator
...iterableObj

```

### typeof operator

The typeof operator returns a string indicating the type of the unevaluated operand.

```javascript

// typeof operator
typeof x

```

### Nullish coalescing operator

The nullish coalescing operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

```javascript

// Nullish coalescing operator
x ?? y

```

### Optional chaining operator

The optional chaining operator enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.

```javascript

// Optional chaining operator
obj.val?.prop

```

### Delete operator

The delete operator removes a property from an object.

```javascript

// Delete operator

delete object.property

```

### in operator

The in operator determines whether an object has a given property.

```javascript

// in operator

prop in object

```

### instanceof operator

The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

```javascript

// instanceof operator

object instanceof constructor

```

### Comma operator

The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.

```javascript

// Comma operator

var x = 1, y = 2, z = 3;

```

### Bitwise operators

A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers.

```javascript

// Bitwise AND
x & y

// Bitwise OR
x | y

// Bitwise XOR
x ^ y

// Bitwise NOT
~x

// Left shift
x << y

// Sign-propagating right shift
x >> y

// Zero-fill right shift
x >>> y

```



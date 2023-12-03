# JavaScript Loops

Loops in JavaScript are used to execute the same block of code a specified number of times or while a specified condition is true.

In JavaScript, we have the following loop statements:

## For Loop

The `for` loop repeats a block of code a specified number of times.

Syntax:

```javascript

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

```

## For/In Loop

The `for/in` loop loops through the properties of an object.

Syntax:

```javascript

for (variable in object) {
  // code block to be executed
}

```

## For/Of Loop

The `for/of` loop loops through the values of an iterable object.

Syntax:

```javascript

for (variable of iterable) {
  // code block to be executed
}

```

## While Loop

The `while` loop loops through a block of code as long as a specified condition is true.

Syntax:

```javascript

while (condition) {
  // code block to be executed
}

```

## Do/While Loop

The `do/while` loop is a variant of the `while` loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.  

Syntax:

```javascript

do {
  // code block to be executed
}
while (condition);

```

## ForEach Loop

The `forEach` loop loops through the elements of an array.

Syntax:

```javascript

array.forEach(function(currentValue, index, arr) {
    // code block to be executed
}, thisValue)

```

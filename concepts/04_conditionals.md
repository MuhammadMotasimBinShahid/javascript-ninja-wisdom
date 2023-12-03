# JavaScript Conditionals


## Conditionals

Conditional statements are used to perform different actions based on different conditions.

In JavaScript we have the following conditional statements:

- Use `if` to specify a block of code to be executed, if a specified condition is true
- Use `else` to specify a block of code to be executed, if the same condition is false
- Use `else if` to specify a new condition to test, if the first condition is false
- Use `switch` to specify many alternative blocks of code to be executed
- Use the `default` keyword to specify the code block to be executed, if no case matches
- Use the `break` keyword to break out of a switch block
- Use the `?` operator to specify a block of code to be executed, if a specified condition is true
- Use the `??` operator to specify a block of code to be executed, if a specified condition is false
- Use the `?:` operator to specify a block of code to be executed, if a specified condition is true, and another block of code to be executed if that condition is false
- Use the `continue` keyword to break out of a loop or a switch block
- Use the `throw` keyword to throw an exception
- Use the `try` statement to mark a block of statements to try, and specify a response, should an exception be thrown
- Use the `catch` statement to specify a response, should an exception be thrown in the `try` block
- Use the `finally` statement to specify a response, should an exception be thrown in the `try` block or in the `catch` block
- Use the `debugger` statement to stop the execution of JavaScript, and call (or alert) a function
- Use the `return` statement to stop the execution of a function, and return a value from that function


## if else and else if

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is `true`.

Use the `else` statement to specify a block of code to be executed if the condition is `false`.

Use the `else if` statement to specify a new condition if the first condition is `false`.

Syntax:

```javascript

if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}

```

Example:

```javascript

var time = 20;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

```

## Switch

Use the `switch` statement to select one of many code blocks to be executed.

Syntax:

```javascript

switch(expression) {
  case x:
    // code block to be executed when result of expression matches x
    break;
  case y:
    // code block to be executed when result of expression matches y
    break;
  default:
    // code block to be executed if all cases are not matched
}

```

Example:

```javascript

var day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    default:
        day = "Unknown";
}

```

## ? and ??

Use the `?` operator to specify a block of code to be executed if a specified condition is `true`.

Use the `??` operator to specify a block of code to be executed if a specified condition is `false`.

Use the `?:` operator to specify a block of code to be executed if a specified condition is `true`, and another block of code to be executed if that condition is `false`.

Syntax:

```javascript

condition ? expr1 : expr2

value ?? DefaultValue

```

Example:

```javascript

let voteable = (age < 18) ? "Too young" : "Old enough";

let voteable = (age < 18) ?? "Too young";

```

## Continue

Use the `continue` statement to break out of a loop or a switch block.

Syntax:

```javascript

continue;

```

Example:

```javascript

for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

```

## Throw

Use the `throw` statement to throw (generate) an error.

Syntax:

```javascript

throw expression

```

Example:

```javascript

throw "Too big";    // throw a text

throw 500;          // throw a number

```

## Try and Catch

Use the `try` statement to mark a block of statements to try, and specify a response, should an exception be thrown.

Use the `catch` statement to specify a response, should an exception be thrown in the `try` block.

Use the `finally` statement to specify a response, should an exception be thrown in the `try` block or in the `catch` block.

Syntax:

```javascript

try {
  // block of statements to try
}
catch(err) {
  // block of statements to handle errors
}
finally {
  // block of statements to be executed regardless of the try / catch result
}

```

Example:

```javascript

try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
finally {
    document.getElementById("demo").style.color = "red";
}

```

## Debugger

Use the `debugger` statement to stop the execution of JavaScript, and call (or alert) a function.

Syntax:

```javascript

debugger;

```

Example:

```javascript

function myFunction() {
  debugger;
  document.getElementById("demo").innerHTML = "Hello Dolly!";
}

```

## Return

Use the `return` statement to stop the execution of a function, and return a value from that function.

Syntax:

```javascript

return value;

```

Example:

```javascript

function myFunction(a, b) {
  return a * b;
}

```


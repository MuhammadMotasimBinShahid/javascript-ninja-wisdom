# JavaScript Data Types

Data types are the classifications we give to the different kinds of data that we use in programming.

In JavaScript, there are seven fundamental data types where are categorized as either **primitive** or **non-primitive**:

## Primitive Data Types

Primitive data types are the most basic data types in JavaScript. They include:

- **Number**: Any number, including numbers with decimals: `4`, `8`, `1516`, `23.42`.

- **String**: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: `' ... '` or double quotes `" ... "`. Though we prefer single quotes. Some people like to think of string as a fancy word for text.

- **Boolean**: This data type only has two possible values— either `true` or `false` (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a "yes" or "no" question.

- **Null**: This data type represents the intentional absence of a value, and is represented by the keyword `null` (without quotes).

- **Undefined**: This data type is denoted by the keyword `undefined` (without quotes). It also represents the absence of a value though it has a different use than `null`.

- **Symbol**: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.


### Examples

```javascript

// number
const day = 3;

// string
const name = 'John';

// boolean

const isSunny = true;

// null
const empty = null;

// undefined
let time;

// symbol
const id = Symbol('id');

```

## Non-Primitive Data Types (Objects)

Non-primitive data types are called **objects** because they can contain multiple values.

Objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets `{...}` with an optional list of properties. A property is a “key: value” pair, where `key` is a string (also called a “property name”), and `value` can be anything.

```javascript

const person = {
  name: 'John',
  age: 30,
  isSunny: true,
  empty: null,
  time: undefined,
  id: Symbol('id')
};

```

### Arrays

Arrays are special kinds of objects. They have numbered indexes that are used to access its elements. In addition, arrays have many methods that allow us to mutate, iterate, and perform calculations on their elements.

```javascript

const numbers = [1, 2, 3, 4, 5];

```

### Functions

Functions are special kinds of objects. They have the special ability to be called (invoked) and perform actions.

```javascript

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello('John'); // Hello John

```

## Primitive vs. Non-Primitive Data Types

| Primitive Data Types | Non-Primitive Data Types |
| -------------------- | ------------------------ |
| Number               | Object                   |
| String               | Array                    |
| Boolean              | Function                 |
| Null                 |                          |
| Undefined            |                          |
| Symbol               |                          |


The main difference between primitive and non-primitive data types are:

- **Primitive data types** are immutable/non-modifiable. This means that once a primitive data type is created, it can not be modified.
```javascript
let name = 'John';
name[0] = 'S';
console.log(name); // John

let number = 10;
number = 20;

console.log(number); // 20

let isSunny = true;

isSunny = false;

console.log(isSunny); // false

let empty = null;

empty = 'John';

console.log(empty); // John

let time;

time = 10;

console.log(time); // 10

let id = Symbol('id');

id = 'John';

console.log(id); // John
```
- **Non-primitive data types** are mutable/modifiable. This means that non-primitive data types can be changed after creation.
```javascript
const person = {
  name: 'John',
  age: 30
};

person.name = 'Sara';
console.log(person); // { name: 'Sara', age: 30 }
```
- **Primitive data types** are stored in the **stack** means stored in memory.
```javascript
let name = 'John';
let number = 10;
let isSunny = true;
let empty = null;
let time;
let id = Symbol('id');
```
- **Non-primitive data types** are stored in the **heap** means reference to the memory.
```javascript
const person = {
  name: 'John',
  age: 30
};
```
- **Primitive data types** are passed by **value**.
```javascript
let name = 'John';

let newName = name;

newName = 'Sara';

console.log(name); // John
console.log(newName); // Sara
```

- **Non-primitive data types** are passed by **reference**.
```javascript
const person = {
  name: 'John',
  age: 30
};

const newPerson = person;

newPerson.name = 'Sara';

console.log(person); // { name: 'Sara', age: 30 }
console.log(newPerson); // { name: 'Sara', age: 30 }
```


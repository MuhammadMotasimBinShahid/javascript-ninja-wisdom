# JavaScript Objects

JavaScript objects are containers for named values called properties or methods.

## Object Definition

You define (and create) a JavaScript object with an object literal:

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};
```

Spaces and line breaks are not important. An object definition can span multiple lines:

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};
```

## Object Creation

There are different ways to create new objects:

- Create a single object, using an object literal.
- Create a single object, with the keyword `new`.
- Define an object constructor, and then create objects of the constructed type.
- Create an object using `Object.create()`.
- Create an object using a function constructor.
- Create an object using the `class` keyword.
- Create an object using `Object.defineProperty()`.
- Create an object using `Object.defineProperties()`.
- Create an object using `Object.assign()`.
- Create an object using `Object.setPrototypeOf()`.

## Object Properties

The name:values pairs in JavaScript objects are called properties:

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};
```

## Accessing Object Properties

You can access object properties in two ways:

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

person.firstName;

person['firstName'];
```

## Object Methods

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};
```

## Accessing Object Methods

You access an object method with the following syntax:

```javascript

objectName.methodName()
```

You will typically describe fullName() as a method of the person object, and fullName as a property.

The fullName property will execute (as a function) when it is invoked with ().

This example accesses the fullName() method of a person object:

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

person.fullName();
```

## Do Not Declare Strings, Numbers, and Booleans as Objects!

When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

```javascript

const x = new String();        // Declares x as a String object

const y = new Number();        // Declares y as a Number object

const z = new Boolean();       // Declares z as a Boolean object
```

Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

## The `this` Keyword

In a function definition, `this` refers to the "owner" of the function.

In the example above, `this` is the person object that "owns" the `fullName` function.

In other words, `this.firstName` means the `firstName` property of this object.

Read more about the `this` keyword at JS this Keyword.

## Accessing Object Properties with `this`

You can access an object method with the `this` keyword.

In the example above, `this` refers to the `person` object it belongs to.

It has the value of the `person` object.

## Object Accessors

You can define getters and setters on any predefined core object or user-defined object that supports the addition of new properties. The syntax for defining getters and setters uses the object literal syntax.

```javascript

const o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25
```

## Adding a Method to an Object

Adding a new method to an object is easy:

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

person.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};
```

## Adding Properties to a JavaScript Object

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

```

## Deleting Properties from a JavaScript Object

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

delete person.age;
```

## JavaScript Objects are Mutable

Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

```javascript

const x = person;  // This will not create a copy of person.
```

The object x is not a copy of person. It is person. Both x and person are the same object.

Any changes to x will also change person, because x and person are the same object.

```javascript

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue'
};

const x = person;

x.age = 10;           // This will change both x.age and person.age
```

## JavaScript `Object.assign()`

The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

```javascript

const target = { a: 1, b: 2 };

const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

console.log(returnedTarget);
```

## JavaScript `Object.defineProperty()`

The `Object.defineProperty()` method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

```javascript

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;

console.log(object1.property1);
```

## JavaScript `Object.defineProperties()`

The `Object.defineProperties()` method defines new or modifies existing properties directly on an object, returning the object.

```javascript

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);
```

## JavaScript `Object.entries()`

The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference is that a for...in loop enumerates properties in the prototype chain as well).

```javascript

const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
```

## JavaScript `Object.freeze()`

The `Object.freeze()` method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. `freeze()` returns the same object that was passed in.

```javascript

const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;

console.log(obj.prop);
```

## JavaScript `Object.fromEntries()`

The `Object.fromEntries()` method transforms a list of key-value pairs into an object.

```javascript

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
```

## JavaScript `Object.getOwnPropertyNames()`

The `Object.getOwnPropertyNames()` method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

```javascript

const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1));
```

## JavaScript `Object.getOwnPropertySymbols()`

The `Object.getOwnPropertySymbols()` method returns an array of all symbol properties found directly upon a given object.

```javascript

const object1 = {};

const a = Symbol('a');

object1[a] = 'localSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
```

## JavaScript `Object.getPrototypeOf()`

The `Object.getPrototypeOf()` method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

```javascript

const prototype1 = {};

const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
```

## JavaScript `Object.is()`

The `Object.is()` method determines whether two values are the same value.

```javascript

Object.is('foo', 'foo');     // true

Object.is(window, window);   // true

Object.is([], []);           // false
```

## JavaScript `Object.isExtensible()`

The `Object.isExtensible()` method determines if an object is extensible (whether it can have new properties added to it).

```javascript

const object1 = {};

console.log(Object.isExtensible(object1));
```

## JavaScript `Object.isFrozen()`

The `Object.isFrozen()` method determines if an object is frozen.

```javascript

const object1 = {
  property1: 42
};

Object.freeze(object1);

console.log(Object.isFrozen(object1));
```

## JavaScript `Object.isSealed()`

The `Object.isSealed()` method determines if an object is sealed.

```javascript

const object1 = {
  property1: 42
};

Object.seal(object1);

console.log(Object.isSealed(object1));
```

## JavaScript `Object.keys()`

The `Object.keys()` method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

```javascript

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
```

## JavaScript `Object.preventExtensions()`

The `Object.preventExtensions()` method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).

```javascript

const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
}

console.log(Object.isExtensible(object1));
```

## JavaScript `Object.prototype.hasOwnProperty()`

The `hasOwnProperty()` method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

```javascript

const object1 = {};

object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
```

## JavaScript `Object.prototype.isPrototypeOf()`

The `isPrototypeOf()` method checks if an object exists in another object's prototype chain.

```javascript

function object1() {}

function object2() {}

object1.prototype = Object.create(object2.prototype);

const object3 = new object1();

console.log(object1.prototype.isPrototypeOf(object3));
```

## JavaScript `Object.prototype.toLocaleString()`

The `toLocaleString()` method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.

```javascript

const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString('ar-EG'));
```

## JavaScript `Object.prototype.toString()`

The `toString()` method returns a string representing the object.

```javascript

const o = new Object();

o.toString();        // returns [object Object]
```

## JavaScript `Object.prototype.valueOf()`

The `valueOf()` method returns the primitive value of the specified object.

```javascript

const o = new Object();

o.valueOf();         // returns Object {}
```

## JavaScript `Object.seal()`

The `Object.seal()` method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

```javascript

const object1 = {
  property1: 42
};

Object.seal(object1);

object1.property1 = 33;

console.log(object1.property1);
```

## JavaScript `Object.setPrototypeOf()` 

The `Object.setPrototypeOf()` method sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or null.

```javascript

const prototype1 = {};

const object1 = Object.setPrototypeOf({}, prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
```

## JavaScript `Object.values()`

The `Object.values()` method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)

```javascript

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
```





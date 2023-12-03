/** JavaScripts Objects **/

/** Object Properties **/

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person.firstName); // John

/** Accessing Object Properties **/

console.log(person["firstName"]); // John
console.log(person["lastName"]); // Doe
console.log(person["age"]); // 50
console.log(person["eyeColor"]); // blue

console.log(person.firstName); // John
console.log(person.lastName); // Doe
console.log(person.age); // 50
console.log(person.eyeColor); // blue

/** Adding New Properties **/

person.city = "New York";
console.log(person.city); // New York

/** Deleting Properties **/

delete person.city;
console.log(person.city); // undefined


/** Object Methods **/

let firstPerson = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(firstPerson.fullName()); // John Doe

/** Object Literal **/

let secondPerson = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(secondPerson.firstName); // John
console.log(secondPerson.lastName); // Doe
console.log(secondPerson.age); // 50
console.log(secondPerson.eyeColor); // blue

/** Object Constructor **/

let person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

console.log(person1.firstName); // John


/** Object.create() **/

let person10 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let person11 = Object.create(person10);

console.log(person11.firstName); // John

/** Object Methods **/

let person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person2.fullName()); // John Doe

/** Adding Methods to an Object **/

person2.name = function () {
    return this.firstName + " " + this.lastName;
}

console.log(person2.name()); // John Doe

/** Object Accessors **/

let person3 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    },
    set lang(lang) {
        this.language = lang;
    }
};

console.log(person3.lang); // en
person3.lang = "fr";
console.log(person3.lang); // fr

/** Object Assign **/

let firstObject = {
    firstName: "John",
    lastName: "Doe"
};

let secondObject = {
    age: 50,
    eyeColor: "blue"
};

let thirdObject = Object.assign(firstObject, secondObject);

console.log(thirdObject.firstName); // John
console.log(thirdObject.lastName); // Doe
console.log(thirdObject.age); // 50
console.log(thirdObject.eyeColor); // blue

/** Object.defineProperty() **/

let person5 = {
    firstName: "John",
    lastName: "Doe",
    language: "en"
};

Object.defineProperty(person5, "language", {
    value: "en",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(person5.language); // en

/** Object.defineProperties() **/

let person6 = {
    firstName: "John",
    lastName: "Doe",
    language: "en"
};

Object.defineProperties(person6, {
    firstName: {
        value: "John",
        writable: true
    },
    lastName: {
        value: "Doe",
        writable: true
    },
    language: {
        value: "en",
        writable: true
    }
});

console.log(person6.firstName); // John


/** Object Prototypes **/

function Person4(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}

let person4 = new Person4("John", "Doe", 50, "blue");

console.log(person4.firstName); // John

/** Adding Properties to a Prototype **/

function Person7(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}

let person7 = new Person7("John", "Doe", 50, "blue");

Person7.prototype.city = "New York";

console.log(person7.city); // New York


/** Adding Methods to a Prototype **/

function Person8(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    this.name = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person8 = new Person8("John", "Doe", 50, "blue");

console.log(person8.name()); // John Doe

/** Object.keys() **/

let person9 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(Object.keys(person9)); // [ 'firstName', 'lastName', 'age', 'eyeColor' ]

/** Object.values() **/

let person12 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(Object.values(person12)); // [ 'John', 'Doe', 50, 'blue' ]

/** Object.entries() **/

let person13 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(Object.entries(person13)); // [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 50 ], [ 'eyeColor', 'blue' ] ]

/** Object.getOwnPropertyNames() **/

let person14 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(Object.getOwnPropertyNames(person14)); // [ 'firstName', 'lastName', 'age', 'eyeColor' ]

/** Object.getOwnPropertySymbols() **/

let person15 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let id = Symbol("id");

person15[id] = 140353;

console.log(Object.getOwnPropertySymbols(person15)); // [ Symbol(id) ]

/** Object.getPrototypeOf() **/

function Person16(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    this.name = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person16 = new Person16("John", "Doe", 50, "blue");

console.log(Object.getPrototypeOf(person16)); // Person16 {}

/** Object.setPrototypeOf() **/

let person17 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let person18 = {
    firstName: "Mary",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.setPrototypeOf(person17, person18);

console.log(person17.firstName); // Mary

/** Object.freeze() **/

let person19 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.freeze(person19);

person19.firstName = "Mary";

console.log(person19.firstName); // John

/** Object.seal() **/

let person20 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.seal(person20);

person20.firstName = "Mary";

console.log(person20.firstName); // Mary

/** Object.isFrozen() **/

let person21 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.freeze(person21);

console.log(Object.isFrozen(person21)); // true

/** Object.isSealed() **/

let person22 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.seal(person22);

console.log(Object.isSealed(person22)); // true

/** Object.prototype.hasOwnProperty() **/

let person23 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person23.hasOwnProperty("firstName")); // true

/** Object.prototype.isPrototypeOf() **/

function Person24(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    this.name = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person24 = new Person24("John", "Doe", 50, "blue");

console.log(Person24.prototype.isPrototypeOf(person24)); // true

/** Object.preventExtensions() **/

let person25 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.preventExtensions(person25);

person25.city = "New York";

console.log(person25.city); // undefined

/** Object.isExtensible() **/

let person26 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

Object.preventExtensions(person26);

console.log(Object.isExtensible(person26)); // false

/** Object.prototype.toString() **/

let person27 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person27.toString()); // [object Object]

/** Object.prototype.toLocaleString() **/

let person28 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person28.toLocaleString()); // [object Object]

/** Object.prototype.valueOf() **/

let person29 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person29.valueOf()); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }

/** Object Comparisons **/

let person30 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let person31 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person30 === person31); // false
console.log(JSON.stringify(person30) === JSON.stringify(person31)); // true

/** Object Destructuring **/

let person32 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let { firstName, lastName, age, eyeColor } = person32;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(age); // 50
console.log(eyeColor); // blue

/** Object Spread Operator **/

let person33 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let person34 = { ...person33 };

console.log(person34.firstName); // John
console.log(person34.lastName); // Doe
console.log(person34.age); // 50
console.log(person34.eyeColor); // blue





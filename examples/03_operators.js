/** JavaScript Operators **/

/** Arithmetic Operators **/

// +, -, *, /, %, ++, --

// Addition (+)
let a = 10;
let b = 20;
let c = a + b;

// Subtraction (-)
let d = 10;
let e = 20;
let f = e - d;

// Multiplication (*)
let g = 10;
let h = 20;
let i = g * h;

// Division (/)
let j = 10;
let k = 20;
let l = k / j;

// Modulus (%)
let m = 10;
let n = 20;
let o = n % m;

// Increment (++)
let p = 10;
p++;

// Decrement (--)
let q = 10;
q--;

console.log(c); // 30
console.log(f); // 10
console.log(i); // 200
console.log(l); // 2
console.log(o); // 0
console.log(p); // 11
console.log(q); // 9

/** Assignment Operators **/

// =, +=, -=, *=, /=, %=

// Assignment (=)
let r = 10;
let s = r;

// Addition Assignment (+=)
let t = 10;
t += 5;

// Subtraction Assignment (-=)
let u = 10;
u -= 5;

// Multiplication Assignment (*=)
let v = 10;
v *= 5;

// Division Assignment (/=)
let w = 10;
w /= 5;

// Modulus Assignment (%=)
let x = 10;
x %= 5;

console.log(r); // 10
console.log(s); // 10
console.log(t); // 15
console.log(u); // 5
console.log(v); // 50
console.log(w); // 2
console.log(x); // 0

/** Comparison Operators **/

// ==, ===, !=, !==, >, <, >=, <=

// Equal (==)
let y = 10;
let z = 20;
let aa = y == z;

// Strict Equal (===)
let bb = 10;
let cc = 20;
let dd = bb === cc;

// Not Equal (!=)
let bb = 10;
let cc = 20;
let dd = bb != cc;

// Greater Than (>)
let ee = 10;
let ff = 20;
let gg = ee > ff;

// Less Than (<)
let hh = 10;
let ii = 20;
let jj = hh < ii;

// Greater Than or Equal (>=)
let kk = 10;
let ll = 20;
let mm = kk >= ll;

// Less Than or Equal (<=)
let nn = 10;
let oo = 20;
let pp = nn <= oo;

console.log(aa); // false
console.log(dd); // false
console.log(ee); // false
console.log(gg); // false
console.log(jj); // true
console.log(kk); // false
console.log(mm); // false
console.log(nn); // true
console.log(pp); // true

/** Logical Operators **/

// &&, ||, !

// Logical AND (&&)
let qq = 10;
let rr = 20;
let ss = qq < rr && qq > rr;

// Logical OR (||)
let tt = 10;
let uu = 20;
let vv = tt < uu || tt > uu;

// Logical NOT (!)
let ww = 10;
let xx = 20;
let yy = ww != xx;

console.log(ss); // false
console.log(vv); // true
console.log(yy); // true

/** String Operators **/

// +, +=

// Concatenation (+)
let aaa = "Hello";
let bbb = "World";
let ccc = aaa + bbb;

// Concatenation Assignment (+=)
let ddd = "Hello";
ddd += "World";

console.log(ccc); // HelloWorld
console.log(ddd); // HelloWorld

/** Type Operators **/

// typeof, instanceof

// typeof
let eee = 10;

// instanceof
let fff = new Date();

console.log(typeof eee); // number
console.log(fff instanceof Date); // true

/** Ternary Operator **/

// ? :
let ggg = 10;
let hhh = 20;
let iii = ggg > hhh ? "Yes" : "No";

console.log(iii); // No

/** Comma Operator **/

// ,
let jjj = 10, kkk = 11, lll = 12;

console.log(jjj, kkk, lll); // 10 11 12

/** Unary Operator **/

// -, +, ++, --, !, ~

let mmm = 5;

console.log(-mmm); // -5
console.log(+mmm); // 5
console.log(++mmm); // 6
console.log(--mmm); // 5
console.log(!mmm); // false
console.log(~mmm); // -6

/** Relational Operator **/

// in
let obj = { prop: 'value' };

console.log('prop' in obj); // true

/** Spread Operator **/

//...obj

let iterableObj = [1, 2, 3];
let spreadArray = [...iterableObj];

console.log(spreadArray); // [1, 2, 3] shallow copy

/** Typeof Operator **/

//typeof
const string = "John";
const number = 10;
const obj = {
    name: "John",
    age: 35
}
const array = [1,2,3]

console.log(typeof string) // "string"
console.log(typeof number) // "number"
console.log(typeof obj) // "object"
console.log(typeof array) // "object"


/** Nullish Coalescing Operator **/

// ??
let nullValue = null;
let defaultValue = 'Default';
let resultNullish = nullValue ?? defaultValue;

console.log(resultNullish); // Default


/** Optional Chaining Operator **/

// ?.

const user = {
    name: 'John',
    address: {
        street: 'Main Street',
        city: 'New York'
    }
}

console.log(user.address?.street); // Main Street


/** Delete Operator **/

// delete

const user = {
    name: 'John',
    age: 35
}
delete user.age;

console.log(user); // { name: 'John' }


/** Instanceof Operator **/

// instanceof

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

const person = new Person('John');

console.log(person instanceof Person); // true


/** Bitwise Operators **/

// &, |, ^, ~, <<, >>, >>>

// Bitwise AND (&)
let firstNumber = 10;
let secondNumber = 20;

console.log(firstNumber & secondNumber); // 0

// Bitwise OR (|)
console.log(firstNumber | secondNumber); // 30

// Bitwise XOR (^)
console.log(firstNumber ^ secondNumber); // 30

// Bitwise NOT (~)
console.log(~firstNumber); // -11

// Left Shift (<<)
console.log(firstNumber << 2); // 40

// Sign-propagating Right Shift (>>)
console.log(firstNumber >> 2); // 2

// Zero-fill Right Shift (>>>)
console.log(firstNumber >>> 2); // 2







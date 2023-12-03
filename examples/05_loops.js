/** JavaScript Loops **/

/** for...loop **/

for (let i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}

/** while...loop **/

let i = 0;
while (i < 10) {
    console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    i++;
}

/** do...while...loop **/

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

/** for...in...loop **/

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key); // name, age, city
    console.log(person[key]); // John, 30, New York
}

/** for...of...loop **/

let numberArray = [10, 20, 30, 40, 50];

for (let number of numberArray) {
    console.log(number); // 10, 20, 30, 40, 50
}

/** forEach...loop **/

let stringArray = ["John", "Jane", "Jack", "Jill"];
stringArray.forEach(function (number) {
    console.log(number); // 10, 20, 30, 40, 50
});
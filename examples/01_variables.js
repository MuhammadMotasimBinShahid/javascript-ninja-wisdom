/** Using let and const instead of var (best practice in modern JavaScript) **/


let playerName = "John"; // Using let for variables that can be reassigned
const initialScore = 100; // Using const for variables that should not be reassigned

/** Reassigning Variables **/
// Using let
let age = 25;
// Reassigning the variable
age = 30;

/** Variables declared with const cannot be reassigned **/
// Using const
const PI = 3.14;

/** Variable Scope **/
// Using let
function printName() {
    let playerName = "Jane"; // Variable is block-scoped within the function
    console.log(playerName);
}
// This will print "Jane"
printName();
// This will not throw an error as the variable is not accessible outside the block
console.log(playerName);

/** Hoisting **/
// Using let
function printPlayerName() {
    // This will throw an error as let variables are not hoisted
    console.log(playerName);
    let playerName = "John";
}
// This will print "undefined"
printPlayerName();

/** Global Variables **/
// Using let for global variables (best practice)
let globalName = "John";

function printGlobalName() {
    console.log(globalName);
}
// This will print "John"
printGlobalName();

/** Global variables declared with let can be reassigned **/
// Using let
let globalScore = 200;

function updateScore() {
    globalScore = 250;
    console.log(globalScore);
}
// This will print "250"
updateScore();
// This will print "250"
console.log(globalScore);

/** Shadowing **/
// Using let
let teamName = "TeamA";

function printTeamName() {
    let teamName = "TeamB"; // Variable is shadowed within the function
    console.log(teamName);
}
// This will print "TeamB"
printTeamName();
// This will print "TeamA"
console.log(teamName);


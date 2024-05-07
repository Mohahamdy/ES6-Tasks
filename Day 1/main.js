// Swap two values using destructing ->
let a = 15;
let b = 10;

[a,b] = [b,a];

console.log(`a: ${a} | b: ${b}`);

//////////////////////////////////////////////////////////////////////
// max and min value of array ->
let arr = [15,10,3,8,20,30,15];

function minAndMaxValue(...reset){
    return [Math.min(...reset),Math.max(...reset)];
}

[minValue,maxValue] = minAndMaxValue(...arr);
console.log(`Min Value: ${minValue} | Max Value: ${maxValue}`);

/////////////////////////////////////////////////////////////////////////
//Array methods ->
var fruits = ["apple", "strawberry", "banana", "orange","mango"]

var allIsString = fruits.every((item) => typeof(item) == 'string')
console.log(allIsString);

var someStartWitha = fruits.some((item) => item.startsWith("a"));
console.log(someStartWitha);

var arrElementsSartWithAorB = fruits.filter((item) => item.startsWith('s') || item.startsWith('b'));
console.log(arr);

var arr1 = fruits.map((item) => `I like ${item}`)
console.log(arr1);

arr1.forEach((item) => console.log(item))
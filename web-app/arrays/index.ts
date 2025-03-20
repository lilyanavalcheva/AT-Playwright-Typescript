// Arrays 
let numbersArray: number[] = [1, 2, 3, 4];
let stringAndNumsArr: (number | string)[] = [1, "Pesho", "Gosho", 2, "3"];

let fruits: string[] = ["Apple", "Banana", "Pear", "Peach", "Grape"];
let firstEl: string = fruits[1];
let secondEl: string = fruits[3];

fruits.push("Mango");

numbersArray.pop();

fruits.shift();

numbersArray.unshift(5);

let multiplyNumbers: number[] = numbersArray.map((element: number) => element * 2);

let multipleSpecialNumbers = numbersArray.map((element: number) => {
    if (element > 2) {
    return element * 2;
 } else {
    return element;
 }
});

let filterNumsArray = numbersArray.filter(element => element > 2);

console.log("filterNumsArray", filterNumsArray)

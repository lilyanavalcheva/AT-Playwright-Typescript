// 1. Create an array of strings and add a new element at the end of the array. Log the result.

let newString: string [] = ["January", "February", "March", "April", "May"]
newString.push("June");
console.log("Exercise 1:", newString);

// 2. Create an array of numbers and remove the first element from the array. Log the result.

let newNums: number[] = [10, 11, 12, 13, 14, 15];
newNums.shift();
console.log("Exercise 2:", newNums);

// 3. Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.

let newArray: number[] = [1, 2, 3, 4, 5];
let devideNums: number [] = newArray.map((element: number) => element / 2);
console.log("Exercise 3:", devideNums);

// 4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.

let filterArray: number [] = [3, 7, 1, 9, 12, 4];
let newfilterArray: number [] = filterArray.filter((number) => number > 5);
console.log("Exercise 4:", newfilterArray);

// 5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.

let sortArray: number [] = [9, 3, 7, 2, 8, 5];
let newSortArray: number [] = sortArray.sort();
console.log("Exercise 5:", newSortArray);

// 6. Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.

let extractArray: string [] = ["apple", "banana", "cherry", "date", "elderberry"];
let newExtractArray: string [] = extractArray.slice(3);
console.log("Exercise 6:", newExtractArray);


// 7. Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.

let newElements: string [] = ["car", "bike", "bus", "train", "boat"];
let removeElements: string [] = newElements.splice(1, 2);
console.log("Exercise 7:", newElements);

// 8. Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.

function findLargest(firstNum: number, secondNum: number, thirdNum: number): number {
    if (firstNum > secondNum && firstNum > thirdNum) {
        return firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        return secondNum;
    } else {
        return thirdNum;
    }
}

let largestNum: number = findLargest(701, 88, 34);
console.log("Exercise 8:", largestNum);

// 9. Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.

function convertToCentimeters(inches: number = 8.7): number {
    return inches * 2.54;
}
console.log("Exercise 9:", convertToCentimeters());

// 10. Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.

function calculateArea(newWidth: number, newHeight?: number): string {
    if (newHeight) {
        return `${newWidth} and ${newHeight} are required parameters.`
    }
    return `The shape is a square.`;
}
console.log("Exercise 10:", calculateArea(10.2));



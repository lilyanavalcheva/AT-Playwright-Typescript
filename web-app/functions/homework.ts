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



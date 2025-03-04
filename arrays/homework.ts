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
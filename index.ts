// let vs const
let number: number = 5;
number = 10;

const message: string = "Welcome"

// String 
let welcomeMessage: string = "Hello, Peter!"
let test: string = "Ivan";

let welcomeMessageLenght: number = welcomeMessage.length;

// String interpolation
let welcomeMessageDetails: string = `My welcome message length is ${welcomeMessageLenght}`;
let userWelcomeMessage: string = `Welcome, ${test}`;

// Number 
let firstNumber: number = 5;
let secondNumber: number = 10;

// Number math operations
let add: number = secondNumber + firstNumber;
let substract: number = secondNumber - firstNumber;
let multiply: number = secondNumber * firstNumber;
let devide: number = secondNumber / firstNumber;

// Boolean (true/false)
let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbersEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
let isAnyNumberEqualTo: boolean = 6 === firstNumber || 11 === secondNumber;

// Any 
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

console.log("stringValue", stringValue)
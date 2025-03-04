// Functions 

function greet(): void {
    // console.log("Hello to functions!")
}
greet();

function multiplyNums(numberOne: number, numberTwo: number): number {
    return numberTwo * numberOne;
}
multiplyNums(2,5)

function displayGreeting(
    firstName: string, 
    lastName: string, 
    age: number
): string {
    return `Hello, Mr.${lastName}, ${firstName}. You are ${age} years old.`
}
const greeting: string = displayGreeting("Ivan", "Ivanov", 30);
// console.log(greeting);

// First parametres cannot be an optional
function displayPetInfo(name: string, animal: string, age?: number): string {
    return `${name} is ${animal} ${age ? `and it is ${age} years old` : ""}.`
}
// console.log(displayPetInfo("Spike", "dog"));
// console.log(displayPetInfo("Spike", "dog", 5));

function substractNumbers(firstNum: number = 10, secondNum: number = 5):number {
    return firstNum - secondNum;
}
console.log(substractNumbers(20));
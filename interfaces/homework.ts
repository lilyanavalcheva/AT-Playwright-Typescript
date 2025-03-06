// 1. Create a TypeScript interface named Person that represents a
// person with the following properties:
// • name (string)
// • lastName (string)
// • age (number)
// • email (string)
// • phoneNumber (number)

interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

// 2. Create a TypeScript interface named PersonInfo that
// Extends Person type from the previous exercise and add the
// following properties:
// • country (optional string property)
// • greeting (optional method that return welcome message)

interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

const personInfo: PersonInfo = {
    name: "Magy",
    lastName: "Ivanova",
    age: 25,
    email: "magyivanova@example.com",
    phoneNumber: 1234567890,
    country: "Bulgaria",
    greeting: function () {
        return `Welcome Message!`
    },
};

console.log("personInfo", personInfo.greeting && personInfo.greeting());



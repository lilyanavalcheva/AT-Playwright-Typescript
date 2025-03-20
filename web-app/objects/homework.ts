// 3. Create an object of type Person using the interface from Exercise 1.
// Declare a variable person1 of type Person.

interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

const person1: Person = {
    name: "Petko",
    lastName: "Petkov",
    age: 27,
    email: "petkopetkov@example.com",
    phoneNumber: 9876543210,
}

console.log("person1", person1);


// 4. Create an object of type PersonInfo using the interface from
// Exercise 2. Declare a variable person2 of type PersonInfo.

interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
}

const person2: PersonInfo = {
    name: "Milena",
    lastName: "Milenova",
    age: 23,
    email: "milenamilenova@example.com",
    phoneNumber: 333343123,
    country: "Bulgaria",
    greeting: function () {
        return `Welcome World!`
    },
}

console.log("person2", person2);
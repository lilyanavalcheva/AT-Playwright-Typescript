// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string

interface Country {
  name: string;
  capital: string | "Sofia";
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface

const firstCountry: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  language: "Bulgarian",
  population: 7000000,
};

const secondCountry: Country = {
  name: "Italy",
  capital: "Rome",
  language: "Italian",
  population: 59000000,
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

function displayCountryDetails(countryObj: Country): string {
  return `The capital of ${countryObj.name} is ${countryObj.capital}. The official language is ${countryObj.language} and population of ${countryObj.population} people.`;
}

const detailsAboutBulgaria = displayCountryDetails(firstCountry);
const detailsAboutItaly = displayCountryDetails(secondCountry);
//console.log(detailsAboutBulgaria, "\n", detailsAboutItaly);

//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"

const studentOne: Student = {
  id: 7,
  name: "Pesho",
  age: 15,
  grade: 5,
};

const studentTwo: Student = {
  id: 8,
  name: "Tosho",
  age: 16,
  grade: 6,
};

const studentThree: Student = {
  id: 9,
  name: "Georgi",
  age: 17,
  grade: 4,
};

// Step Three: Declare array "students" with objects of type "Student"

let studentsArr: Student[] = [studentOne, studentTwo, studentThree];

// students.map((student) => {
//   if (student.name === "Tosho") {
//     return (student.grade = 3);
//   }
// });

// console.log("students", students);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

// function getStudents(studentObj: Student) {
//   //   return `The student with id:${studentObj.id} is named ${studentObj.name}. The student is ${studentObj.age} years old and his/her grade is ${studentObj.grade}. `;
//   return `Student name is ${studentObj.name}.`;

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

// const detailsAboutStudentOne = getStudents(studentOne);
// const detailsAboutStudentTwo = getStudents(studentTwo);
// const detailsAboutStudentThree = getStudents(studentThree);
// console.log(
//   detailsAboutStudentOne,
//   "\n",
//   detailsAboutStudentTwo,
//   "\n",
//   detailsAboutStudentThree
// );

const studentsNames = getStudents(studentsArr);
console.log("stedentsNames", studentsNames);

//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending


//   function testValue() {
//     let userInput = Number(prompt('Please enter a value:'));
    
//     if (userInput > 120) {
//       console.log('You passed the test');
//     } else {
//       console.log('You failed this test');
//     }
//   }
  
//   testValue();



// function checkAge() {
//     let age = Number(prompt('Please enter your age:'));
  
//     if (age < 18) {
//       console.log('You are a minor.');
//     } else if (age >= 18 && age <= 65) {
//       console.log('You are an adult.');
//     } else {
//       console.log('You are a senior citizen.');
//     }
//   }
  
//   checkAge();
  

  
// function checkGender() {

//     let gender = prompt('Enter a Gender:');
    
    
//     if (gender === "male") {
//         console.log('Male');
//     } else if (gender === "female") {
//         console.log('Female');
//     } else {
//         console.log('Unknown');
//     }
    
// }  

// checkGender();

let scores = {
    first: 400,
    second: 350,
    third: 250,
    fourth: 240,
    fifth: 230,
};
//    let sum = Object.values(scores).concat((acc, curr) => acc + curr, 0);
let sum = Object.values(scores).reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// function updateAge(obj) {
//     //Creat a new object and all properties from the original object
//     let newObj = {...obj};

//     newObj.age = newObj.age + 1;
    
// };

// console.log(newObj);


const person = {
    name: 'John',
    age: 25,
    city: 'New York',
    country: 'USA',
    occupation: 'Software Engineer'
};

const updatedPerson = updateAge(person);

console.log(person);
console.log(updatedPerson);
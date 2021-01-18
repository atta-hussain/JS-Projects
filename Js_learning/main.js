// Alert
// console.log(alert('Be Careful'));
// console.error('Be Careful');
// console.warn('Be Careful');

// Data type: String, numbers, boolean, null, undefined, symbol.

// const name = 'Hamza';
// const age = 12;
// const isCool = true;
// const x = null;
// const y = undefined;

// console.log(typeof numBer);


// Concatination

// console.log('my name is ' + name + ' And my age is ' + age + "." )

// Another methed to concatinate
// const Data = `My Name is ${name} And my age is ${age}`;
// console.log(Data);

// how to know length of the data
// console.log(name.length, name.toUpperCase());
// console.log(name.length, name.toLowerCase());

// To get some spacific part of the data.
// console.log(name.substring(0,3))

// To know or count data index number
// console.log(name.split(''));

// Array
// const Fruits = ['mango', 'banana', 'Orange'];

// Fruits.push('Grapes');
// Fruits.unshift('Amb');
// Fruits.pop();
//  console.log(Fruits);

// To know the number of index
// console.log(Fruits.indexOf('banana'));

// Object Literals(creating)

// const person1 = {

//     firstName : 'Hamza',
//     age : 21,
//     hobbies : ['sports', 'porn', 'music'],
//     adderss : {
//         street : 'main str no.8',
//         city : 'Lahore',
//         country : 'Pakistan',
//     }
// }

// const dataJson = JSON.stringify(person1);
// console.log(dataJson);


// console.log(person.age, person.firstName);
// console.log(person.adderss.country);
// adding anything in object from outside of the index
// person.male = 'mail';
// console.log(person);

//-----------------Destructuring------------

// const {hobbies} = person;
// console.log(hobbies[2]);

// const {adderss:{city}} = person;
// console.log(city);

// const {adderss} = person;
// console.log(address.city);

// Objects in array

// const persons = [
// personOne = {
//     fiestName: "Hamza",
//     age: 22,
//     hobbies: ['sports', 'porn', 'music'],
//     adderss: {
//         street: 'main str no.8',
//         city: 'Lahore',
//         country: 'Pakistan'
//     }
//   },

//   person2 = {
//     fiestName: "Nazok",
//     age: 21,
//     hobbies: ['sports', 'porn', 'music'],
//     adderss: {
//         street: 'main str no.8',
//         city: 'Lahore',
//         country: 'Pakistan'
//     }
//   }  
// ];

// console.log(persons[0]);

// ----------------------For, while, forEach

// const todos = [
//     {
//         id : 1,
//         text : 'Take out trash',
//         isCompleted : true 
//     },
//     {
//         id : 2,
//         text : 'Meeting with Boss',
//         isCompleted : false 
//     },
//     {
//         id : 3,
//         text : 'Dentist appt.',
//         isCompleted : true 
//     }
// ];

// console.log(todos);


// -----with for loop-------------
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].id);
// }


// ------another mathod to use ------for loop----------
    // for (let todo of todos) {
    //     console.log(todo.isCompleted);
    // }


// ---------simple---------For loop---------------
// for (let i = 0; i <= 10; i++) {
//     console.log('For loop ' + i);
// }


//  ---------------While -------------------
// let i = 0;
// while (i <= 10) {
//  console.log('While loop ' + i);
// i++;
// }

// -----------------ForEach-------
// todos.forEach(function(todo){
//     console.log(todo.id);
// });

// ------------------map-------
// const todoText = todos.map(function(todo) {
//     return todo.isCompleted;
// });
// console.log(todoText);

// -------------------filter---

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// -----------------------filter and map -------------
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === false;
// }).map(function(todo) {
//     return todo.text
// });
// console.log(todoCompleted);


// ---------------------if -- || ---or----
// const x = 4;
// const y = 11;

// if (x > 5 || y > 10) {
//     console.log('x is more then 5 or y is more than 10');
// }

// ------------------if --&&--and----------
 
// const x = 6;
// const y = 11;

// if (x > 5 && y > 10) {
//     console.log('x is more then 5 or y is more than 10');
// }

// ------------conditions------ (then) ? -----(else) : ----------

// const x = 11;

// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// -----------------switch with condition--------
// const x = 11;
//  const color = x > 10  ? 'red' : 'blue';
//   switch(color) {
//       case 'blue':
//           console.log('color is blue');
//           break;
//       case 'red':
//           console.log('color is red');
//           break;
//       default:
//           console.log('color is NOT red or blue');
//           break;
//   }


// -------------Functions------------
// function addNums(num1, num2) {
//     console.log(num1 + num2);
// }
// addNums(5,5);
// -----------------------------------
// function addNums(num1, num2) {
//     return(num1 + num2);
// }
// console.log(addNums(5,5));

// ----------Arow Function ( => )-------(I)
// const addNums = (num1 , num2) => {
//     return (num1 + num2);
// }
// console.log(addNums(5,4));

// --------(II)
// const addNums = (num1 , num2) => console.log(num1 + num2);
// addNums(5,4);

//  ------(III)
// const addNums = (num1, num2) => num1 + num2;
// console.log(addNums(3,4));

// -------(IX)
// const addNums = (num1, num2) => {
//     return num1 + num2;
// }
//  console.log(addNums(5,5));

// -------(V)
// const addNums = num => num + 1;
// console.log(addNums(5));


// ------------------OOP------------------
// Constructor Function
// function Person(firstName, lastName, dob) {
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
    
//     this.getfullName = function(){
//                 return `${this.firstName} ${this.lastName}`;
//             }
// }
// // can declear function outside of function-------------------
//     Person.prototype.getfullName =function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// // Instantiate Object
// const person1 = new Person('Hamza', 'Faroq', '12-11-1998');
// const person2 = new Person('Ali', 'Shabir Najomi', '04-09-1978');
// console.log(person1);
// console.log(person2.getfullName());
// ---------------
// Constructor Function
// function Person(firstName, lastName, dob) {
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
// can declear function inside of function--------------
    //     this.getfullName = function(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    // }
// Instantiate Object
// const person1 = new Person('Hamza', 'Faroq', '12-11-1998');
// const person2 = new Person('Ali', 'Shabir Najomi', '04-09-1978');
// console.log(person1);
// console.log(person2.getfullName());

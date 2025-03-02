// ------------------------------------------------------------------------------------------------
// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [[1, 2, 3, 4, 5]]

// ~~
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((num) => num ** 2);
// console.log(squares); // [1, 4, 9, 16, 25]

// ------------------------------------------------------------------------------------------------
// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// ~~
// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] }
// ];
// const mergedValues = data.flatMap((obj) => obj.values);
// console.log(mergedValues); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ------------------------------------------------------------------------------------------------
// Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// ~~
// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 }
// ];
// const hasUnder20 = people.some((person) => person.age < 20);
// console.log(hasUnder20); // true

// ------------------------------------------------------------------------------------------------
// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// ~~
// const numbers = [2, 4, 6, 8, 10];
// const allEven = numbers.every((num) => num % 2 === 0)
// console.log(allEven); // true

// ------------------------------------------------------------------------------------------------
// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// ~~
// const numbers3 = [2, 1, 6, 8, 9, 10, 12];
// const firstOdd = numbers3.find(num => num % 2 !== 0);
// console.log(firstOdd); // 1

//-------------------------------------------------------------------------------------------------
// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// ~~
// const numbers = [4, 2, 5, 1, 3];
// const sortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log(sortedNumbers); // [1, 2, 3, 4, 5]

// ------------------------------------------------------------------------------------------------
// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// ~~
// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedStringArray = stringArray.toSorted();
// console.log(sortedStringArray); // ["apple", "banana", "orange", "pear"]

// ------------------------------------------------------------------------------------------------
// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// ~~
// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sortedUsers = users.toSorted((a, b) => a.age - b.age);

// console.log(sortedUsers);
// [{ name: 'Bob', age: 19 }, { name: 'John', age: 27 }, { name: 'Jane', age: 31 }]

// ------------------------------------------------------------------------------------------------
// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// ~~
// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
// const usersFiltered = user.filter((user) => user.age > 20);
// console.log(usersFiltered); // [{name: "John", age: 27}, {name: "Jane", age: 31}]

// ------------------------------------------------------------------------------------------------
// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// ~~
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 15

// ------------------------------------------------------------------------------------------------
// Завдання 11:

// Створи клас для калькулятора, який має такі методи:
// - метод number, який набуває початкового значення для наступних операцій
// - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
// - методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// ~~
// class Calculator {
//   constructor() {
//     this.result = 0;
//   }

//   number(value) {
//     this.result = value;
//     return this;
//   }

//   add(value) {
//     this.result += value;
//     return this;
//   }

//   substruct(value) {
//     this.result -= value;
//     return this;
//   }

//   multiply(value) {
//     this.result *= value;
//     return this;
//   }

//   divide(value) {
//     if (value !== 0) this.result /= value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10)
//   .add(5)
//   .multiply(2)
//   .substruct(3)
//   .divide(2)
//   .getResult();

// console.log(result); // 13.5

// ------------------------------------------------------------------------------------------------
// Завдання 12:

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// ~~

// ------------------------------------------------------------------------------------------------
// Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// ##### Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

// ~~
// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email
//     };
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }

//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department
//     };
//   }
// }

// const person = new Person("John", 30, "Male", "john.doe@example.com");
// console.log(person.getDetails());
// // { name: 'John', age: 30, gender: 'Male', email: 'john@example.com' }

// const employee = new Employee(
//   "Jane",
//   28,
//   "Female",
//   "jane.smith@example.com",
//   50000,
//   "Engineering"
// );
// console.log(employee.getEmployeeDetails());
// // { salary: 50000, department: 'Engineering' }

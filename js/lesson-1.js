// ------------------------------------------------------------------------------------------------
// Завдання 1
// const number = Number(prompt("Введіть число:"));

// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// ------------------------------------------------------------------------------------------------
// Завдання 2
// const min = Math.floor(Math.random() * 60); // Випадкове число від 0 до 59

// let quarter;

// if (min >= 0 && min < 15) {
//   quarter = "першу";
// } else if (min >= 15 && min < 30) {
//   quarter = "другу";
// } else if (min >= 30 && min < 45) {
//   quarter = "третю";
// } else {
//   quarter = "четверту";
// }

// alert(`${min} входить в ${quarter} чверть`);

// ------------------------------------------------------------------------------------------------
// Завдання 3
// const num = prompt("Введіть число від 1 до 4:");
// let result;

// switch (num) {
//   case "1":
//     result = "зима";
//     break;
//   case "2":
//     result = "весна";
//     break;
//   case "3":
//     result = "літо";
//     break;
//   case "4":
//     result = "осінь";
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// console.log(result);

// ------------------------------------------------------------------------------------------------
// Завдання 6
// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// ------------------------------------------------------------------------------------------------
// Завдання 7
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   return a < b ? a : b;
// }

// const result = min(5, 10);
// console.log(result); // 5

// const result2 = min("a", 10);
// console.log(result2); // not a number
//-------------------------------------------------------------------------------------------------
// function min(...args) {
//   // Перевірка, чи всі елементи є числами
//   for (let i = 0; i < args.length; i++) {
//     if (typeof args[i] !== "number") {
//       return "Not a number!";
//     }
//   }

//   return Math.min(...args);
// }

// console.log(min(5, 10)); // 5
// console.log(min(5, "10", 3)); // Not a number!
// console.log(min(1, 2, 3, 0)); // 0
// console.log(min(5, 10, -3, 8)); // -3

// ------------------------------------------------------------------------------------------------
// Завдання 8
// function getNumbers(min, max) {
//   let sumEven = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       // is even?
//       sumEven += i;
//     }
//   }
//   return sumEven;
// }

// const result = getNumbers(1, 10);
// console.log("Сума парних чисел:", result);

// ------------------------------------------------------------------------------------------------
// Завдання 10
// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     }
//   }
// }
// fizzBuzz(15);

// ------------------------------------------------------------------------------------------------
// Завдання 4
// let minutes = prompt("Введіть кількість хвилин:");

// let hours = Math.floor(minutes / 60); // hours
// let remainingMinutes = minutes % 60; // rem min

// let formattedHours = String(hours).padStart(2, "0");
// let formattedMinutes = String(remainingMinutes).padStart(2, "0");

// console.log(`${formattedHours}:${formattedMinutes}`);

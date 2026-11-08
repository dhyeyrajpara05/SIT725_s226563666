// SIT725 - Task 1.1P: Introduction to Programming (Node.js)
// Demonstrates variables, functions, arrays, objects, loops and conditionals.

const student = { name: "Dhyey Rajpara", unit: "SIT725", task: "1.1P" };

function greet(person) {
  return `Hello, ${person.name}! Welcome to ${person.unit} - Task ${person.task}.`;
}

function sum(numbers) {
  let total = 0;
  for (const n of numbers) total += n;
  return total;
}

const marks = [72, 85, 90, 68];
const average = sum(marks) / marks.length;

console.log(greet(student));
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total: ${sum(marks)} | Average: ${average.toFixed(2)}`);
console.log(average >= 80 ? "Result: HD/D range" : "Result: Keep improving");

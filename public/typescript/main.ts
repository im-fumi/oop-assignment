//salary
// class Salary {
//   private name: string | null = "";
//   private hour: number = 0;
//   private degree: string | null = "";

//   public constructor() {
//     this.name = prompt("Enter your name");
//     this.hour = Number(prompt("Enter the hours"));
//     this.degree = prompt("Enter your degree");
//   }

//   public process() {
//     switch (this.degree) {
//       case "phd": {
//         let salary: number = this.hour * 400000;
//         let taxSalary = salary - salary * 0.1;
//         return `Name: ${this.name}, Pure salary: ${salary}, Salary with tax: ${taxSalary}`;
//       }
//       case "master": {
//         let salary: number = this.hour * 300000;
//         let taxSalary = salary - salary * 0.1;
//         return `Name: ${this.name}, Pure salary: ${salary}, Salary with tax: ${taxSalary}`;
//       }
//       case "bachelor": {
//         let salary: number = this.hour * 200000;
//         let taxSalary = salary - salary * 0.1;
//         return `Name: ${this.name}, Pure salary: ${salary}, Salary with tax: ${taxSalary}`;
//       }
//       case "diploma": {
//         let salary: number = this.hour * 100000;
//         let taxSalary = salary - salary * 0.1;
//         return `Name: ${this.name}, Pure salary: ${salary}, Salary with tax: ${taxSalary}`;
//       }
//       default: {
//         return "Error";
//       }
//     }
//   }
// }

// let person = new Salary();
// console.log(person.process());
//*********************************************************************
//data
// class Human {
//   private firstName: string | null = "";
//   private lastName: string | null = "";
//   private age: number = 0;
//   private fatherName: string | null = "";

//   public constructor() {
//     this.firstName = prompt("Enter your first name:");
//     this.lastName = prompt("Enter your last name:");
//     this.age = Number(prompt("Enter your age"));
//     this.fatherName = prompt("Enter your father's name:");
//   }

//   public allData() {
//     console.log(
//       `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old and my father's name is ${this.fatherName}.`
//     );
//   }
// }

// let person = new Human();
// person.allData();
//*********************************************************************
//circle
// class Circle {
//   private radius: number = 0;
//   private pi: number = 3.14;

//   public constructor(r: number) {
//     this.radius = r;
//   }

//   public area() {
//     return this.pi * Math.pow(this.radius, 2);
//   }
//   public circumference() {
//     return 2 * this.pi * this.radius;
//   }
//   public volume() {
//     return (4 / 3) * this.pi * Math.pow(this.radius, 3);
//   }
// }

// let cirObj = new Circle(Number(prompt("Enter the radius")));
// console.log(cirObj.area());
// console.log(cirObj.circumference());
// console.log(cirObj.volume());
//*********************************************************************
//fibonacci
// class Fibonacci{
//     public fibo(x:number): number{
//         if (x===1 || x===2){
//             return 1;
//         }
//         else {
//             return this.fibo(x-1) + this.fibo(x-2)
//         }
//     }
// }
// let fib=new Fibonacci()
// console.log(fib.fibo(Number(prompt("Enter a num"))));
//*********************************************************************
//calculator
// class Calculator {
//   private num1: number = 0;
//   private num2: number = 0;
//   private operator: string | null = "";

//   public constructor() {
//     this.num1 = Number(prompt("Enter the first number"));
//     this.num2 = Number(prompt("Enter the second number"));
//     this.operator = prompt("Enter the operator");
//   }

//   public sum() {
//     return this.num1 + this.num2;
//   }
//   public sub() {
//     return this.num1 - this.num2;
//   }
//   public div() {
//     return this.num1 / this.num2;
//   }
//   public mul() {
//     return this.num1 * this.num2;
//   }
//   public rem() {
//     return this.num1 % this.num2;
//   }
//   public pow() {
//     return this.num1 ** this.num2;
//   }

//   public process() {
//     switch (this.operator) {
//       case "+": {
//         return this.sum();
//       }
//       case "-": {
//         return this.sub();
//       }
//       case "/": {
//         return this.div();
//       }
//       case "*": {
//         return this.mul();
//       }
//       case "%": {
//         return this.rem();
//       }
//       case "^": {
//         return this.pow();
//       }
//     }
//   }
// }
// let operate=new Calculator()
// console.log(operate.process());
//*********************************************************************
//CGPA calc
// class Average {
//   private courseCount: number = 0;
//   private grade: number = 0;
//   private credit: number = 0;
//   private sum: number = 0;
//   private creditCount: number = 0;

//   public constructor() {
//     this.courseCount = Number(prompt("Enter the number of courses"));
//   }

//   public process() {
//     for (let i: number = 1; i <= this.courseCount; i++) {
//       this.grade = Number(prompt("Enter the grade"));
//       this.credit = Number(prompt("Enter the credit"));
//       this.sum += this.grade * this.credit;
//       this.creditCount += this.credit;
//     }
//     console.log(this.sum / this.creditCount);
//   }
// }
// let student=new Average()
// student.process()
//*********************************************************************
//cube
// class Cube {
//   private axixZ: number = 0;
//   private axixY: number = 0;
//   private axixX: number = 0;

//   public constructor() {
//     this.axixX = Number(prompt("Enter x"));
//     this.axixY = Number(prompt("Enter y"));
//     this.axixZ = Number(prompt("Enter z"));
//   }

//   public generate() {
//     for (let i: number = 1; i <= this.axixZ; i++) {
//       document.write(
//         `<div class='axisZ' style='left:calc(50% + ${
//           i * 5
//         }px); top:calc(50% + ${i * 5}px);'>`
//       );
//       for (let j: number = 1; j <= this.axixY; j++) {
//         document.write(`<div class='axisY'>`);
//         for (let k: number = 1; k <= this.axixX; k++) {
//           document.write(
//             `<span class='axisX' style='background-color:rgb(${Math.round(
//               Math.random() * 150
//             )},${Math.round(Math.random() * 100)},${Math.round(
//               Math.random() * 255
//             )})'>${k}</span>`
//           );
//         }
//         document.write(`</div>`);
//       }
//       document.write(`</div>`);
//     }
//   }
// }
// let cubie = new Cube();
// cubie.generate();
//*********************************************************************
//prime numbers
// class Prime {
//   private number: number = 0;

//   public constructor(x: number) {
//     this.number = x;
//   }

//   public checkPrime() {
//     let count: number = 0;
//     for (let i: number = 1; i <= this.number; i++) {
//       if (this.number % i === 0) {
//         count += 1;
//       }
//     }
//     if (count === 2) console.log(`${this.number}: Prime`);
//     else console.log(`${this.number}: Not Prime`);
//   }

//   public primeCount() {
//     for (let i: number = 1; i <= this.number; i++) {
//       let count: number = 0;
//       for (let j: number = 1; j <= this.number; j++) {
//         if (i % j === 0) {
//           count++;
//         }
//       }
//       if (count == 2) console.log(`${i}: Prime`);
//       else console.log(`${i}: Not Prime`);
//     }
//   }
// }

// let num = new Prime(Number(prompt("Enter a number")));
// num.primeCount();
// num.checkPrime();
//*********************************************************************
//factorial
// class Factorial {
//   private number: number = 0;

//   public constructor() {
//     this.number = Number(prompt("Enter a number"));
//   }

//   public factor() {
//     let mul: number = 1;
//     for (let i: number = 1; i <= this.number; i++) {
//       mul *= i;
//     }
//     console.log(mul);
//   }

//   public factorAll() {
//     for (let i: number = 1; i < this.number; i++) {
//       let mul: number = 1;
//       for (let j: number = 1; j <= i; j++) {
//         mul *= j;
//       }
//       console.log(mul);
//     }
//   }
// }

// let number = new Factorial();
// number.factorAll();
// number.factor();

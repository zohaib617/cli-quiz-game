#! /usr/bin/env node
import inquirer from "inquirer";
let score = 0;
console.log("******** Quiz App ********");
let answer = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: "1.What is TypeScript?",
        choices: ["A) A superset of JavaScript", "B) A web browser", "C) A database management system",
            "D) A server-side programming language"
        ]
    },
    {
        name: "q2",
        type: "list",
        message: "2.Which of the following is NOT a benefit of using TypeScript?",
        choices: [
            "A) Strongly-typed code",
            "B) Improved code readability",
            "C) Native browser support",
            "D) Better tooling and IntelliSense"
        ]
    },
    {
        name: "q3",
        type: "list",
        message: "3.Which keyword is used to define a variable in TypeScript that cannot be reassigned?",
        choices: [
            "A) let", "B) const", "C) var", "D) def"
        ]
    },
    {
        name: "q4",
        type: "list",
        message: "4.TypeScript provides support for which type of programming paradigm?",
        choices: [
            "A) Object-oriented programming",
            "B) Functional programming",
            "C) Imperative programming",
            "D) Procedural programming"
        ]
    },
    {
        name: "q5",
        type: "list",
        message: "5.What does TypeScript use to catch common errors as you type the code?",
        choices: [
            "A) Compiler errors",
            "B) Runtime errors",
            "C) Interpreter errors",
            "D) Debugging errors"
        ]
    },
    {
        name: "q6",
        type: "list",
        message: "6.Which of the following is NOT a valid TypeScript data type?",
        choices: [
            "A) number",
            "B) array",
            "C) boolean",
            "D) string"
        ]
    },
    {
        name: "q7",
        type: "list",
        message: "7.What is the purpose of the 'never' type in TypeScript?",
        choices: [
            "A) It represents any type",
            "B) It represents a type that is never assigned",
            "C) It represents a type that can be null or undefined,",
            "D) It represents a void type"
        ]
    },
    {
        name: "q8",
        type: "list",
        message: "8.Which TypeScript feature allows you to define custom data types?",
        choices: [
            "A) Interfaces", "B) Classes", "C) Modules", "D) Enums"
        ]
    },
    {
        name: "q9",
        type: "list",
        message: "9.What does TypeScript's 'strict' mode enable?",
        choices: [
            "A) Enforces stricter type checking rules",
            "B) Allows lax type checking rules",
            "C) Disables type checking entirely",
            "D) Enables dynamic typing"
        ]
    },
    {
        name: "q10",
        type: "list",
        message: "10.Which TypeScript feature allows you to specify multiple types for a single variable?",
        choices: [
            "A) Union types", "B) Intersection types", "C) Enumerations", "D) Conditional types"
        ]
    },
]);
if (answer.q1 === "A) A superset of JavaScript") {
    console.log("Q:1 Congratulation! Correct Answer: A) ");
    ++score;
}
else {
    console.log("Q:1 You choose wrong, Correct Answer: A) A superset of JavaScript");
}
if (answer.q2 === "C) Native browser support") {
    console.log("Q:2 Congratulation! Correct Answer: C)");
    ++score;
}
else {
    console.log("Q:2 You choose wrong, Correct Answer:C) Native browser support");
}
if (answer.q3 === "B) const") {
    console.log("Q:3 Congratulation! Correct Answer: B) ");
    ++score;
}
else {
    console.log("Q:3 You choose wrong, Correct Answer:B) const");
}
if (answer.q4 === "A) Object-oriented programming") {
    console.log("Q:4 Congratulation! Correct Answer: A");
    ++score;
}
else {
    console.log("Q:4 You choose wrong, Correct Answer: A) Object-oriented programming");
}
if (answer.q5 === "A) Compiler errors") {
    console.log("Q:5 Congratulation! Correct Answer: A");
    ++score;
}
else {
    console.log("Q:5 You choose wrong, Correct Answer: A) Compiler errors");
}
if (answer.q6 === "B) array") {
    console.log("Q:6 Congratulation! Correct Answer: B");
    ++score;
}
else {
    console.log("Q:6 You choose wrong, Correct Answer: B) array");
}
if (answer.q7 === "B) It represents a type that is never assigned") {
    console.log("Q:7 Congratulation! Correct Answer: B");
    ++score;
}
else {
    console.log("Q:7 You choose wrong, Correct Answer: B) It represents a type that is never assigned");
}
if (answer.q8 === "A) Interfaces") {
    console.log("Q:8 Congratulation! Correct Answer: A");
    ++score;
}
else {
    console.log("Q:8 You choose wrong, Correct Answer: A) Interfaces");
}
if (answer.q9 === "A) Enforces stricter type checking rules") {
    console.log("Q:9 Congratulation! Correct Answer: A");
    ++score;
}
else {
    console.log("Q:9 You choose wrong, Correct Answer: A) Enforces stricter type checking rules");
}
if (answer.q10 === "A) Union types") {
    console.log("Q:10 Congratulation! Correct Answer: A");
    ++score;
}
else {
    console.log("Q:10 You choose wrong, Correct Answer: A) Union types");
}
console.log(`\nyour score is 10 out of ${score}\n`);

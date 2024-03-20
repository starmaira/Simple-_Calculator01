#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "num1"
    },
    { message: "Enter second number",
        type: "number",
        name: "num2"
    },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operators",
        choices: ["addition", "substraction", "division", "multiplication", "modulus", "BMI", "exponential"]
    }
]);
if (answer.operators === "addition") {
    console.log(chalk.bold.blue(`yours answer is` + chalk.bold.yellow `${answer.num1 + answer.num2}`));
}
else if (answer.operators === "substraction") {
    console.log(chalk.bold.blue(`your answer is` + chalk.bold.green `${answer.num1 - answer.num2}`));
}
else if (answer.operators === "division") {
    console.log(chalk.bold.blue(`your answer is` + chalk.bold.magenta ` ${answer.num1 / answer.num2}`));
}
else if (answer.operators === "multiplication") {
    console.log(chalk.bold.blue(`your answer is` + chalk.bold.whiteBright `${answer.num1 * answer.num2}`));
}
else if (answer.operators === "modulus") {
    console.log(chalk.bold.blue(`your answer is` + chalk.bold.cyan `${answer.num1 % answer.num2}`));
}
else if (answer.operators === "BMI") {
    console.log(chalk.bold.blue(`your answer is` + chalk.bold.bgCyan.bold.black `${answer.num1 / (answer.num2 * answer.num2)}Kg`));
}
else if (answer.operators === "exponential") {
    console.log(chalk.bold.blue(`your answer is` + chalk.bold.gray `${answer.num1 ** answer.num2}`));
}
else {
    console.log(chalk.bold.red("Enter A Valid Number"));
}

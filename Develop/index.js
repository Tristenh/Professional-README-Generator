// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "your project name",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project",
  },
  {
    type: "input",
    name: "table of contents",
    message: "list your table of contents (optional)",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
  },
  {
    type: "checkbox",
    name: "license",
    message: "any applcable license, choose from the provided list",
    choices: ["MIT", "GPLv3", "BSD", "Apache 2.0"],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "List your collaborators, if any, with links to their GitHub profiles",
  },
  {
    type: "input",
    name: "tests",
    message:
      "write tests for your application. Then provide examples on how to run them here",
  },
  {
    type: "input",
    name: "questions",
    message: "enter git hub username and email",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
      type: "checkbox",
      name: "tableOfContents",
      message: "list your table of contents (optional)",
      choices: [
        "description",
        "installation",
        "usage",
        "license",
        "contributing",
        "tests",
        "questions",
      ],
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
      type: "list",
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
      name: "git",
      message: "enter GitHub username",
    },
    {
      type: "input",
      name: "email",
      message: "enter email address",
    },
  ])

  // TODO: Create a function to write README file
  .then((data) => {
    const tableOfContentsLinks = data.tableOfContents
      .map((choices) => `\n[](#${choices})`)
      .join("");
    const filename = "README.md";
    const dataInfo = `
  # ${data.title}
  ## description 
  ${data.description}
  ## table of contents 
  ${tableOfContentsLinks}\n
  ## installation
  ${data.installation}
  ## usage
  ${data.usage}
  ## license
  ${data.license}
  ## contributing
  ${data.contributing}
  ## tests
  ${data.tests}
  ## questions
  if any questions relating to this application please reach out using the below links
  [Github username](https://github.com/${data.git}?tab=repositories)
  [email](mailto:${data.email})`;
    fs.writeFile(filename, dataInfo, (err) =>
      err ? console.log(err) : console.log(`success!`)
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

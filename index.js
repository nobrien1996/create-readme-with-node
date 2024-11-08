// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require("fs");


// TODO: Create an array of questions for user input

const questions = [
    {
        message:"Enter Project Title",
        name:"title",
        type:"input"
    },
    {
        message:"Enter Project Description",
        name:"description",
        type:"input"
    },
    {
        message:"Enter Installation Instructions",
        name:"installation",
        type:"input"
    },
    {
        message:"Enter Usage Information",
        name:"usage",
        type:"input"
    },
    {
        message:"Enter Contributing Information",
        name:"contributing",
        type:"input"
    },
    {
        message:"Enter Test Information",
        name:"test",
        type:"input"
    },
    {
        message:"Enter License Information",
        name:"license",
        type:"list",
        choices:["MIT","ISC","APACHE","GPL","None"]
    },
    {
        message:"Enter GitHub Username",
        name:"github",
        type:"input"
    },
    {
        message:"Enter Email Address",
        name:"email",
        type:"input"
    },
];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data), function(err, data) {
        if(err) throw err
    });
    console.log("Good job generating the markdown");
};


// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then(response => {writeToFile("OUTPUT.md", response)});
};


// Function call to initialize app

init();
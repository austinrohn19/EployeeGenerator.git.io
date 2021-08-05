const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');

const output_directory = path.resolve(__dirname, "output");
const output_path = path.join(output_directory, "createdTeam.html");

const render = require("./src/template");


const team = []

function mainMenu() {
    function makeManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managersName",
                message: "What is the managers name?"
            },
            {
                type: "input",
                name: "managersId",
                message: "What is the managers ID?"
            },
            {
                type: "input",
                name: "managersEmail",
                message: "What is the managers email?"
            },
            {
                type: "input",
                name: "managersNumber",
                message: "What is the managers office number?"
            },
        ]).then(answer => {
            const manager = new Manager(answer.managersName, answer.managersId, answer.managersEmail, answer.managersNumber);
            team.push(manager)
            addToTeam();
        })

        function addToTeam() {
            inquirer.prompt([
                {
                    type: "list",
                    name: "jobChoice",
                    message: "Which type of team memeber do you want to add?",
                    choices: ["Engineer", "Intern", "I dont want to add anyone else"]

                }
            ]).then(userChoices => {
                if (userChoices.jobChoice === "Engineer") {
                    addEngineer();
                } else if (userChoices.jobChoice === "Intern") {
                    addIntern()
                } else { finishTeam() }
            })
        }

        // Prompt for engineer questons and add engineer to team

        function addEngineer() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "EngineersName",
                    message: "What is the Engineers name?"
                },
                {
                    type: "input",
                    name: "EngineersId",
                    message: "What is the Engineers ID?"
                },
                {
                    type: "input",
                    name: "EngineersEmail",
                    message: "What is the Engineers email?"
                },
                {
                    type: "input",
                    name: "engineersGitHub",
                    maessage: "what is your github address?"
                }
            ]).then(answer => {
                const engineer = new Engineer(answer.EngineersName, answer.EngineersId, answer.EngineersEmail, answer.engineersGitHub);
                team.push(engineer)
                addToTeam();
            })
        }


        // Prompt for intern questons and add intern to team

        function addIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "InternsName",
                    message: "What is the interns name?"
                },
                {
                    type: "input",
                    name: "InternsId",
                    message: "What is the interns ID?"
                },
                {
                    type: "input",
                    name: "InternsEmail",
                    message: "What is the interns email?"
                },
                {
                    type: "input",
                    name: "InternsSchool",
                    message: "What is your school?"
                }

            ]).then(answer => {
                const intern = new Intern(answer.InternsName, answer.InternsId, answer.InternsEmail, answer.InternsSchool
                    );
                team.push(intern)
                addToTeam();
            })
        }

        function finishTeam() {
            // Youre going to use "fs" to organize all of the output directory and output path and then render your "team"
            if(!fs.existsSync(output_directory)){
                fs.mkdirSync(output_directory)
            }
            fs.writeFileSync(output_path, render(team), 'utf-8')
        }

    }
    makeManager();
}

mainMenu();

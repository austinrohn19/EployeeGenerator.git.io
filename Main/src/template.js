const Manager = require("../lib/Manager");
const Enigneer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const createTeam = team =>{

    const renderManager = manager =>{
        return `<div class="card">
        <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
        <div class="card-id">ID: ${manager.getId()}</div>
        <div class="card-email"><a href = "mailto${manager.getEmail()}"><span style="color:black">Email: </span>${manager.getEmail()}</a></div>
        <div class="card-officenumber">Ofiice Number: ${manager.getofficeNumber()}</div>
        </div>
        </div>`
    }

    const renderEngineer = engineer =>{
        return `<div class="card">
        <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
        <div class="card-id">ID: ${engineer.getId()}</div>
        <div class="card-email"><a href = "mailto:${engineer.getEmail()}"><span style="color:black">Email: </span>${engineer.getEmail()}</a></div>
        <div class="card-github"><a href = "http://github.com/${engineer.getGitHub()}" target="_blank"> <span style="color:black">GitHub: </span>${engineer.getGitHub()}</a></div>
        </div>
        </div>`
    }

    const renderIntern = intern =>{
        return `<div class="card">
        <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
        <div class="card-id">ID: ${intern.getId()}</div>
        <div class="card-email"><a href = "mailto:${intern.getEmail()}"><span style="color:black">Email: </span>${intern.getEmail()}</a></div>
        <div class="card-school">School: ${intern.getSchool()}</div>
        </div>
        </div>`
    }

    const html= [];

    html.push(team.filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager)))

    html.push(team.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer)))

    html.push(team.filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern)))
    
    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>My Team</title>
</head>

<body>
<div class= "header">My Team</div>
<div class="container">
<div class="card-team">${createTeam(team)}</div>
</div>
</body>
</html>
    `
}

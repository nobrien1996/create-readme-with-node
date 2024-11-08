// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  return '[Click here for more information on license](https://choosealicense.com/licenses/)'

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  console.log(data)
    return `# ${data.title}

      ## Table of Contents

      * [Description](#description)
      * [Installation](#installation)
      * [License](#license)
      * [Usage](#usage)
      * [Contributing](#contributing)
      * [Test](#test)
      * [GitHub](#github)
      * [Email](#email)

      ### Description
      ${data.description}

      ### Installation
      ${data.installation}

      ### Usage
      ${data.usage}

      ### Contributing
      ${data.contributing}

      ### Test
      ${data.test}

      ### GitHub
      ${data.github}
      [Feel free to check my other projects](https://github.com/${data.github})

      ### Email
      ${data.email}
      [If you have any questions regarding this project, feel free to reach me at](${data.email})


      ### License
      ${renderLicenseSection(data.license)}
    `;
};

module.exports = generateMarkdown;

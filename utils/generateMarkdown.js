// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = ""
    if (license === "MIT") {
        licenseLink = "https://opensource.org/licenses/MIT"
    } else if (license === "APACHE2.0") {
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
    } else if (license === "GPL3.0") {
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
    } else if (license === "BSD3") {
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
    } else {
        return("No license provided")
    }
    return(licenseLink)
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  # ${data.title} 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Contact](#contact)

  ## Description
  ${data.description}
  
  ## Installation Instructions
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  Information on the license can be found here ${renderLicenseLink(data.license)}
  
  ## Contribution
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Contact
  If you have any further questions:\n
  Read through the documentation on github.com/${data.github}\n
  Or contact me directly at ${data.email}`;
}

module.exports = generateMarkdown;